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
        document.querySelectorAll(".page-scroll>h1").forEach((e) => {
            e.style.animation = "";
            e.style.height = "70px";
        });
    }

    const _scrollCallback = (e) => {
        if (!scrolling) {
            if (e.deltaY === 100 && page < amountOfPages - 1) {
                page++;
                scrollTo(page);
            } else if (e.deltaY === -100 && page > 0) {
                page--;
                scrollTo(page);
            }
        }
    };

    function scrollTo(p) {
        if (!scrolling) {
            root.style.setProperty("--from", `${to}vw`);

            from = to;

            page = p;
            to = p * -100;

            root.style.setProperty("--to", `${to}vw`);

            document.getElementById("pages").style.animation =
                "horizontalScroll 1.5s ease-in-out forwards";

            scrolling = true;

            setTimeout(() => {
                document.getElementById("pages").style.left = `${to}vw`;
                document.getElementById("pages").style.animation = "";

                document.querySelectorAll(".page-content").forEach((e) => {
                    e.style.display = "none";
                });
                document.querySelectorAll("div.page-scroll").forEach((e) => {
                    e.style.height = "100vh";
                    e.querySelector("h1").style.display = "block";
                });

                scrolling = false;
            }, 1500);
        }
    }

    function disable() {
        document.removeEventListener("wheel", _scrollCallback);
    }

    return {
        enable: enable,
        disable: disable,
        scrollTo: scrollTo,
    };
})();
