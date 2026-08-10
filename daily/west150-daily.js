(function () {
  "use strict";

  var DATA_URL = "data.json?t=" + Date.now();
  var allCards = [];
  var activeCategory = "all";
  var visibleCount = 10;

  var READ_KEY = "west150_daily_read";
  var SAVE_KEY = "west150_daily_saved";
  var THEME_KEY = "west150_daily_theme";

  var currentReaderId = null;
  var topStoryId = null;

  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function $$(selector, root) {
    return Array.prototype.slice.call(
      (root || document).querySelectorAll(selector)
    );
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function safeArray(value) {
    return Array.isArray(value) ? value.filter(Boolean) : [];
  }

  function getStored(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (e) {
      return [];
    }
  }

  function setStored(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  function isSaved(id) {
    return getStored(SAVE_KEY).indexOf(String(id)) !== -1;
  }

  function toggleSaved(id) {
    var ids = getStored(SAVE_KEY);
    id = String(id);
    var index = ids.indexOf(id);

    if (index === -1) {
      ids.push(id);
    } else {
      ids.splice(index, 1);
    }

    setStored(SAVE_KEY, ids);
    updateSavedCount();

    return index === -1;
  }

  function updateSavedCount() {
    var el = $("#savedCount");

    if (el) {
      el.textContent = String(getStored(SAVE_KEY).length);
    }
  }

  function saveRead(id) {
    var ids = getStored(READ_KEY);
    id = String(id);

    if (ids.indexOf(id) === -1) {
      ids.push(id);
      setStored(READ_KEY, ids);
    }
  }

  function isRead(id) {
    return getStored(READ_KEY).indexOf(String(id)) !== -1;
  }

  function formatTime(timeZone) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(new Date());
  }

  function updateClock() {
    var kst = $("#clockKST");

    if (kst) {
      kst.textContent = formatTime("Asia/Seoul");
    }

    var navDate = $("#navDate");
    var heroDate = $("#heroDate");

    var date = new Date();

    var dateText = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Seoul",
      weekday: "long",
      month: "long",
      day: "2-digit",
      year: "numeric"
    })
      .format(date)
      .toUpperCase();

    var shortDate = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Seoul",
      month: "short",
      day: "2-digit",
      year: "numeric"
    })
      .format(date)
      .toUpperCase();

    if (navDate) {
      navDate.textContent = shortDate;
    }

    if (heroDate) {
      heroDate.textContent = dateText;
    }
  }

  function formatRelativeTime(iso) {
    var d = new Date(iso);

    if (isNaN(d.getTime())) {
      return "";
    }

    var diff = Math.max(0, Date.now() - d.getTime());
    var min = Math.floor(diff / 60000);

    if (min < 1) {
      return "방금";
    }

    if (min < 60) {
      return min + "분 전";
    }

    var hour = Math.floor(min / 60);

    if (hour < 24) {
      return hour + "시간 전";
    }

    var day = Math.floor(hour / 24);

    if (day < 7) {
      return day + "일 전";
    }

    return d.toLocaleDateString("ko-KR");
  }

  function formatDateLabel(iso) {
    var d = new Date(iso);

    if (isNaN(d.getTime())) {
      return "";
    }

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    })
      .format(d)
      .toUpperCase();
  }

  function getCardTitle(card) {
    return (
      card.title ||
      card.headline ||
      card.name ||
      card.text ||
      "WEST150 DAILY"
    );
  }

  function getCardText(card) {
    return (
      card.body ||
      card.description ||
      card.summary ||
      card.text ||
      ""
    );
  }

  function getFactStatus(card) {
    return String(
      card.factCheck ||
      card.factcheck ||
      card.verification ||
      card.status ||
      ""
    ).toLowerCase();
  }

  function factLabel(card) {
    var status = getFactStatus(card);

    if (!status) {
      return "";
    }

    if (
      status === "verified" ||
      status === "검증" ||
      status === "확인"
    ) {
      return '<span class="fact-label verified">VERIFIED</span>';
    }

    if (
      status === "context" ||
      status === "맥락" ||
      status === "contextual"
    ) {
      return '<span class="fact-label context">CONTEXT</span>';
    }

    if (
      status === "unverified" ||
      status === "미확인" ||
      status === "주의"
    ) {
      return '<span class="fact-label unverified">UNVERIFIED</span>';
    }

    return (
      '<span class="fact-label">' +
      escapeHtml(
        String(
          card.factCheck ||
          card.factcheck ||
          card.verification ||
          card.status
        )
      ) +
      "</span>"
    );
  }

  function renderImages(images, reader) {
    var valid = safeArray(images);

    if (!valid.length) {
      return "";
    }

    if (reader) {
      return valid
        .map(function (src) {
          return (
            '<img src="' +
            escapeHtml(src) +
            '" alt="" loading="lazy">'
          );
        })
        .join("");
    }

    return (
      '<div class="feed-card__media feed-card__media--carousel">' +

      (valid.length > 1
        ? '<button class="carousel-btn carousel-btn--prev" aria-label="이전">‹</button>'
        : "") +

      (valid.length > 1
        ? '<button class="carousel-btn carousel-btn--next" aria-label="다음">›</button>'
        : "") +

      '<div class="carousel-track">' +

      valid
        .map(function (src) {
          return (
            '<div class="carousel-slide">' +
            '<img src="' +
            escapeHtml(src) +
            '" alt="" loading="lazy">' +
            "</div>"
          );
        })
        .join("") +

      "</div>" +

      (valid.length > 1
        ? '<div class="carousel-counter">1/' +
          valid.length +
          "</div>"
        : "") +

      (valid.length > 1
        ? '<div class="carousel-dots">' +
          valid
            .map(function (_, i) {
              return (
                '<button class="dot ' +
                (i === 0 ? "is-active" : "") +
                '" aria-label="' +
                (i + 1) +
                '번째"></button>'
              );
            })
            .join("") +
          "</div>"
        : "") +

      "</div>"
    );
  }

  function sortedCards() {
    return allCards.slice().sort(function (a, b) {
      return new Date(b.time) - new Date(a.time);
    });
  }

  function filteredCards() {
    var sorted = sortedCards();

    if (activeCategory === "all") {
      return sorted;
    }

    return sorted.filter(function (card) {
      return card.category === activeCategory;
    });
  }

  function renderTopStory() {
    var cards = sortedCards();
    var card = cards[0];

    if (!card) {
      return;
    }

    topStoryId = String(card.id);

    var title = $("#topStoryTitle");
    var text = $("#topStoryText");
    var meta = $("#topStoryMeta");
    var source = $("#topStorySource");
    var visual = $("#topStoryVisual");
    var read = $("#topStoryRead");

    if (title) {
      title.textContent = getCardTitle(card);
    }

    if (text) {
      text.textContent = getCardText(card).slice(0, 260);
    }

    if (meta) {
      meta.textContent =
        (card.category || "EDITORIAL") +
        " · " +
        formatDateLabel(card.time);
    }

    if (source) {
      source.textContent =
        "SOURCE — " +
        (card.source || "WEST150 DAILY");
    }

    if (visual) {
      var images = safeArray(card.images);

      visual.style.backgroundImage = images.length
        ? 'url("' +
          images[0].replace(/"/g, '\\"') +
          '")'
        : "";

      visual.classList.toggle(
        "has-image",
        images.length > 0
      );
    }

    if (read) {
      read.onclick = function () {
        openReader(card.id);
      };
    }
  }

  function renderBreaking() {
    var strip = $("#breakingList");
    var sidebar = $("#sidebarList");
    var count = $("#breakingCount");

    var breaking = sortedCards()
      .filter(function (card) {
        return !!card.breaking;
      })
      .slice(0, 6);

    if (count) {
      count.textContent = String(
        breaking.length
      ).padStart(2, "0");
    }

    if (!breaking.length) {
      if (strip) {
        strip.innerHTML =
          '<span class="breaking-item">' +
          '<span class="breaking-item__text">' +
          "현재 속보가 없습니다." +
          "</span>" +
          "</span>";
      }

      if (sidebar) {
        sidebar.innerHTML =
          '<div class="empty">현재 속보가 없습니다.</div>';
      }

      return;
    }

    function stripItem(card) {
      return (
        '<a class="breaking-item" href="#card-' +
        escapeHtml(card.id) +
        '">' +

        '<span class="breaking-item__time">' +
        escapeHtml(formatRelativeTime(card.time)) +
        "</span>" +

        '<span class="breaking-item__text">' +
        escapeHtml(getCardTitle(card)) +
        "</span>" +

        "</a>"
      );
    }

    function sideItem(card) {
      return (
        '<a class="breaking-item" href="#card-' +
        escapeHtml(card.id) +
        '">' +

        '<span class="breaking-item__time">' +
        escapeHtml(formatRelativeTime(card.time)) +
        "</span>" +

        '<span class="breaking-item__text">' +
        escapeHtml(getCardTitle(card)) +
        "</span>" +

        "</a>"
      );
    }

    if (strip) {
      strip.innerHTML = breaking
        .map(stripItem)
        .join("");
    }

    if (sidebar) {
      sidebar.innerHTML = breaking
        .map(sideItem)
        .join("");
    }
  }

  function renderFeed() {
    var feed = $("#mainFeed");

    if (!feed) {
      return;
    }

    var filtered = filteredCards();
    var visible = filtered.slice(
      0,
      visibleCount
    );

    if (!visible.length) {
      feed.innerHTML =
        '<div class="empty">등록된 카드가 없습니다.</div>';

      return;
    }

    feed.innerHTML = visible
      .map(function (card) {
        var id =
          "card-" +
          escapeHtml(card.id);

        var category = escapeHtml(
          card.category || "NEWS"
        );

        var text = escapeHtml(
          getCardText(card)
        );

        var source = escapeHtml(
          card.source || "출처"
        );

        var sourceUrl = escapeHtml(
          card.sourceUrl || "#"
        );

        var read = isRead(card.id);
        var saved = isSaved(card.id);
        var breaking = !!card.breaking;

        return (
          '<article class="feed-card' +
          (read ? " is-read" : "") +
          '" id="' +
          id +
          '" data-id="' +
          escapeHtml(card.id) +
          '">' +

          '<div class="feed-card__head">' +

          '<span class="feed-card__name">' +
          "WEST150 DAILY" +
          "</span>" +

          '<span class="feed-card__handle">' +
          "@west150daily" +
          "</span>" +

          '<span class="feed-card__time">' +
          escapeHtml(
            formatRelativeTime(card.time)
          ) +
          "</span>" +

          "</div>" +

          '<span class="feed-card__tag">' +
          category +
          "</span>" +

          '<p class="feed-card__text">' +

          (breaking
            ? '<span class="breaking-mark">BREAKING</span>'
            : "") +

          text +

          "</p>" +

          renderImages(
            card.images,
            false
          ) +

          '<div class="feed-card__actions">' +

          '<button class="save-btn ' +
          (saved ? "is-saved" : "") +
          '" data-action="save" type="button">' +
          (saved ? "♥ SAVED" : "♡ SAVE") +
          "</button>" +

          '<button class="share-btn" data-action="copy" type="button">' +
          "LINK COPY" +
          "</button>" +

          '<button class="share-btn" data-action="x" type="button">' +
          "𝕏 SHARE" +
          "</button>" +

          '<button class="share-btn" data-action="read" type="button">' +
          "READ ↗" +
          "</button>" +

          "</div>" +

          '<div class="feed-card__source">' +

          formatDateLabel(card.time) +
          " · " +
          source +

          factLabel(card) +

          ' · <a href="' +
          sourceUrl +
          '" target="_blank" rel="noopener">' +
          "원문 보기 ↗" +
          "</a>" +

          "</div>" +

          "</article>"
        );
      })
      .join("");

    if (filtered.length > visibleCount) {
      var wrap =
        document.createElement("div");

      wrap.className =
        "load-more-wrap";

      wrap.innerHTML =
        '<button class="load-more-btn" type="button">' +
        "LOAD MORE" +
        "</button>";

      feed.appendChild(wrap);

      wrap
        .querySelector("button")
        .addEventListener(
          "click",
          function () {
            visibleCount += 10;
            renderFeed();
          }
        );
    }

    initDynamicFeatures();
    renderBreaking();
    updateSavedCount();
    revealFeed();
  }

  function initDynamicFeatures() {
    $$(".feed-card").forEach(
      function (card) {
        card.addEventListener(
          "click",
          function (e) {
            if (
              e.target.closest("button") ||
              e.target.closest("a")
            ) {
              return;
            }

            var id =
              card.getAttribute(
                "data-id"
              );

            if (id) {
              saveRead(id);
            }

            card.classList.add(
              "is-read"
            );
          }
        );
      }
    );

    $$(".feed-card__media--carousel")
      .forEach(function (media) {
        var track = $(
          ".carousel-track",
          media
        );

        var slides = track
          ? $$(".carousel-slide", track)
          : [];

        var dots = $$(
          ".carousel-dots .dot",
          media
        );

        var counter = $(
          ".carousel-counter",
          media
        );

        var prev = $(
          ".carousel-btn--prev",
          media
        );

        var next = $(
          ".carousel-btn--next",
          media
        );

        if (
          !track ||
          !slides.length
        ) {
          return;
        }

        var current = 0;

        function goTo(index) {
          current = Math.max(
            0,
            Math.min(
              slides.length - 1,
              index
            )
          );

          track.scrollTo({
            left:
              current *
              track.clientWidth,
            behavior: "smooth"
          });

          dots.forEach(
            function (dot, i) {
              dot.classList.toggle(
                "is-active",
                i === current
              );
            }
          );

          if (counter) {
            counter.textContent =
              current +
              1 +
              "/" +
              slides.length;
          }
        }

        if (prev) {
          prev.addEventListener(
            "click",
            function (e) {
              e.stopPropagation();
              goTo(current - 1);
            }
          );
        }

        if (next) {
          next.addEventListener(
            "click",
            function (e) {
              e.stopPropagation();
              goTo(current + 1);
            }
          );
        }

        dots.forEach(
          function (dot, i) {
            dot.addEventListener(
              "click",
              function (e) {
                e.stopPropagation();
                goTo(i);
              }
            );
          }
        );

        track.addEventListener(
          "scroll",
          function () {
            var index =
              Math.round(
                track.scrollLeft /
                track.clientWidth
              );

            if (
              index !== current
            ) {
              current = index;

              dots.forEach(
                function (dot, i) {
                  dot.classList.toggle(
                    "is-active",
                    i === current
                  );
                }
              );

              if (counter) {
                counter.textContent =
                  current +
                  1 +
                  "/" +
                  slides.length;
              }
            }
          }
        );
      }
    );

    $$(".save-btn").forEach(
      function (btn) {
        btn.addEventListener(
          "click",
          function (e) {
            e.stopPropagation();

            var card =
              btn.closest(
                ".feed-card"
              );

            if (!card) {
              return;
            }

            var id =
              card.getAttribute(
                "data-id"
              );

            var saved =
              toggleSaved(id);

            btn.classList.toggle(
              "is-saved",
              saved
            );

            btn.textContent = saved
              ? "♥ SAVED"
              : "♡ SAVE";
          }
        );
      }
    );

    $$(".share-btn").forEach(
      function (btn) {
        btn.addEventListener(
          "click",
          function (e) {
            e.stopPropagation();

            var card =
              btn.closest(
                ".feed-card"
              );

            if (!card) {
              return;
            }

            var id =
              card.getAttribute(
                "data-id"
              );

            var data =
              allCards.find(
                function (item) {
                  return (
                    String(item.id) ===
                    String(id)
                  );
                }
              );

            if (!data) {
              return;
            }

            var text =
              getCardText(
                data
              ).trim();

            var url =
              window.location.href.split(
                "#"
              )[0] +
              "#card-" +
              encodeURIComponent(id);

            if (
              btn.getAttribute(
                "data-action"
              ) === "read"
            ) {
              openReader(id);
              return;
            }

            if (
              btn.getAttribute(
                "data-action"
              ) === "copy"
            ) {
              if (
                navigator.clipboard
              ) {
                navigator.clipboard
                  .writeText(url)
                  .then(
                    function () {
                      btn.textContent =
                        "COPIED";

                      setTimeout(
                        function () {
                          btn.textContent =
                            "LINK COPY";
                        },
                        1500
                      );
                    }
                  );
              }

              return;
            }

            var shareUrl =
              "https://twitter.com/intent/tweet?text=" +
              encodeURIComponent(
                text.slice(0, 100)
              ) +
              "&url=" +
              encodeURIComponent(
                url
              );

            window.open(
              shareUrl,
              "_blank",
              "noopener"
            );
          }
        );
      }
    );
  }

  function openReader(id) {
    var card =
      allCards.find(
        function (item) {
          return (
            String(item.id) ===
            String(id)
          );
        }
      );

    if (!card) {
      return;
    }

    currentReaderId =
      String(card.id);

    var panel =
      $("#readerPanel");

    var category =
      $("#readerCategory");

    var title =
      $("#readerTitle");

    var meta =
      $("#readerMeta");

    var images =
      $("#readerImages");

    var body =
      $("#readerBody");

    var source =
      $("#readerSource");

    var bookmark =
      $("#readerBookmark");

    if (category) {
      category.textContent =
        card.category ||
        "EDITORIAL";
    }

    if (title) {
      title.textContent =
        getCardTitle(card);
    }

    if (meta) {
      meta.textContent =
        "WEST150 DAILY · " +
        formatDateLabel(card.time) +
        " · " +
        (card.source ||
          "SOURCE");
    }

    if (images) {
      images.innerHTML =
        renderImages(
          card.images,
          true
        );
    }

    if (body) {
      body.textContent =
        getCardText(card);
    }

    if (source) {
      source.innerHTML =
        "SOURCE — " +
        escapeHtml(
          card.source ||
          "WEST150 DAILY"
        ) +
        " " +
        factLabel(card) +
        ' · <a href="' +
        escapeHtml(
          card.sourceUrl || "#"
        ) +
        '" target="_blank" rel="noopener">' +
        "원문 보기 ↗" +
        "</a>";
    }

    if (bookmark) {
      bookmark.textContent =
        isSaved(card.id)
          ? "♥ SAVED"
          : "♡ SAVE";
    }

    panel.classList.add(
      "is-open"
    );

    panel.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";
  }

  function closePanels() {
    $$(".overlay-panel").forEach(
      function (panel) {
        panel.classList.remove(
          "is-open"
        );

        panel.setAttribute(
          "aria-hidden",
          "true"
        );
      }
    );

    document.body.style.overflow =
      "";
  }

  function openSearch() {
    var panel =
      $("#searchPanel");

    var input =
      $("#searchInput");

    if (!panel) {
      return;
    }

    panel.classList.add(
      "is-open"
    );

    panel.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

    setTimeout(
      function () {
        if (input) {
          input.focus();
          renderSearch("");
        }
      },
      30
    );
  }

  function renderSearch(query) {
    var results =
      $("#searchResults");

    if (!results) {
      return;
    }

    var q = String(
      query || ""
    )
      .trim()
      .toLowerCase();

    if (!q) {
      results.innerHTML =
        '<p class="panel-hint">' +
        "제목, 내용, 카테고리, 출처를 검색할 수 있습니다." +
        "</p>";

      return;
    }

    var matches =
      sortedCards()
        .filter(function (card) {
          var hay = [
            getCardTitle(card),
            getCardText(card),
            card.category,
            card.source
          ]
            .join(" ")
            .toLowerCase();

          return (
            hay.indexOf(q) !== -1
          );
        })
        .slice(0, 12);

    if (!matches.length) {
      results.innerHTML =
        '<p class="panel-hint">' +
        "검색 결과가 없습니다." +
        "</p>";

      return;
    }

    results.innerHTML =
      matches
        .map(function (card) {
          return (
            '<button class="search-result" type="button" data-search-id="' +
            escapeHtml(card.id) +
            '">' +

            '<span class="search-result__cat">' +
            escapeHtml(
              card.category ||
              "NEWS"
            ) +
            "</span>" +

            '<span class="search-result__title">' +
            escapeHtml(
              getCardTitle(card)
            ) +
            "</span>" +

            '<span class="search-result__date">' +
            escapeHtml(
              formatDateLabel(
                card.time
              )
            ) +
            "</span>" +

            "</button>"
          );
        })
        .join("");

    $$(".search-result", results)
      .forEach(function (button) {
        button.addEventListener(
          "click",
          function () {
            closePanels();

            openReader(
              button.getAttribute(
                "data-search-id"
              )
            );
          }
        );
      });
  }

  function initTheme() {
    var saved =
      localStorage.getItem(
        THEME_KEY
      );

    if (saved === "light") {
      document.body.classList.add(
        "light-mode"
      );
    }

    updateThemeButton();
  }

  function updateThemeButton() {
    var btn =
      $("#themeToggle");

    if (!btn) {
      return;
    }

    btn.textContent =
      document.body.classList.contains(
        "light-mode"
      )
        ? "☼"
        : "◐";
  }

  function toggleTheme() {
    document.body.classList.toggle(
      "light-mode"
    );

    localStorage.setItem(
      THEME_KEY,
      document.body.classList.contains(
        "light-mode"
      )
        ? "light"
        : "dark"
    );

    updateThemeButton();
  }

  function revealFeed() {
    if (
      !(
        "IntersectionObserver" in
        window
      )
    ) {
      return;
    }

    $$(".feed-card").forEach(
      function (el) {
        if (
          el.dataset.revealBound
        ) {
          return;
        }

        el.dataset.revealBound =
          "1";

        el.style.opacity = "0";
        el.style.transform =
          "translateY(14px)";

        var observer =
          new IntersectionObserver(
            function (entries) {
              entries.forEach(
                function (entry) {
                  if (
                    entry.isIntersecting
                  ) {
                    entry.target.style.opacity =
                      "1";

                    entry.target.style.transform =
                      "none";

                    observer.unobserve(
                      entry.target
                    );
                  }
                }
              );
            },
            {
              threshold: 0.05
            }
          );

        observer.observe(el);
      }
    );
  }

  /* ---------- Navigation ---------- */

  $$(".cat-btn").forEach(
    function (btn) {
      btn.addEventListener(
        "click",
        function () {
          $$(".cat-btn").forEach(
            function (b) {
              b.classList.remove(
                "is-active"
              );
            }
          );

          btn.classList.add(
            "is-active"
          );

          activeCategory =
            btn.getAttribute(
              "data-cat"
            ) || "all";

          visibleCount = 10;

          renderFeed();

          document
            .getElementById("news")
            .scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
        }
      );
    }
  );

  $("#searchOpen")?.addEventListener(
    "click",
    openSearch
  );

  $("#mobileSearch")?.addEventListener(
    "click",
    openSearch
  );

  $("#themeToggle")?.addEventListener(
    "click",
    toggleTheme
  );

  $$("#mobile-bottom-nav button").forEach(
    function () {}
  );

  $$("[data-scroll]").forEach(
    function (btn) {
      btn.addEventListener(
        "click",
        function () {
          var target =
            document.querySelector(
              btn.getAttribute(
                "data-scroll"
              )
            );

          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      );
    }
  );

  $$("[data-close-panel]").forEach(
    function (el) {
      el.addEventListener(
        "click",
        closePanels
      );
    }
  );

  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "Escape") {
        closePanels();
      }
    }
  );

  $("#readerBookmark")?.addEventListener(
    "click",
    function () {
      if (!currentReaderId) {
        return;
      }

      var saved =
        toggleSaved(
          currentReaderId
        );

      this.textContent =
        saved
          ? "♥ SAVED"
          : "♡ SAVE";
    }
  );

  $("#readerCopy")?.addEventListener(
    "click",
    function () {
      if (!currentReaderId) {
        return;
      }

      var url =
        window.location.href.split(
          "#"
        )[0] +
        "#card-" +
        encodeURIComponent(
          currentReaderId
        );

      if (
        navigator.clipboard
      ) {
        navigator.clipboard
          .writeText(url)
          .then(function () {
            $("#readerCopy").textContent =
              "COPIED";

            setTimeout(
              function () {
                $("#readerCopy").textContent =
                  "LINK COPY";
              },
              1500
            );
          });
      }
    }
  );

  $("#readerX")?.addEventListener(
    "click",
    function () {
      if (!currentReaderId) {
        return;
      }

      var card =
        allCards.find(
          function (item) {
            return (
              String(item.id) ===
              currentReaderId
            );
          }
        );

      if (!card) {
        return;
      }

      var url =
        window.location.href.split(
          "#"
        )[0] +
        "#card-" +
        encodeURIComponent(
          currentReaderId
        );

      var shareUrl =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(
          getCardTitle(
            card
          ).slice(0, 100)
        ) +
        "&url=" +
        encodeURIComponent(
          url
        );

      window.open(
        shareUrl,
        "_blank",
        "noopener"
      );
    }
  );

  $("#searchInput")?.addEventListener(
    "input",
    function () {
      renderSearch(
        this.value
      );
    }
  );

  $("#breakingJump")?.addEventListener(
    "click",
    function () {
      var target =
        $("#news");

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  );

  $("#backToTop")?.addEventListener(
    "click",
    function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  );

  window.addEventListener(
    "scroll",
    function () {
      var btn =
        $("#backToTop");

      if (btn) {
        btn.classList.toggle(
          "is-visible",
          window.scrollY > 600
        );
      }
    }
  );

  $("#mobileSaved")?.addEventListener(
    "click",
    function () {
      var saved =
        getStored(SAVE_KEY);

      if (!saved.length) {
        alert(
          "저장한 기사가 없습니다."
        );

        return;
      }

      var first =
        allCards.find(
          function (card) {
            return (
              String(card.id) ===
              String(saved[0])
            );
          }
        );

      if (first) {
        openReader(
          first.id
        );
      }
    }
  );

  /* ---------- Data ---------- */

  function loadData() {
    fetch(DATA_URL, {
      cache: "no-store"
    })
      .then(function (res) {
        if (!res.ok) {
          throw new Error(
            "data.json HTTP " +
            res.status
          );
        }

        return res.json();
      })
      .then(function (data) {
        allCards =
          Array.isArray(data)
            ? data
            : [];

        renderTopStory();
        renderBreaking();
        renderFeed();
        updateSavedCount();

        var edition =
          $("#editionNumber");

        if (edition) {
          edition.textContent =
            String(
              Math.max(
                1,
                Math.ceil(
                  allCards.length /
                  10
                )
              )
            ).padStart(2, "0");
        }
      })
      .catch(function (error) {
        console.error(
          "WEST150 DAILY data.json 로드 실패:",
          error
        );

        var feed =
          $("#mainFeed");

        if (feed) {
          feed.innerHTML =
            '<div class="empty">' +
            "data.json을 불러오지 못했습니다.<br>" +
            "<small>" +
            "daily/data.json 경로와 파일명을 확인해주세요." +
            "</small>" +
            "</div>";
        }

        renderBreaking();
      });
  }

  updateClock();

  setInterval(
    updateClock,
    15000
  );

  initTheme();
  updateSavedCount();
  loadData();

})();
