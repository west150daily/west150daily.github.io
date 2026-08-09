(function () {
  /* ---------- Music modal + mini player ---------- */
  var modal = document.getElementById('musicModal');
  if (!modal) return;

  var openers = document.querySelectorAll('.js-open-music');
  var closers = modal.querySelectorAll('[data-close-music]');
  var trackItems = modal.querySelectorAll('.track-item');
  var albums = modal.querySelectorAll('.album');
  var showAllBtn = document.getElementById('showAllAlbums');
  var npAudio = document.getElementById('npAudio');
  var npCover = document.getElementById('npCover');
  var npTitle = document.getElementById('npTitle');
  var npCredit = document.getElementById('npCredit');
  var lyricsText = document.getElementById('lyricsText');

  var mini = document.getElementById('miniPlayer');
  var miniCover = document.getElementById('miniCover');
  var miniTitle = document.getElementById('miniTitle');
  var miniCredit = document.getElementById('miniCredit');
  var miniPlayBtn = document.getElementById('miniPlayBtn');
  var miniOpenBtn = document.getElementById('miniOpenBtn');

  function showAlbum(albumId) {
    albums.forEach(function (album) {
      var match = !albumId || album.getAttribute('data-album-id') === albumId;
      album.style.display = match ? '' : 'none';
    });
    if (showAllBtn) showAllBtn.hidden = !albumId;
  }

  function openModal(e) {
    if (e) e.preventDefault();
    var albumId = (e && e.currentTarget) ? e.currentTarget.getAttribute('data-album-id') : null;
    showAlbum(albumId);
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    /* keep audio playing — mini player takes over */
  }

  function showMini(cover, title, credit) {
    if (!mini) return;
    if (cover && miniCover) miniCover.src = cover;
    if (title && miniTitle) miniTitle.textContent = title;
    if (credit !== undefined && miniCredit) miniCredit.textContent = credit || '';
    mini.classList.add('is-visible');
    mini.setAttribute('aria-hidden', 'false');
    document.body.classList.add('has-mini-player');
  }

  function updateMiniPlaying(isPlaying) {
    if (!mini) return;
    mini.classList.toggle('is-playing', !!isPlaying);
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

  if (showAllBtn) {
    showAllBtn.addEventListener('click', function () {
      showAlbum(null);
    });
  }

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

      showMini(cover, title, credit);
      npAudio.play().catch(function () {});

      /* 트랙 선택 시 가사 영역으로 부드럽게 스크롤 */
      var lyricsBox = document.getElementById('lyricsBox');
      var panel = modal.querySelector('.music-modal__panel');
      if (lyricsBox && panel) {
        setTimeout(function () {
          var top = lyricsBox.offsetTop - 24;
          panel.scrollTo({ top: top, behavior: 'smooth' });
        }, 80);
      }
    });
  });

  if (npAudio) {
    npAudio.addEventListener('play', function () {
      updateMiniPlaying(true);
      showMini(
        npCover ? npCover.src : null,
        npTitle ? npTitle.textContent : null,
        npCredit ? npCredit.textContent : ''
      );
    });
    npAudio.addEventListener('pause', function () {
      updateMiniPlaying(false);
    });
    npAudio.addEventListener('ended', function () {
      updateMiniPlaying(false);
    });
  }

  if (miniPlayBtn && npAudio) {
    miniPlayBtn.addEventListener('click', function () {
      if (npAudio.paused) {
        npAudio.play().catch(function () {});
      } else {
        npAudio.pause();
      }
    });
  }

  if (miniOpenBtn) {
    miniOpenBtn.addEventListener('click', function () {
      openModal(null);
      showAlbum(null);
    });
  }
})();
