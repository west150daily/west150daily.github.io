(function () {
  'use strict';

  function init() {
    var modal = document.getElementById('musicModal');
    if (!modal || modal.dataset.musicReady === '1') return;

    modal.dataset.musicReady = '1';

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


    function albums() {
      return Array.prototype.slice.call(
        modal.querySelectorAll('.album')
      );
    }


    function tracks() {
      return Array.prototype.slice.call(
        modal.querySelectorAll('.track-item')
      );
    }


    function activeTracks() {
      var list = albums();

      var active =
        list.find(function (a) {
          return a.style.display !== 'none';
        }) || list[0];

      return active
        ? Array.prototype.slice.call(
            active.querySelectorAll('.track-item')
          )
        : [];
    }


    function showAlbum(id) {
      albums().forEach(function (a) {

        a.style.display =
          (!id ||
            a.getAttribute('data-album-id') === id)
            ? ''
            : 'none';

      });

      if (showAllBtn) {
        showAllBtn.hidden = !id;
      }
    }


    function openModal(id) {
      showAlbum(id || null);

      modal.classList.add('is-open');

      document.body.style.overflow = 'hidden';
    }


    function closeModal() {
      modal.classList.remove('is-open');

      document.body.style.overflow = '';
    }


    function showMini(cover, title, credit) {

      if (!mini) return;

      if (cover && miniCover) {
        miniCover.src = cover;
      }

      if (title && miniTitle) {
        miniTitle.textContent = title;
      }

      if (miniCredit) {
        miniCredit.textContent = credit || '';
      }

      mini.classList.add('is-visible');

      mini.setAttribute(
        'aria-hidden',
        'false'
      );

      document.body.classList.add(
        'has-mini-player'
      );
    }


    function playTrack(item) {

      if (!item || !npAudio) return;

      var src =
        item.getAttribute('data-src') || '';

      var cover =
        item.getAttribute('data-cover') || '';

      var title =
        item.getAttribute('data-title') || '';

      var id =
        item.getAttribute('data-track-id') || '';

      var lyric =
        (
          typeof LYRICS !== 'undefined' &&
          id &&
          LYRICS[id]
        ) ||
        item.getAttribute('data-lyrics') ||
        '가사가 곧 추가될 예정입니다.';


      tracks().forEach(function (t) {
        t.classList.remove('is-active');
      });


      item.classList.add('is-active');


      /*
       * 음원 변경
       */

      npAudio.pause();

      npAudio.src = src;

      npAudio.load();


      /*
       * 앨범 커버
       */

      if (npCover) {
        npCover.src = cover;
      }


      /*
       * 제목
       */

      if (npTitle) {
        npTitle.textContent = title;
      }


      /*
       * 크레딧
       */

      if (npCredit) {
        npCredit.textContent =
          item.getAttribute(
            'data-credit-label'
          ) || '';
      }


      /*
       * 가사
       */

      if (lyricsText) {
        lyricsText.textContent = lyric;
      }


      /*
       * 미니 플레이어
       */

      showMini(
        cover,
        title,
        item.getAttribute(
          'data-credit-label'
        ) || ''
      );


      /*
       * 재생
       */

      npAudio
        .play()
        .catch(function () {});
    }


    /*
     * 중요
     *
     * JSON에서 나중에 생성되는
     * .album / .track-item도 작동하도록
     * 이벤트 위임을 사용한다.
     */

    document.addEventListener(
      'click',
      function (e) {

        var opener =
          e.target.closest &&
          e.target.closest(
            '.js-open-music'
          );


        if (opener) {

          e.preventDefault();

          openModal(
            opener.getAttribute(
              'data-album-id'
            )
          );

          return;
        }


        var track =
          e.target.closest &&
          e.target.closest(
            '.track-item'
          );


        if (
          track &&
          modal.contains(track)
        ) {

          e.preventDefault();

          isPlayAll = false;

          if (playAllBtn) {
            playAllBtn.classList.remove(
              'is-active'
            );
          }

          playTrack(track);

          return;
        }


        var closer =
          e.target.closest &&
          e.target.closest(
            '[data-close-music]'
          );


        if (
          closer &&
          modal.contains(closer)
        ) {

          closeModal();

          return;
        }

      }
    );


    /*
     * 전체 앨범
     */

    if (showAllBtn) {

      showAllBtn.addEventListener(
        'click',
        function () {
          showAlbum(null);
        }
      );

    }


    /*
     * 전체 재생
     */

    if (playAllBtn) {

      playAllBtn.addEventListener(
        'click',
        function () {

          var q =
            activeTracks();


          if (!q.length) {
            return;
          }


          isPlayAll = true;


          playAllBtn.classList.add(
            'is-active'
          );


          playTrack(q[0]);

        }
      );

    }


    /*
     * 반복 재생
     */

    if (
      repeatBtn &&
      npAudio
    ) {

      repeatBtn.addEventListener(
        'click',
        function () {

          isRepeat = !isRepeat;

          npAudio.loop =
            isRepeat;


          repeatBtn.classList.toggle(
            'is-active',
            isRepeat
          );


          repeatBtn.setAttribute(
            'aria-pressed',
            isRepeat
              ? 'true'
              : 'false'
          );

        }
      );

    }


    /*
     * 오디오 재생
     */

    if (npAudio) {

      npAudio.addEventListener(
        'play',
        function () {

          showMini(
            npCover &&
              npCover.src,

            npTitle &&
              npTitle.textContent,

            npCredit &&
              npCredit.textContent
          );


          if (mini) {
            mini.classList.add(
              'is-playing'
            );
          }

        }
      );


      /*
       * 일시정지
       */

      npAudio.addEventListener(
        'pause',
        function () {

          if (mini) {
            mini.classList.remove(
              'is-playing'
            );
          }

        }
      );


      /*
       * 곡 종료 → 다음 곡
       */

      npAudio.addEventListener(
        'ended',
        function () {

          if (
            !isPlayAll ||
            npAudio.loop
          ) {
            return;
          }


          var q =
            activeTracks();


          var current =
            q.findIndex(
              function (t) {
                return t.classList.contains(
                  'is-active'
                );
              }
            );


          playTrack(
            q[current + 1] || q[0]
          );

        }
      );

    }


    /*
     * 미니 플레이어 재생/일시정지
     */

    if (
      miniPlayBtn &&
      npAudio
    ) {

      miniPlayBtn.addEventListener(
        'click',
        function () {

          if (npAudio.paused) {

            npAudio
              .play()
              .catch(
                function () {}
              );

          } else {

            npAudio.pause();

          }

        }
      );

    }


    /*
     * 미니 플레이어에서
     * 전체 플레이어 열기
     */

    if (miniOpenBtn) {

      miniOpenBtn.addEventListener(
        'click',
        function () {

          openModal(null);

        }
      );

    }


    /*
     * ESC로 닫기
     */

    document.addEventListener(
      'keydown',
      function (e) {

        if (
          e.key === 'Escape' &&
          modal.classList.contains(
            'is-open'
          )
        ) {

          closeModal();

        }

      }
    );

  }


  /*
   * 전역 초기화 함수
   */

  window.WEST150MusicInit = init;


  /*
   * 페이지 로딩
   */

  if (
    document.readyState !==
    'loading'
  ) {

    init();

  } else {

    document.addEventListener(
      'DOMContentLoaded',
      init
    );

  }

})();
