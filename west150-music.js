(function () {
  /* ---------- Music modal + mini player ---------- */
  var modal = document.getElementById('musicModal');
  if (!modal) return;

  var openers = document.querySelectorAll('.js-open-music');
  var closers = modal.querySelectorAll('[data-close-music]');
  var trackItems = modal.querySelectorAll('.track-item');
  var albums = modal.querySelectorAll('.album');
  var showAllBtn = document.getElementById('showAllAlbums');
  var playAllBtn = document.getElementById('playAllBtn');
  var repeatBtn = document.getElementById('repeatBtn');
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

  var isPlayAll = false;
  var isRepeat = false;

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

  /* Returns the ordered list of track-item buttons belonging to the
     album that is currently visible in the modal (i.e. not display:none). */
  function getActiveAlbumTracks() {
    var activeAlbum = null;
    albums.forEach(function (album) {
      if (!activeAlbum && album.style.display !== 'none') activeAlbum = album;
    });
    if (!activeAlbum) activeAlbum = albums[0];
    if (!activeAlbum) return [];
    return Array.prototype.slice.call(activeAlbum.querySelectorAll('.track-item'));
  }

  function playTrack(item) {
    if (!item) return;
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
  }

  function scrollToLyrics() {
    var lyricsBox = document.getElementById('lyricsBox');
    var panel = modal.querySelector('.music-modal__panel');
    if (lyricsBox && panel) {
      setTimeout(function () {
        var top = lyricsBox.offsetTop - 24;
        panel.scrollTo({ top: top, behavior: 'smooth' });
      }, 80);
    }
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
      isPlayAll = false;
      if (playAllBtn) playAllBtn.classList.remove('is-active');
      playTrack(item);
      scrollToLyrics();
    });
  });

  /* ---------- 전체재생 ---------- */
  if (playAllBtn) {
    playAllBtn.addEventListener('click', function () {
      var queue = getActiveAlbumTracks();
      if (!queue.length) return;
      isPlayAll = true;
      playAllBtn.classList.add('is-active');
      playTrack(queue[0]);
      scrollToLyrics();
    });
  }

  /* ---------- 반복재생 (현재 곡 반복) ---------- */
  if (repeatBtn && npAudio) {
    repeatBtn.addEventListener('click', function () {
      isRepeat = !isRepeat;
      npAudio.loop = isRepeat;
      repeatBtn.classList.toggle('is-active', isRepeat);
      repeatBtn.setAttribute('aria-pressed', isRepeat ? 'true' : 'false');
    });
  }

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

      /* loop(반복재생)이 켜져있으면 브라우저가 알아서 같은 곡을 다시 재생하므로
         ended 이벤트 자체가 발생하지 않음. 전체재생 중일 때만 다음 곡으로 진행 */
      if (isPlayAll && !npAudio.loop) {
        var queue = getActiveAlbumTracks();
        var activeItem = null;
        queue.forEach(function (t) { if (t.classList.contains('is-active')) activeItem = t; });
        var idx = activeItem ? queue.indexOf(activeItem) : -1;
        var next = queue[idx + 1] || queue[0]; /* 마지막 곡 다음엔 앨범 처음으로 */
        if (next) playTrack(next);
      }
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
