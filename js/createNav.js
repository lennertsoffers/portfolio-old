const CreateNav = (function () {
    function init() {
        const navbarNav = document.getElementById("navbarNav");
        const navUl = document.getElementById("nav-items");

        let pageNum = 0;
        document.querySelectorAll("#pages div>h1").forEach((e) => {
            navUl.innerHTML += `<li class="nav-item">
                    <a class="nav-link" aria-current="page" data-page="${pageNum}" href="#">${e.innerText}</a>
                </li>`;
            pageNum++;
        });

        document.querySelectorAll(".nav-link").forEach((e) => {
            e.addEventListener("click", (element) => {
                const pageId = element.target.getAttribute("data-page");

                if (pageId != Scroller.getPage()) {
                    Scroller.enable();
                    Scroller.scrollTo(pageId);

                    document.querySelectorAll(".nav-link").forEach((link) => {
                        link.removeAttribute("disabled");
                    });
                    element.target.setAttribute("disabled", "true");

                    if (ViewContents.isViewingContent()) {
                        if (
                            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                navigator.userAgent
                            )
                        ) {
                            document.querySelector("nav").style.paddingRight =
                                "0px";
                        }

                        setTimeout(() => {
                            document.querySelector(
                                "#navBg div"
                            ).style.animation = "animateNavBgUp 0.2s ease-out";
                            navbarNav.style.backgroundColor = "transparent";
                        }, 350);
                        hideSmallNav();
                        ViewContents.stopViewingContent();
                    }
                }
            });
        });

        document
            .getElementById("nav-brand")
            .addEventListener("click", () => Scroller.scrollTo(0));

        const navbarButton = document.getElementById("navbar-button");
        navbarButton.addEventListener("click", () => {
            console.log("t");
            if (navbarButton.getAttribute("data-active") === "false") {
                showSmallNav();
            } else {
                hideSmallNav();
            }
        });
    }

    function showSmallNav() {
        if ($(window).innerWidth() < 576) {
            const navbarButton = document.getElementById("navbar-button");
            const navbarNav = document.getElementById("navbarNav");
            $(navbarNav).slideDown();
            navbarButton.setAttribute("data-active", "true");
        }
    }

    function hideSmallNavInstant() {
        if ($(window).innerWidth() < 576) {
            const navbarButton = document.getElementById("navbar-button");
            const navbarNav = document.getElementById("navbarNav");
            $(navbarNav).hide();
            navbarButton.setAttribute("data-active", "false");
        }
    }

    function hideSmallNav() {
        if ($(window).innerWidth() < 576) {
            const navbarButton = document.getElementById("navbar-button");
            const navbarNav = document.getElementById("navbarNav");
            $(navbarNav).slideUp();
            navbarButton.setAttribute("data-active", "false");
        }
    }

    return {
        init: init,
        hideSmallNav: hideSmallNav,
        showSmallNav: showSmallNav,
        hideSmallNavInstant: hideSmallNavInstant,
    };
})();
