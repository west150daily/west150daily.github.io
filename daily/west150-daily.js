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
      track.scrollTo({ left: current * track.clientWidth, behavior: 'smooth' });
      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === current);
      });
      if (counter) counter.textContent = (current + 1) + '/' + slides.length;
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    track.addEventListener('scroll', function () {
      var index = Math.round(track.scrollLeft / track.clientWidth);
      if (index !== current) {
        current = index;
        dots.forEach(function (d, i) { d.classList.toggle('is-active', i === current); });
        if (counter) counter.textContent = (current + 1) + '/' + slides.length;
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
      buttons.forEach(function (b) { b.classList.remove('is-active'); });
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

      // 날짜 그룹 타이틀 처리
      document.querySelectorAll('.date-group').forEach(function (group) {
        var visible = group.querySelectorAll('.feed-card:not([style*="display: none"])');
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
      var text = card ? card.querySelector('.feed-card__text')?.textContent?.trim() || '' : '';
      var url = window.location.href.split('#')[0] + (card ? '#' + card.id : '');

      if (btn.getAttribute('data-action') === 'copy') {
        navigator.clipboard.writeText(url).then(function () {
          btn.textContent = '✓ 복사됨';
          setTimeout(function () { btn.textContent = '🔗 복사'; }, 1500);
        });
      } else if (btn.getAttribute('data-action') === 'x') {
        var shareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text.slice(0, 100)) + '&url=' + encodeURIComponent(url);
        window.open(shareUrl, '_blank', 'noopener');
      }
    });
  });
})();

(function () {
  /* ---------- Read state ---------- */
  var READ_KEY = 'west150_daily_read';
  var readIds = JSON.parse(localStorage.getItem(READ_KEY) || '[]');

  function markRead(id) {
    if (readIds.indexOf(id) === -1) {
      readIds.push(id);
      localStorage.setItem(READ_KEY, JSON.stringify(readIds));
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

(function () {
  /* ---------- Load more (샘플) ---------- */
  var btn = document.getElementById('loadMoreBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      btn.textContent = '준비 중...';
      setTimeout(function () {
        btn.textContent = '더 이상 소식이 없습니다';
        btn.disabled = true;
        btn.style.opacity = '0.5';
      }, 600);
    });
  }
})();
