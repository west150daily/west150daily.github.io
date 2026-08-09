(function () {
  /* ---------- Live clock ---------- */
  var kstEl = document.getElementById('clockKST');
  var estEl = document.getElementById('clockEST');

  function formatTime(timeZone) {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(new Date());
  }

  function updateClock() {
    if (kstEl) kstEl.textContent = formatTime('Asia/Seoul');
    if (estEl) estEl.textContent = formatTime('America/New_York');
  }

  if (kstEl || estEl) {
    updateClock();
    setInterval(updateClock, 15000);
  }
})();

(function () {
  /* ---------- Carousel + Arrows ---------- */
  document.querySelectorAll('.feed-card__media--carousel').forEach(function (media) {
    var track = media.querySelector('.carousel-track');
    var slides = track ? track.querySelectorAll('.carousel-slide') : [];
    var dots = media.querySelectorAll('.carousel-dots .dot');
    var counter = media.querySelector('.carousel-counter');
    var prevBtn = media.querySelector('.carousel-btn--prev');
    var nextBtn = media.querySelector('.carousel-btn--next');

    if (!track || !slides.length) return;

    var current = 0;

    function goTo(index) {
      current = Math.max(0, Math.min(slides.length - 1, index));

      track.scrollTo({
        left: current * track.clientWidth,
        behavior: 'smooth'
      });

      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === current);
      });

      if (counter) {
        counter.textContent = (current + 1) + '/' + slides.length;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goTo(current - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        goTo(current + 1);
      });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goTo(i);
      });
    });

    track.addEventListener('scroll', function () {
      var index = Math.round(track.scrollLeft / track.clientWidth);

      if (index !== current) {
        current = index;

        dots.forEach(function (d, i) {
          d.classList.toggle('is-active', i === current);
        });

        if (counter) {
          counter.textContent = (current + 1) + '/' + slides.length;
        }
      }
    });

    goTo(0);
  });
})();

(function () {
  /* ---------- Category Filter ---------- */

  var buttons = document.querySelectorAll('.cat-btn');
  var cards = document.querySelectorAll('.feed-card');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {

      buttons.forEach(function (b) {
        b.classList.remove('is-active');
      });

      btn.classList.add('is-active');

      var cat = btn.getAttribute('data-cat');

      cards.forEach(function (card) {
        var cardCat = card.getAttribute('data-category');

        if (cat === 'all' || cardCat === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });

      document.querySelectorAll('.date-group').forEach(function (group) {
        var visible = group.querySelectorAll(
          '.feed-card:not([style*="display: none"])'
        );

        group.style.display = visible.length ? '' : 'none';
      });
    });
  });
})();

(function () {
  /* ---------- Share buttons ---------- */

  document.querySelectorAll('.share-btn').forEach(function (btn) {

    btn.addEventListener('click', function () {

      var card = btn.closest('.feed-card');

      var text = card
        ? card.querySelector('.feed-card__text')?.textContent?.trim() || ''
        : '';

      var url =
        window.location.href.split('#')[0] +
        (card ? '#' + card.id : '');

      if (btn.getAttribute('data-action') === 'copy') {

        navigator.clipboard.writeText(url).then(function () {

          btn.textContent = '✓ 복사됨';

          setTimeout(function () {
            btn.textContent = '🔗 복사';
          }, 1500);

        });

      } else if (btn.getAttribute('data-action') === 'x') {

        var shareUrl =
          'https://twitter.com/intent/tweet?text=' +
          encodeURIComponent(text.slice(0, 100)) +
          '&url=' +
          encodeURIComponent(url);

        window.open(
          shareUrl,
          '_blank',
          'noopener'
        );
      }
    });
  });
})();

(function () {
  /* ---------- Read state ---------- */

  var READ_KEY = 'west150_daily_read';

  var readIds = JSON.parse(
    localStorage.getItem(READ_KEY) || '[]'
  );

  function markRead(id) {

    if (readIds.indexOf(id) === -1) {

      readIds.push(id);

      localStorage.setItem(
        READ_KEY,
        JSON.stringify(readIds)
      );
    }
  }

  document.querySelectorAll('.feed-card').forEach(function (card) {

    var id = card.getAttribute('data-id');

    if (readIds.indexOf(id) !== -1) {
      card.classList.add('is-read');
    }

    card.addEventListener('click', function () {

      card.classList.add('is-read');

      markRead(id);
    });
  });
})();

(function () {
  /* ---------- Back to top ---------- */

  var btn = document.getElementById('backToTop');

  if (!btn) return;

  window.addEventListener('scroll', function () {

    if (window.scrollY > 400) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  });

  btn.addEventListener('click', function () {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();


(function () {
  /* ---------- data.json Live Feed ---------- */

  var DATA_URL = 'data.json?t=' + Date.now();

  var allCards = [];

  var activeCategory = 'all';

  var visibleCount = 10;


  /* ---------- HTML escape ---------- */

  function escapeHtml(value) {

    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }


  /* ---------- Relative time ---------- */

  function formatRelativeTime(iso) {

    var d = new Date(iso);

    if (isNaN(d.getTime())) {
      return '';
    }

    var diff = Math.max(
      0,
      Date.now() - d.getTime()
    );

    var min = Math.floor(diff / 60000);

    if (min < 1) {
      return '방금';
    }

    if (min < 60) {
      return min + '분 전';
    }

    var hour = Math.floor(min / 60);

    if (hour < 24) {
      return hour + '시간 전';
    }

    var day = Math.floor(hour / 24);

    if (day < 7) {
      return day + '일 전';
    }

    return d.toLocaleDateString('ko-KR');
  }


  /* ---------- Images ---------- */

  function renderImages(images) {

    if (!Array.isArray(images) || !images.length) {
      return '';
    }

    var valid = images.filter(Boolean);

    return (
      '<div class="feed-card__media feed-card__media--carousel">' +

      (
        valid.length > 1
          ? '<button class="carousel-btn carousel-btn--prev" aria-label="이전">‹</button>'
          : ''
      ) +

      (
        valid.length > 1
          ? '<button class="carousel-btn carousel-btn--next" aria-label="다음">›</button>'
          : ''
      ) +

      '<div class="carousel-track">' +

      valid.map(function (src) {

        return (
          '<div class="carousel-slide">' +
          '<img src="' +
          escapeHtml(src) +
          '" alt="">' +
          '</div>'
        );

      }).join('') +

      '</div>' +

      (
        valid.length > 1
          ? '<div class="carousel-counter">1/' +
            valid.length +
            '</div>'
          : ''
      ) +

      (
        valid.length > 1
          ? '<div class="carousel-dots">' +

            valid.map(function (_, i) {

              return (
                '<button class="dot ' +
                (i === 0 ? 'is-active' : '') +
                '" aria-label="' +
                (i + 1) +
                '번째"></button>'
              );

            }).join('') +

            '</div>'
          : ''
      ) +

      '</div>'
    );
  }


  /* ---------- Render feed ---------- */

  function renderFeed() {

    var feed = document.getElementById('mainFeed');

    if (!feed) return;


    var sorted = allCards.slice().sort(function (a, b) {

      return new Date(b.time) - new Date(a.time);

    });


    var filtered =
      activeCategory === 'all'
        ? sorted
        : sorted.filter(function (card) {
            return card.category === activeCategory;
          });


    var visible = filtered.slice(
      0,
      visibleCount
    );


    if (!visible.length) {

      feed.innerHTML =
        '<div class="empty">' +
        '등록된 카드가 없습니다.' +
        '</div>';

      return;
    }


    feed.innerHTML = visible.map(function (card) {

      var id =
        'card-' +
        escapeHtml(card.id);

      var category =
        escapeHtml(card.category || '');

      var text =
        escapeHtml(card.text || '');

      var source =
        escapeHtml(card.source || '출처');

      var sourceUrl =
        escapeHtml(card.sourceUrl || '#');


      var breaking = card.breaking
        ? '<span style="color:#ff6b6b;font-size:0.75rem;">[속보]</span> '
        : '';


      return (

        '<article class="feed-card reveal"' +

        ' id="' +
        id +
        '"' +

        ' data-category="' +
        category +
        '"' +

        ' data-id="' +
        escapeHtml(card.id) +
        '">' +


        '<div class="feed-card__avatar">' +

        '<img src="../images/west150-daily-icon.png" alt="">' +

        '</div>' +


        '<div class="feed-card__body">' +


        '<div class="feed-card__head">' +

        '<span class="feed-card__name">' +
        'WEST150 DAILY' +
        '</span>' +

        '<span class="feed-card__handle">' +
        '@west150daily' +
        '</span>' +

        '<span class="feed-card__dot">' +
        '·' +
        '</span>' +

        '<span class="feed-card__time">' +

        escapeHtml(
          formatRelativeTime(card.time)
        ) +

        '</span>' +

        '</div>' +


        '<span class="feed-card__tag">' +
        category +
        '</span>' +


        '<p class="feed-card__text">' +

        breaking +

        text +

        '</p>' +


        renderImages(card.images) +


        '<div class="feed-card__actions">' +

        '<button class="share-btn" data-action="copy">' +
        '🔗 복사' +
        '</button>' +

        '<button class="share-btn" data-action="x">' +
        '𝕏 공유' +
        '</button>' +

        '</div>' +


        '<div class="feed-card__source">' +

        source +

        ' · ' +

        '<a href="' +
        sourceUrl +
        '" target="_blank" rel="noopener">' +

        '원문 보기' +

        '</a>' +

        '</div>' +


        '</div>' +

        '</article>'

      );

    }).join('');


    /* 동적으로 생성된 카드 기능 */

    initDynamicFeatures();


    /* 더 보기 */

    var oldMore =
      document.getElementById('loadMoreBtn');

    if (oldMore) {
      oldMore.remove();
    }


    if (filtered.length > visibleCount) {

      var wrap =
        document.createElement('div');

      wrap.className =
        'load-more-wrap';


      wrap.innerHTML =
        '<button class="load-more-btn" id="loadMoreBtn">' +
        '더 보기' +
        '</button>';


      feed.appendChild(wrap);


      wrap
        .querySelector('button')
        .addEventListener('click', function () {

          visibleCount += 10;

          renderFeed();

        });
    }


    renderBreaking(sorted);
  }


  /* ---------- Breaking news ---------- */

  function renderBreaking(cards) {

    var box =
      document.querySelector('.breaking-list');

    if (!box) return;


    var breaking =
      cards
        .filter(function (card) {
          return card.breaking;
        })
        .slice(0, 5);


    if (!breaking.length) {

      box.innerHTML =
        '<div style="color:rgba(231,233,236,0.45);font-size:0.85rem;">' +
        '현재 속보가 없습니다.' +
        '</div>';

      return;
    }


    box.innerHTML =
      breaking.map(function (card) {

        return (

          '<a href="#card-' +
          escapeHtml(card.id) +
          '" class="breaking-item">' +

          '<img class="breaking-item__thumb" src="../images/west150-daily-icon.png" alt="">' +

          '<div class="breaking-item__content">' +

          '<span class="breaking-item__time">' +

          escapeHtml(
            formatRelativeTime(card.time)
          ) +

          '</span>' +

          '<span class="breaking-item__text">' +

          escapeHtml(
            card.text || ''
          ) +

          '</span>' +

          '</div>' +

          '</a>'

        );

      }).join('');
  }


  /* ---------- Dynamic features ---------- */

  function initDynamicFeatures() {


    /* 캐러셀 */

    document
      .querySelectorAll(
        '.feed-card__media--carousel'
      )
      .forEach(function (media) {

        var track =
          media.querySelector(
            '.carousel-track'
          );

        var slides =
          track
            ? track.querySelectorAll(
                '.carousel-slide'
              )
            : [];

        var dots =
          media.querySelectorAll(
            '.carousel-dots .dot'
          );

        var counter =
          media.querySelector(
            '.carousel-counter'
          );

        var prevBtn =
          media.querySelector(
            '.carousel-btn--prev'
          );

        var nextBtn =
          media.querySelector(
            '.carousel-btn--next'
          );


        if (!track || !slides.length) {
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
              'smooth'
          });


          dots.forEach(function (d, i) {

            d.classList.toggle(
              'is-active',
              i === current
            );

          });


          if (counter) {

            counter.textContent =
              (current + 1) +
              '/' +
              slides.length;

          }
        }


        if (prevBtn) {

          prevBtn.addEventListener(
            'click',
            function () {

              goTo(current - 1);

            }
          );
        }


        if (nextBtn) {

          nextBtn.addEventListener(
            'click',
            function () {

              goTo(current + 1);

            }
          );
        }


        dots.forEach(function (dot, i) {

          dot.addEventListener(
            'click',
            function () {

              goTo(i);

            }
          );
        });


        track.addEventListener(
          'scroll',
          function () {

            var index =
              Math.round(
                track.scrollLeft /
                track.clientWidth
              );


            if (index !== current) {

              current = index;


              dots.forEach(
                function (d, i) {

                  d.classList.toggle(
                    'is-active',
                    i === current
                  );

                }
              );


              if (counter) {

                counter.textContent =
                  (current + 1) +
                  '/' +
                  slides.length;

              }
            }
          }
        );


        goTo(0);

      });


    /* 공유 버튼 */

    document
      .querySelectorAll('.share-btn')
      .forEach(function (btn) {

        btn.addEventListener(
          'click',
          function (e) {

            e.stopPropagation();


            var card =
              btn.closest('.feed-card');


            var text =
              card
                ? (
                    card
                      .querySelector(
                        '.feed-card__text'
                      )
                      ?.textContent
                      ?.trim() || ''
                  )
                : '';


            var url =
              window.location.href.split('#')[0] +
              (
                card
                  ? '#' + card.id
                  : ''
              );


            if (
              btn.getAttribute(
                'data-action'
              ) === 'copy'
            ) {

              navigator.clipboard
                .writeText(url)
                .then(function () {

                  btn.textContent =
                    '✓ 복사됨';


                  setTimeout(
                    function () {

                      btn.textContent =
                        '🔗 복사';

                    },
                    1500
                  );

                });

            } else {

              var shareUrl =
                'https://twitter.com/intent/tweet?text=' +

                encodeURIComponent(
                  text.slice(0, 100)
                ) +

                '&url=' +

                encodeURIComponent(url);


              window.open(
                shareUrl,
                '_blank',
                'noopener'
              );
            }
          }
        );
      });


    /* 읽음 표시 */

    var READ_KEY =
      'west150_daily_read';


    var readIds =
      JSON.parse(
        localStorage.getItem(
          READ_KEY
        ) || '[]'
      );


    document
      .querySelectorAll('.feed-card')
      .forEach(function (card) {

        var id =
          card.getAttribute(
            'data-id'
          );


        if (
          readIds.indexOf(id) !== -1
        ) {

          card.classList.add(
            'is-read'
          );

        }


        card.addEventListener(
          'click',
          function () {

            card.classList.add(
              'is-read'
            );


            if (
              readIds.indexOf(id) === -1
            ) {

              readIds.push(id);


              localStorage.setItem(
                READ_KEY,
                JSON.stringify(readIds)
              );

            }

          }
        );

      });

  }


  /* ---------- Category filter ---------- */

  document
    .querySelectorAll('.cat-btn')
    .forEach(function (btn) {

      btn.addEventListener(
        'click',
        function () {

          document
            .querySelectorAll('.cat-btn')
            .forEach(function (b) {

              b.classList.remove(
                'is-active'
              );

            });


          btn.classList.add(
            'is-active'
          );


          activeCategory =
            btn.getAttribute(
              'data-cat'
            ) || 'all';


          visibleCount = 10;


          renderFeed();

        }
      );

    });


  /* ---------- Load data.json ---------- */

  fetch(
    DATA_URL,
    {
      cache: 'no-store'
    }
  )

    .then(function (res) {

      if (!res.ok) {

        throw new Error(
          'data.json HTTP ' +
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


      renderFeed();

    })

    .catch(function (error) {

      console.error(
        'WEST150 DAILY data.json 로드 실패:',
        error
      );


      var feed =
        document.getElementById(
          'mainFeed'
        );


      if (feed) {

        feed.innerHTML =
          '<div class="empty">' +

          'data.json을 불러오지 못했습니다.' +

          '<br>' +

          '<small>' +

          'GitHub의 daily/data.json 경로와 파일명을 확인해주세요.' +

          '</small>' +

          '</div>';

      }


      renderBreaking([]);

    });

})();
