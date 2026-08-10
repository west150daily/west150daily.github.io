document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       WEST150 DAILY
       Editorial Interaction
       ========================================================= */

    // 현재 연도
    const year = new Date().getFullYear();

    document.querySelectorAll("[data-year]").forEach((el) => {
        el.textContent = year;
    });


    /* =========================================================
       NAVIGATION
       ========================================================= */

    const nav = document.querySelector(".editorial-nav");

    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                nav.classList.add("is-scrolled");
            } else {
                nav.classList.remove("is-scrolled");
            }
        });
    }


    /* =========================================================
       SCROLL REVEAL
       ========================================================= */

    const revealElements = document.querySelectorAll(
        ".reveal, .editorial-card, .editorial-section"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });

    }


    /* =========================================================
       SMOOTH SCROLL
       ========================================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================================================
       IMAGE LOADING
       ========================================================= */

    document.querySelectorAll("img").forEach((image) => {

        image.addEventListener("load", () => {
            image.classList.add("loaded");
        });

        if (image.complete) {
            image.classList.add("loaded");
        }

    });


    /* =========================================================
       MOBILE MENU
       ========================================================= */

    const menuButton = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            menuButton.classList.toggle("active");
            mobileMenu.classList.toggle("active");

        });

        mobileMenu.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                menuButton.classList.remove("active");
                mobileMenu.classList.remove("active");

            });

        });

    }


    /* =========================================================
       BACK TO TOP
       ========================================================= */

    const topButton = document.querySelector(".back-to-top");

    if (topButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                topButton.classList.add("show");
            } else {
                topButton.classList.remove("show");
            }

        });

        topButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});
