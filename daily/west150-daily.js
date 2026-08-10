(function () {
  "use strict";

  /* ---------- Live clock ---------- */
  var kstEl = document.getElementById("clockKST");
  var estEl = document.getElementById("clockEST");
  var dateEl = document.getElementById("navDate");

  function formatTime(timeZone) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(new Date());
  }

  function updateClock() {
    if (kstEl) kstEl.textContent = formatTime("Asia/Seoul");
    if (estEl) estEl.textContent = formatTime("America/New_York");

    if (dateEl) {
      dateEl.textContent = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Seoul",
        month: "short",
        day: "2-digit",
        year: "numeric"
      }).format(new Date()).toUpperCase();
    }
  }

  updateClock();
  setInterval(updateClock, 15000);


  /* ---------- State ---------- */

  var DATA_URL = "data.json?t=" + Date.now();

  var allCards = [];
  var activeCategory = "all";
  var visibleCount = 10;

  var READ_KEY = "west150_daily_read";


  /* ---------- Helpers ---------- */

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
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


  /* ---------- Read state ---------- */

  function getReadIds() {
    try {
      return JSON.parse(
        localStorage.getItem(READ_KEY) || "[]"
      );
    } catch (e) {
      return [];
    }
  }


  function saveRead(id) {
    var ids = getReadIds();

    if (ids.indexOf(String(id)) === -1) {
      ids.push(String(id));

      localStorage.setItem(
        READ_KEY,
        JSON.stringify(ids)
      );
    }
  }


  /* ============================================================
     IMAGE CAROUSEL
     ============================================================ */

  function renderImages(images) {

    if (!Array.isArray(images)) {
      return "";
    }

    var valid = images.filter(Boolean);

    if (!valid.length) {
      return "";
    }

    return (
      '<div class="feed-card__media feed-card__media--carousel">' +

        (
          valid.length > 1
            ? '<button class="carousel-btn carousel-btn--prev" aria-label="이전">‹</button>'
            : ""
        ) +

        (
          valid.length > 1
            ? '<button class="carousel-btn carousel-btn--next" aria-label="다음">›</button>'
            : ""
        ) +

        '<div class="carousel-track">' +

          valid.map(function (src) {

            return (
              '<div class="carousel-slide">' +
                '<img src="' +
                  escapeHtml(src) +
                  '" alt="" loading="lazy">' +
              '</div>'
            );

          }).join("") +

        "</div>" +

        (
          valid.length > 1
            ? '<div class="carousel-counter">1/' +
              valid.length +
              "</div>"
            : ""
        ) +

        (
          valid.length > 1
            ? '<div class="carousel-dots">' +

              valid.map(function (_, i) {

                return (
                  '<button class="dot ' +
                  (i === 0 ? "is-active" : "") +
                  '" aria-label="' +
                  (i + 1) +
                  '번째"></button>'
                );

              }).join("") +

              "</div>"
            : ""
        ) +

      "</div>"
    );
  }


  /* ============================================================
     BREAKING NEWS
     ============================================================ */

  function renderBreaking(cards) {

    var strip = document.querySelector(
      ".breaking-track .breaking-list"
    );

    var sidebar = document.querySelector(
      ".sidebar-list"
    );

    var count = document.getElementById(
      "breakingCount"
    );


    var breaking = cards
      .filter(function (card) {
        return !!card.breaking;
      })
      .slice(0, 5);


    if (count) {
      count.textContent =
        String(breaking.length).padStart(2, "0");
    }


    if (!breaking.length) {

      if (strip) {
        strip.innerHTML =
          '<div class="breaking-item">' +
            '<span class="breaking-item__text">' +
              "현재 속보가 없습니다." +
            "</span>" +
          "</div>";
      }


      if (sidebar) {
        sidebar.innerHTML =
          '<div class="breaking-item">' +
            '<span class="breaking-item__text">' +
              "현재 속보가 없습니다." +
            "</span>" +
          "</div>";
      }

      return;
    }


    function item(card) {

      return (
        '<a href="#card-' +
          escapeHtml(card.id) +
          '" class="breaking-item">' +

          '<span class="breaking-item__time">' +
            escapeHtml(
              formatRelativeTime(card.time)
            ) +
          "</span>" +

          '<span class="breaking-item__text">' +
            escapeHtml(card.text || "") +
          "</span>" +

        "</a>"
      );
    }


    if (strip) {
      strip.innerHTML =
        breaking.map(item).join("");
    }


    if (sidebar) {
      sidebar.innerHTML =
        breaking.map(item).join("");
    }
  }


  /* ============================================================
     FEED RENDER
     ============================================================ */

  function renderFeed() {

    var feed = document.getElementById(
      "mainFeed"
    );

    if (!feed) {
      return;
    }


    /* 최신순 정렬 */

    var sorted = allCards
      .slice()
      .sort(function (a, b) {

        return (
          new Date(b.time) -
          new Date(a.time)
        );

      });


    /* 카테고리 필터 */

    var filtered =
      activeCategory === "all"

        ? sorted

        : sorted.filter(function (card) {

            return (
              card.category ===
              activeCategory
            );

          });


    /* 표시할 카드 */

    var visible =
      filtered.slice(
        0,
        visibleCount
      );


    /* 카드 없음 */

    if (!visible.length) {

      feed.innerHTML =
        '<div class="empty">' +
          "등록된 카드가 없습니다." +
        "</div>";

      renderBreaking(sorted);

      return;
    }


    var readIds = getReadIds();


    /* 카드 HTML */

    feed.innerHTML =
      visible.map(function (card) {

        var id =
          "card-" +
          escapeHtml(card.id);

        var category =
          escapeHtml(
            card.category || ""
          );

        var text =
          escapeHtml(
            card.text || ""
          );

        var source =
          escapeHtml(
            card.source || "출처"
          );

        var sourceUrl =
          escapeHtml(
            card.sourceUrl || "#"
          );


        var isRead =
          readIds.indexOf(
            String(card.id)
          ) !== -1;


        return (

          '<article ' +

            'class="feed-card reveal' +
            (isRead
              ? " is-read"
              : "") +
            '"' +

            ' id="' +
            id +
            '"' +

            ' data-category="' +
            category +
            '"' +

            ' data-id="' +
            escapeHtml(card.id) +
            '">' +


            '<div class="feed-card__body">' +


              /* Header */

              '<div class="feed-card__head">' +

                '<span class="feed-card__name">' +
                  "WEST150 DAILY" +
                "</span>" +

                '<span class="feed-card__handle">' +
                  "@west150daily" +
                "</span>" +

                '<span class="feed-card__dot">' +
                  "·" +
                "</span>" +

                '<span class="feed-card__time">' +
                  escapeHtml(
                    formatRelativeTime(
                      card.time
                    )
                  ) +
                "</span>" +

              "</div>",


              /* Category */

              '<span class="feed-card__tag">' +
                category +
              "</span>",


              /* Headline */

              '<p class="feed-card__text">' +

                (
                  card.breaking
                    ? '<span style="color:#ff5c5c">' +
                      "[속보] " +
                      "</span>"
                    : ""
                ) +

                text +

              "</p>",


              /* Images */

              renderImages(
                card.images
              ),


              /* Actions */

              '<div class="feed-card__actions">' +

                '<button ' +
                  'class="share-btn" ' +
                  'data-action="copy" ' +
                  'type="button">' +
                  "LINK COPY" +
                "</button>" +

                '<button ' +
                  'class="share-btn" ' +
                  'data-action="x" ' +
                  'type="button">' +
                  "𝕏 SHARE" +
                "</button>" +

              "</div>",


              /* Source */

              '<div class="feed-card__source">' +

                formatDateLabel(
                  card.time
                ) +

                " · " +

                source +

                " · " +

                '<a href="' +
                  sourceUrl +
                  '" ' +
                  'target="_blank" ' +
                  'rel="noopener">' +

                  "원문 보기 ↗" +

                "</a>" +

              "</div>",


            "</div>" +

          "</article>"

        );

      }).join("");


    /* LOAD MORE */

    if (
      filtered.length >
      visibleCount
    ) {

      var wrap =
        document.createElement(
          "div"
        );

      wrap.className =
        "load-more-wrap";


      wrap.innerHTML =
        '<button ' +
          'class="load-more-btn" ' +
          'id="loadMoreBtn" ' +
          'type="button">' +
          "LOAD MORE" +
        "</button>";


      feed.appendChild(
        wrap
      );


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

    renderBreaking(sorted);
  }


  /* ============================================================
     CAROUSEL / SHARE / READ
     ============================================================ */

  function initDynamicFeatures() {

    /* READ STATE */

    document
      .querySelectorAll(".feed-card")
      .forEach(function (card) {

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


            if (!id) {
              return;
            }


            card.classList.add(
              "is-read"
            );


            saveRead(id);

          }
        );

      });


    /* CAROUSEL */

    document
      .querySelectorAll(
        ".feed-card__media--carousel"
      )
      .forEach(function (media) {

        var track =
          media.querySelector(
            ".carousel-track"
          );

        var slides =
          track
            ? track.querySelectorAll(
                ".carousel-slide"
              )
            : [];


        var dots =
          media.querySelectorAll(
            ".carousel-dots .dot"
          );


        var counter =
          media.querySelector(
            ".carousel-counter"
          );


        var prev =
          media.querySelector(
            ".carousel-btn--prev"
          );


        var next =
          media.querySelector(
            ".carousel-btn--next"
          );


        if (
          !track ||
          !slides.length
        ) {
          return;
        }


        var current = 0;


        function goTo(index) {

          current =
            Math.max(
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

            behavior:
              "smooth"
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
              (current + 1) +
              "/" +
              slides.length;

          }
        }


        if (prev) {

          prev.addEventListener(
            "click",
            function (e) {

              e.stopPropagation();

              goTo(
                current - 1
              );

            }
          );

        }


        if (next) {

          next.addEventListener(
            "click",
            function (e) {

              e.stopPropagation();

              goTo(
                current + 1
              );

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
                  (current + 1) +
                  "/" +
                  slides.length;

              }

            }

          }
        );

      });


    /* SHARE BUTTON */

    document
      .querySelectorAll(
        ".share-btn"
      )
      .forEach(function (btn) {

        btn.addEventListener(
          "click",
          function (e) {

            e.stopPropagation();


            var card =
              btn.closest(
                ".feed-card"
              );


            var text =
              card
                ? (
                    card.querySelector(
                      ".feed-card__text"
                    )?.textContent ||
                    ""
                  ).trim()
                : "";


            var url =
              window.location.href
                .split("#")[0] +
              (
                card
                  ? "#" + card.id
                  : ""
              );


            /* LINK COPY */

            if (
              btn.getAttribute(
                "data-action"
              ) === "copy"
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


            /* X SHARE */

            else {

              var shareUrl =
                "https://twitter.com/intent/tweet" +
                "?text=" +
                encodeURIComponent(
                  text.slice(0, 100)
                ) +
                "&url=" +
                encodeURIComponent(url);


              window.open(
                shareUrl,
                "_blank",
                "noopener"
              );

            }

          }
        );

      });

  }


  /* ============================================================
     CATEGORY FILTER
     ============================================================ */

  document
    .querySelectorAll(
      ".cat-btn"
    )
    .forEach(function (btn) {

      btn.addEventListener(
        "click",
        function () {

          document
            .querySelectorAll(
              ".cat-btn"
            )
            .forEach(
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

        }
      );

    });


  /* ============================================================
     BACK TO TOP
     ============================================================ */

  var backToTop =
    document.getElementById(
      "backToTop"
    );


  if (backToTop) {

    window.addEventListener(
      "scroll",
      function () {

        backToTop.classList.toggle(
          "is-visible",
          window.scrollY > 600
        );

      }
    );


    backToTop.addEventListener(
      "click",
      function () {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* ============================================================
     LOAD data.json
     ============================================================ */

  fetch(
    DATA_URL,
    {
      cache: "no-store"
    }
  )

    .then(
      function (res) {

        if (!res.ok) {

          throw new Error(
            "data.json HTTP " +
            res.status
          );

        }

        return res.json();

      }
    )


    .then(
      function (data) {

        allCards =
          Array.isArray(data)
            ? data
            : [];


        renderFeed();

      }
    )


    .catch(
      function (error) {

        console.error(
          "WEST150 DAILY data.json 로드 실패:",
          error
        );


        var feed =
          document.getElementById(
            "mainFeed"
          );


        if (feed) {

          feed.innerHTML =
            '<div class="empty">' +

              "data.json을 불러오지 못했습니다." +

              "<br>" +

              "<small>" +

                "daily/data.json 경로와 " +
                "파일명을 확인해주세요." +

              "</small>" +

            "</div>";

        }


        renderBreaking([]);

      }
    );

})();