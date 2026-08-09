(function () {
  var modal = document.getElementById('musicModal');
  if (!modal) return;

  var openers = document.querySelectorAll('.js-open-music');
  var closers = modal.querySelectorAll('[data-close-music]');
  var trackItems = modal.querySelectorAll('.track-item');
  var npAudio = document.getElementById('npAudio');
  var npCover = document.getElementById('npCover');
  var npTitle = document.getElementById('npTitle');
  var npCredit = document.getElementById('npCredit');
  var lyricsText = document.getElementById('lyricsText');

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    npAudio.pause();
  }

  openers.forEach(function (btn) {
    btn.addEventListener('click', openModal);
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') openModal(e);
    });
  });

  closers.forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  trackItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var src = item.getAttribute('data-src');
      var cover = item.getAttribute('data-cover');
      var title = item.getAttribute('data-title');
      var trackId = item.getAttribute('data-track-id');
      var lyrics = (typeof LYRICS !== 'undefined' && trackId && LYRICS[trackId])
        || item.getAttribute('data-lyrics')
        || '가사가 곧 추가될 예정입니다.';
      var credit = item.getAttribute('data-credit-label') || '';

      trackItems.forEach(function (t) { t.classList.remove('is-active'); });
      item.classList.add('is-active');

      npAudio.src = src;
      npCover.src = cover;
      npTitle.textContent = title;
      if (npCredit) npCredit.textContent = credit;
      lyricsText.textContent = lyrics;
      npAudio.play();
    });
  });
})();
