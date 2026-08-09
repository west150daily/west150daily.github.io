```javascript
(function () {
  "use strict";

  function initMusicPlayer() {
    const modal = document.getElementById("musicModal");

    if (!modal) {
      console.warn("WEST150 MUSIC: musicModal을 찾을 수 없습니다.");
      return;
    }

    if (modal.dataset.initialized === "true") {
      return;
    }

    modal.dataset.initialized = "true";

    const openers = document.querySelectorAll(".js-open-music");
    const closers = modal.querySelectorAll("[data-close-music]");
    const albums = modal.querySelectorAll(".album");

    const showAllBtn = document.getElementById("showAllAlbums");
    const playAllBtn = document.getElementById("playAllBtn");
    const repeatBtn = document.getElementById("repeatBtn");

    const npAudio = document.getElementById("npAudio");
    const npCover = document.getElementById("npCover");
    const npTitle = document.getElementById("npTitle");
    const npCredit = document.getElementById("npCredit");

    const lyricsText = document.getElementById("lyricsText");

    const miniPlayer = document.getElementById("miniPlayer");
    const miniCover = document.getElementById("miniCover");
    const miniTitle = document.getElementById("miniTitle");
    const miniCredit = document.getElementById("miniCredit");
    const miniPlayBtn = document.getElementById("miniPlayBtn");
    const miniOpenBtn = document.getElementById("miniOpenBtn");

    let playAll = false;
    let repeat = false;


    /* ================================
       트랙 가져오기
    ================================= */

    function getTrackItems() {
      return Array.from(
        modal.querySelectorAll(".track-item")
      );
    }


    /* ================================
       앨범 표시
    ================================= */

    function showAlbum(albumId) {
      albums.forEach(function (album) {

        if (!albumId) {
          album.style.display = "";
          return;
        }

        const id =
          album.getAttribute("data-album-id");

        album.style.display =
          id === albumId ? "" : "none";

      });

      if (showAllBtn) {
        showAllBtn.hidden = !albumId;
      }
    }


    /* ================================
       모달 열기
    ================================= */

    function openModal(event) {

      if (event) {
        event.preventDefault();
      }

      let albumId = null;

      if (
        event &&
        event.currentTarget
      ) {
        albumId =
          event.currentTarget.getAttribute(
            "data-album-id"
          );
      }

      showAlbum(albumId);

      modal.classList.add("is-open");

      document.body.style.overflow = "hidden";
    }


    /* ================================
       모달 닫기
    ================================= */

    function closeModal() {

      modal.classList.remove("is-open");

      document.body.style.overflow = "";

    }


    /* ================================
       미니 플레이어
    ================================= */

    function showMiniPlayer(
      cover,
      title,
      credit
    ) {

      if (!miniPlayer) {
        return;
      }

      if (cover && miniCover) {
        miniCover.src = cover;
      }

      if (title && miniTitle) {
        miniTitle.textContent = title;
      }

      if (miniCredit) {
        miniCredit.textContent =
          credit || "";
      }

      miniPlayer.classList.add(
        "is-visible"
      );

      miniPlayer.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.classList.add(
        "has-mini-player"
      );
    }


    function setMiniPlaying(isPlaying) {

      if (!miniPlayer) {
        return;
      }

      miniPlayer.classList.toggle(
        "is-playing",
        isPlaying
      );

    }


    /* ================================
       가사
    ================================= */

    function getLyrics(track) {

      /*
       * JSON에서 직접 넣은 가사
       */
      const jsonLyrics =
        track.getAttribute(
          "data-lyrics"
        );

      if (jsonLyrics) {
        return jsonLyrics;
      }


      /*
       * 기존 lyrics-data.js
       */
      const lyricsId =
        track.getAttribute(
          "data-track-id"
        );

      if (
        typeof LYRICS !== "undefined" &&
        lyricsId &&
        LYRICS[lyricsId]
      ) {
        return LYRICS[lyricsId];
      }


      return "가사가 곧 추가될 예정입니다.";
    }


    /* ================================
       트랙 재생
    ================================= */

    function playTrack(track) {

      if (!track || !npAudio) {
        return;
      }

      const src =
        track.getAttribute(
          "data-src"
        );

      const cover =
        track.getAttribute(
          "data-cover"
        );

      const title =
        track.getAttribute(
          "data-title"
        );

      const credit =
        track.getAttribute(
          "data-credit-label"
        );


      if (!src) {

        console.error(
          "WEST150 MUSIC: 음원 경로가 없습니다.",
          track
        );

        return;
      }


      /*
       * 기존 활성 트랙 제거
       */

      getTrackItems().forEach(
        function (item) {

          item.classList.remove(
            "is-active"
          );

        }
      );


      track.classList.add(
        "is-active"
      );


      /*
       * 오디오 변경
       */

      npAudio.pause();

      npAudio.src = src;

      npAudio.load();


      /*
       * 커버
       */

      if (
        cover &&
        npCover
      ) {
        npCover.src = cover;
      }


      /*
       * 제목
       */

      if (npTitle) {
        npTitle.textContent =
          title || "";
      }


      /*
       * 크레딧
       */

      if (npCredit) {
        npCredit.textContent =
          credit || "";
      }


      /*
       * 가사
       */

      if (lyricsText) {
        lyricsText.textContent =
          getLyrics(track);
      }


      /*
       * 미니 플레이어
       */

      showMiniPlayer(
        cover,
        title,
        credit
      );


      /*
       * 재생
       */

      npAudio
        .play()
        .catch(function (error) {

          console.warn(
            "자동 재생이 제한되었습니다.",
            error
          );

        });

    }


    /* ================================
       현재 앨범 트랙
    ================================= */

    function getActiveTracks() {

      let activeAlbum = null;

      albums.forEach(
        function (album) {

          if (
            !activeAlbum &&
            album.style.display !== "none"
          ) {
            activeAlbum = album;
          }

        }
      );


      if (!activeAlbum) {
        activeAlbum = albums[0];
      }


      if (!activeAlbum) {
        return [];
      }


      return Array.from(
        activeAlbum.querySelectorAll(
          ".track-item"
        )
      );

    }


    /* ================================
       가사 위치 이동
    ================================= */

    function scrollToLyrics() {

      const lyricsBox =
        document.getElementById(
          "lyricsBox"
        );

      const panel =
        modal.querySelector(
          ".music-modal__panel"
        );


      if (
        !lyricsBox ||
        !panel
      ) {
        return;
      }


      setTimeout(
        function () {

          panel.scrollTo({
            top:
              lyricsBox.offsetTop - 24,
            behavior: "smooth"
          });

        },
        100
      );

    }


    /* ================================
       앨범 버튼
    ================================= */

    openers.forEach(
      function (button) {

        button.addEventListener(
          "click",
          openModal
        );


        button.addEventListener(
          "keydown",
          function (event) {

            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              openModal(event);
            }

          }
        );

      }
    );


    /* ================================
       닫기 버튼
    ================================= */

    closers.forEach(
      function (button) {

        button.addEventListener(
          "click",
          closeModal
        );

      }
    );


    /* ================================
       전체 앨범
    ================================= */

    if (showAllBtn) {

      showAllBtn.addEventListener(
        "click",
        function () {

          showAlbum(null);

        }
      );

    }


    /* ================================
       ESC
    ================================= */

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape" &&
          modal.classList.contains(
            "is-open"
          )
        ) {

          closeModal();

        }

      }
    );


    /* ================================
       개별 트랙 클릭
    ================================= */

    getTrackItems().forEach(
      function (track) {

        track.addEventListener(
          "click",
          function () {

            playAll = false;

            if (playAllBtn) {
              playAllBtn.classList.remove(
                "is-active"
              );
            }

            playTrack(track);

            scrollToLyrics();

          }
        );

      }
    );


    /* ================================
       전체 재생
    ================================= */

    if (playAllBtn) {

      playAllBtn.addEventListener(
        "click",
        function () {

          const tracks =
            getActiveTracks();


          if (!tracks.length) {
            return;
          }


          playAll = true;

          playAllBtn.classList.add(
            "is-active"
          );


          playTrack(
            tracks[0]
          );


          scrollToLyrics();

        }
      );

    }


    /* ================================
       반복 재생
    ================================= */

    if (repeatBtn) {

      repeatBtn.addEventListener(
        "click",
        function () {

          repeat = !repeat;

          npAudio.loop =
            repeat;


          repeatBtn.classList.toggle(
            "is-active",
            repeat
          );


          repeatBtn.setAttribute(
            "aria-pressed",
            repeat
              ? "true"
              : "false"
          );

        }
      );

    }


    /* ================================
       재생 시작
    ================================= */

    npAudio.addEventListener(
      "play",
      function () {

        setMiniPlaying(true);

        showMiniPlayer(
          npCover
            ? npCover.src
            : "",
          npTitle
            ? npTitle.textContent
            : "",
          npCredit
            ? npCredit.textContent
            : ""
        );

      }
    );


    /* ================================
       일시정지
    ================================= */

    npAudio.addEventListener(
      "pause",
      function () {

        setMiniPlaying(false);

      }
    );


    /* ================================
       곡 종료
    ================================= */

    npAudio.addEventListener(
      "ended",
      function () {

        setMiniPlaying(false);


        /*
         * 전체 재생이 아니거나
         * 반복이면 다음 곡으로 안 넘어감
         */

        if (
          !playAll ||
          npAudio.loop
        ) {
          return;
        }


        const tracks =
          getActiveTracks();


        if (!tracks.length) {
          return;
        }


        let currentIndex = -1;


        tracks.forEach(
          function (track, index) {

            if (
              track.classList.contains(
                "is-active"
              )
            ) {

              currentIndex =
                index;

            }

          }
        );


        const nextTrack =
          tracks[
            currentIndex + 1
          ];


        /*
         * 다음 곡
         */

        if (nextTrack) {

          playTrack(
            nextTrack
          );

          scrollToLyrics();

          return;
        }


        /*
         * 마지막 곡이면
         * 처음으로
         */

        playTrack(
          tracks[0]
        );

        scrollToLyrics();

      }
    );


    /* ================================
       미니 플레이어 재생
    ================================= */

    if (miniPlayBtn) {

      miniPlayBtn.addEventListener(
        "click",
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


    /* ================================
       미니 플레이어 열기
    ================================= */

    if (miniOpenBtn) {

      miniOpenBtn.addEventListener(
        "click",
        function () {

          openModal();

          showAlbum(null);

        }
      );

    }


    console.log(
      "WEST150 MUSIC 플레이어 초기화 완료"
    );

  }


  /*
   * index.html의 JSON 로딩 이후
   * 호출할 수 있도록 전역 함수로 등록
   */

  window.WEST150MusicInit =
    initMusicPlayer;


  /*
   * 일반 페이지 로딩
   */

  if (
    document.readyState !==
    "loading"
  ) {

    initMusicPlayer();

  } else {

    document.addEventListener(
      "DOMContentLoaded",
      initMusicPlayer
    );

  }

})();
```
