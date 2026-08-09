```javascript
(function () {
  function initMusicPlayer() {
    var modal = document.getElementById('musicModal');

    if (!modal || modal.dataset.initialized === 'true') {
      return;
    }

    var openers = document.querySelectorAll('.js-open-music');
    var closers = modal.querySelectorAll('[data-close-music]');
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

    modal.dataset.initialized = 'true';


    /* --------------------------------
       기본 함수
    -------------------------------- */

    function trackItems() {
      return modal.querySelectorAll('.track-item');
    }


    function showAlbum(id) {
      albums.forEach(function (album) {
        if (!id) {
          album.style.display = '';
          return;
        }

        album.style.display =
          album.getAttribute('data-album-id') === id
            ? ''
            : 'none';
      });

      if (showAllBtn) {
        showAllBtn.hidden = !id;
      }
    }


    function openModal(event) {
      if (event) {
        event.preventDefault();
      }

      var id = null;

      if (
        event &&
        event.currentTarget &&
        event.currentTarget.getAttribute
      ) {
        id = event.currentTarget.getAttribute('data-album-id');
      }

      showAlbum(id);

      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }


    function closeModal() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }


    /* --------------------------------
       미니 플레이어
    -------------------------------- */

    function showMini(cover, title, credit) {
      if (!mini) {
        return;
      }

      if (cover) {
        miniCover.src = cover;
      }

      if (title) {
        miniTitle.textContent = title;
      }

      if (credit !== undefined) {
        miniCredit.textContent = credit || '';
      }

      mini.classList.add('is-visible');
      mini.setAttribute('aria-hidden', 'false');

      document.body.classList.add('has-mini-player');
    }


    function updateMiniPlaying(isPlaying) {
      if (!mini) {
        return;
      }

      mini.classList.toggle('is-playing', !!isPlaying);
    }


    /* --------------------------------
       현재 선택된 앨범의 트랙
    -------------------------------- */

    function activeTracks() {
      var activeAlbum = null;

      albums.forEach(function (album) {
        if (!activeAlbum && album.style.display !== 'none') {
          activeAlbum = album;
        }
      });

      if (!activeAlbum) {
        activeAlbum = albums[0];
      }

      if (!activeAlbum) {
        return [];
      }

      return Array.prototype.slice.call(
        activeAlbum.querySelectorAll('.track-item')
      );
    }


    /* --------------------------------
       가사
    -------------------------------- */

    function getLyrics(item) {
      var id = item.getAttribute('data-track-id');

      /*
       * 1순위:
       * JSON에서 직접 입력한 lyrics
       */
      var jsonLyrics = item.getAttribute('data-lyrics');

      if (jsonLyrics) {
        return jsonLyrics;
      }


      /*
       * 2순위:
       * 기존 lyrics-data.js의 LYRICS
       */
      if (
        typeof LYRICS !== 'undefined' &&
        id &&
        LYRICS[id]
      ) {
        return LYRICS[id];
      }


      /*
       * 가사가 없을 경우
       */
      return '가사가 곧 추가될 예정입니다.';
    }


    /* --------------------------------
       곡 재생
    -------------------------------- */

    function playTrack(item) {
      if (!item) {
        return;
      }

      var src = item.getAttribute('data-src');
      var cover = item.getAttribute('data-cover');
      var title = item.getAttribute('data-title');
      var credit = item.getAttribute('data-credit-label');

      if (!src) {
        return;
      }


      /*
       * 기존 active 제거
       */
      trackItems().forEach(function (track) {
        track.classList.remove('is-active');
      });

      item.classList.add('is-active');


      /*
       * 오디오
       */
      npAudio.src = src;


      /*
       * 앨범 커버
       */
      if (cover) {
        npCover.src = cover;
      }


      /*
       * 제목
       */
      npTitle.textContent = title || '';


      /*
       * 크레딧
       */
      npCredit.textContent = credit || '';


      /*
       * 가사
       */
      lyricsText.textContent = getLyrics(item);


      /*
       * 미니 플레이어
       */
      showMini(
        cover,
        title,
        credit
      );


      /*
       * 재생
       */
      npAudio.play().catch(function () {
        /*
         * 브라우저 자동재생 제한으로
         * 실패해도 오류를 표시하지 않음
         */
      });
    }


    /* --------------------------------
       가사 위치로 이동
    -------------------------------- */

    function scrollLyrics() {
      var box = document.getElementById('lyricsBox');
      var panel = modal.querySelector('.music-modal__panel');

      if (!box || !panel) {
        return;
      }

      setTimeout(function () {
        panel.scrollTo({
          top: box.offsetTop - 24,
          behavior: 'smooth'
        });
      }, 80);
    }


    /* --------------------------------
       앨범 버튼
    -------------------------------- */

    openers.forEach(function (button) {

      button.addEventListener(
        'click',
        openModal
      );


      button.addEventListener(
        'keydown',
        function (event) {

          if (
            event.key === 'Enter' ||
            event.key === ' '
          ) {
            openModal(event);
          }

        }
      );

    });


    /* --------------------------------
       닫기
    -------------------------------- */

    closers.forEach(function (button) {

      button.addEventListener(
        'click',
        closeModal
      );

    });


    /* --------------------------------
       전체 앨범 보기
    -------------------------------- */

    if (showAllBtn) {

      showAllBtn.addEventListener(
        'click',
        function () {

          showAlbum(null);

        }
      );

    }


    /* --------------------------------
       ESC
    -------------------------------- */

    document.addEventListener(
      'keydown',
      function (event) {

        if (
          event.key === 'Escape' &&
          modal.classList.contains('is-open')
        ) {
          closeModal();
        }

      }
    );


    /* --------------------------------
       개별 트랙
    -------------------------------- */

    trackItems().forEach(function (item) {

      item.addEventListener(
        'click',
        function () {

          isPlayAll = false;

          if (playAllBtn) {
            playAllBtn.classList.remove('is-active');
          }

          playTrack(item);

          scrollLyrics();

        }
      );

    });


    /* --------------------------------
       전체 재생
    -------------------------------- */

    if (playAllBtn) {

      playAllBtn.addEventListener(
        'click',
        function () {

          var tracks = activeTracks();

          if (!tracks.length) {
            return;
          }

          isPlayAll = true;

          playAllBtn.classList.add('is-active');

          playTrack(tracks[0]);

          scrollLyrics();

        }
      );

    }


    /* --------------------------------
       반복 재생
    -------------------------------- */

    if (repeatBtn) {

      repeatBtn.addEventListener(
        'click',
        function () {

          isRepeat = !isRepeat;

          npAudio.loop = isRepeat;

          repeatBtn.classList.toggle(
            'is-active',
            isRepeat
          );

          repeatBtn.setAttribute(
            'aria-pressed',
            isRepeat ? 'true' : 'false'
          );

        }
      );

    }


    /* --------------------------------
       오디오 재생 시작
    -------------------------------- */

    npAudio.addEventListener(
      'play',
      function () {

        updateMiniPlaying(true);

        showMini(
          npCover.src,
          npTitle.textContent,
          npCredit.textContent
        );

      }
    );


    /* --------------------------------
       일시정지
    -------------------------------- */

    npAudio.addEventListener(
      'pause',
      function () {

        updateMiniPlaying(false);

      }
    );


    /* --------------------------------
       곡 종료
    -------------------------------- */

    npAudio.addEventListener(
      'ended',
      function () {

        updateMiniPlaying(false);


        /*
         * 전체 재생이 아니면 종료
         */
        if (
          !isPlayAll ||
          npAudio.loop
        ) {
          return;
        }


        var tracks = activeTracks();

        var activeTrack = null;

        tracks.forEach(function (track) {

          if (
            track.classList.contains('is-active')
          ) {
            activeTrack = track;
          }

        });


        var currentIndex =
          activeTrack
            ? tracks.indexOf(activeTrack)
            : -1;


        var nextTrack =
          tracks[currentIndex + 1];


        /*
         * 다음 곡이 있으면 재생
         */
        if (nextTrack) {

          playTrack(nextTrack);

          scrollLyrics();

        } else {

          /*
           * 마지막 곡이면 처음으로
           */
          playTrack(tracks[0]);

          scrollLyrics();

        }

      }
    );


    /* --------------------------------
       미니 플레이어 재생 / 일시정지
    -------------------------------- */

    if (miniPlayBtn) {

      miniPlayBtn.addEventListener(
        'click',
        function () {

          if (npAudio.paused) {

            npAudio.play().catch(function () {});

          } else {

            npAudio.pause();

          }

        }
      );

    }


    /* --------------------------------
       미니 플레이어 → 전체 플레이어
    -------------------------------- */

    if (miniOpenBtn) {

      miniOpenBtn.addEventListener(
        'click',
        function () {

          openModal(null);

          showAlbum(null);

        }
      );

    }

  }


  /*
   * JSON으로 HTML이 만들어진 후
   * index.html에서 호출할 수 있도록 공개
   */
  window.WEST150MusicInit = initMusicPlayer;


  /*
   * 일반적인 경우
   */
  if (document.readyState !== 'loading') {

    initMusicPlayer();

  } else {

    document.addEventListener(
      'DOMContentLoaded',
      initMusicPlayer
    );

  }

})();
```
