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
    var npVinyl = document.getElementById('npVinyl');
    var npTitle = document.getElementById('npTitle');
    var npCredit = document.getElementById('npCredit');
    var lyricsText = document.getElementById('lyricsText');

    var wavePlayBtn = document.getElementById('wavePlayBtn');
    var waveBars = document.getElementById('waveBars');
    var waveBarsBg = document.getElementById('waveBarsBg');
    var waveBarsFill = document.getElementById('waveBarsFill');
    var waveCurrent = document.getElementById('waveCurrent');
    var waveDuration = document.getElementById('waveDuration');

    var mini = document.getElementById('miniPlayer');
    var miniCover = document.getElementById('miniCover');
    var miniTitle = document.getElementById('miniTitle');
    var miniCredit = document.getElementById('miniCredit');
    var miniPlayBtn = document.getElementById('miniPlayBtn');
    var miniOpenBtn = document.getElementById('miniOpenBtn');
    var miniProgress = document.getElementById('miniProgress');

    var isPlayAll = false;
    var isRepeat = false;
    var WAVE_BAR_COUNT = 46;


    /*
     * 트랙 id를 시드로 쓰는 결정론적 랜덤값 생성기.
     * 같은 곡이면 항상 같은 파형 모양이 나온다.
     */
    function seededRandom(seedStr) {
      var seed = 0;
      for (var i = 0; i < seedStr.length; i++) {
        seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0;
      }
      return function () {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return seed / 4294967296;
      };
    }


    function formatTime(sec) {
      if (!isFinite(sec) || sec < 0) return '0:00';
      var m = Math.floor(sec / 60);
      var s = Math.floor(sec % 60);
      return m + ':' + (s < 10 ? '0' : '') + s;
    }


    /*
     * 트랙별 고정된 웨이브폼 막대 렌더링
     * (실제 오디오 데이터를 분석하지 않고, 트랙 id 기반의
     *  시각적 파형을 만들어 재생바를 감싸는 용도)
     */
    function buildWaveBars(seed) {
      if (!waveBarsBg || !waveBarsFill) return;

      var rand = seededRandom(seed || 'default');
      var bgFrag = document.createDocumentFragment();
      var fillFrag = document.createDocumentFragment();

      for (var i = 0; i < WAVE_BAR_COUNT; i++) {
        var h = Math.round(22 + rand() * 78); // 22% ~ 100%
        var bg = document.createElement('div');
        bg.className = 'bar';
        bg.style.height = h + '%';
        bgFrag.appendChild(bg);

        var fill = document.createElement('div');
        fill.className = 'bar';
        fill.style.height = h + '%';
        fillFrag.appendChild(fill);
      }

      waveBarsBg.innerHTML = '';
      waveBarsFill.innerHTML = '';
      waveBarsBg.appendChild(bgFrag);
      waveBarsFill.appendChild(fillFrag);
    }


    function seekFromClientX(clientX) {
      if (!waveBars || !npAudio || !isFinite(npAudio.duration)) return;
      var rect = waveBars.getBoundingClientRect();
      var ratio = (clientX - rect.left) / rect.width;
      ratio = Math.max(0, Math.min(1, ratio));
      npAudio.currentTime = ratio * npAudio.duration;
    }


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
       * 웨이브폼 재생바 초기화
       */

      buildWaveBars(id || src);

      if (waveBarsFill) {
        waveBarsFill.style.width = '0%';
      }
      if (miniProgress) {
        miniProgress.style.width = '0%';
      }
      if (waveCurrent) waveCurrent.textContent = '0:00';
      if (waveDuration) waveDuration.textContent = '0:00';


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

          if (npVinyl) {
            npVinyl.classList.add('is-spinning');
          }

          if (wavePlayBtn) {
            wavePlayBtn.classList.add('is-playing');
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

          if (npVinyl) {
            npVinyl.classList.remove('is-spinning');
          }

          if (wavePlayBtn) {
            wavePlayBtn.classList.remove('is-playing');
          }

        }
      );


      /*
       * 곡 길이 로드됨
       */

      npAudio.addEventListener(
        'loadedmetadata',
        function () {
          if (waveDuration) {
            waveDuration.textContent = formatTime(npAudio.duration);
          }
        }
      );


      /*
       * 재생 진행 (웨이브폼 채우기 + 미니 진행바 + 시간 표시)
       */

      npAudio.addEventListener(
        'timeupdate',
        function () {
          if (!isFinite(npAudio.duration) || npAudio.duration <= 0) return;

          var pct = (npAudio.currentTime / npAudio.duration) * 100;

          if (waveBarsFill) {
            waveBarsFill.style.width = pct + '%';
          }
          if (miniProgress) {
            miniProgress.style.width = pct + '%';
          }
          if (waveCurrent) {
            waveCurrent.textContent = formatTime(npAudio.currentTime);
          }
        }
      );


      /*
       * 곡 종료 → 다음 곡
       */

      npAudio.addEventListener(
        'ended',
        function () {

          if (npVinyl) {
            npVinyl.classList.remove('is-spinning');
          }

          if (wavePlayBtn) {
            wavePlayBtn.classList.remove('is-playing');
          }

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
     * 웨이브폼 재생바 클릭/드래그 탐색(seek)
     */

    if (waveBars && npAudio) {

      var waveDragging = false;

      waveBars.addEventListener('pointerdown', function (e) {
        waveDragging = true;
        seekFromClientX(e.clientX);
      });

      window.addEventListener('pointermove', function (e) {
        if (!waveDragging) return;
        seekFromClientX(e.clientX);
      });

      window.addEventListener('pointerup', function () {
        waveDragging = false;
      });
    }


    /*
     * 커스텀 재생 버튼 (웨이브폼 옆)
     */

    if (wavePlayBtn && npAudio) {

      wavePlayBtn.addEventListener('click', function () {
        if (npAudio.paused) {
          npAudio.play().catch(function () {});
        } else {
          npAudio.pause();
        }
      });

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