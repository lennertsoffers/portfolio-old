const Scroller = (function () {
    let root = document.documentElement;
    let from = 0;
    let to = 0;
    let page = 0;
    let amountOfPages = undefined;
    let scrolling = false;

    function enable() {
        amountOfPages = document.getElementById("pages").childElementCount;
        document.body.style.overflowY = "hidden";
        document.addEventListener("wheel", _scrollCallback);
        document.querySelectorAll(".page-scroll>div").forEach((e) => {
            e.style.animation = "";
            e.style.height = "250px";
        });
    }

    const _scrollCallback = (e) => {
        if (!scrolling) {
            if (e.deltaY > 0 && page < amountOfPages - 1) {
                const newPage = parseInt(page, 10) + 1;
                scrollTo(newPage);
                page = newPage;
            } else if (e.deltaY < 0 && page > 0) {
                const newPage = parseInt(page, 10) - 1;
                scrollTo(newPage);
                page = newPage;
            }
        }
    };

    function scrollTo(p) {
        if (!scrolling) {
            if (p != page) {
                root.style.setProperty("--from", `${to}vw`);

                from = to;

                page = p;
                to = p * -100;

                root.style.setProperty("--to", `${to}vw`);

                document.getElementById("pages").style.animation =
                    "horizontalScroll 1.5s ease-in-out forwards";

                scrolling = true;

                CreateNav.hideSmallNav();

                document.querySelector("nav").style.paddingRight = "0px";

                setTimeout(() => {
                    document.getElementById("pages").style.left = `${to}vw`;
                    document.getElementById("pages").style.animation = "";

                    document.querySelectorAll(".page-content").forEach((e) => {
                        e.style.display = "none";
                    });
                    document
                        .querySelectorAll("div.page-scroll")
                        .forEach((e) => {
                            e.style.height = "100vh";
                        });
                    document
                        .querySelectorAll("div.page-scroll>div")
                        .forEach((e) => {
                            e.style.display = "block";
                        });

                    scrolling = false;
                }, 1500);
                return true;
            }
            return false;
        }
    }

    function disable() {
        document.removeEventListener("wheel", _scrollCallback);
    }

    function getPage() {
        return page;
    }

    return {
        enable: enable,
        disable: disable,
        scrollTo: scrollTo,
        getPage: getPage,
    };
})();
