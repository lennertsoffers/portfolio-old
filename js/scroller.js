const Scroller = (function () {
    let root = document.documentElement;
    let from = 0;
    let to = 0;
    let page = 0;
    let amountOfPages = undefined;
    let scrolling = false;

    function init() {
        amountOfPages = document.getElementById("pages").childElementCount;

        document.addEventListener("wheel", (e) => {
            if (!scrolling) {
                if (e.deltaY === 100 && page < amountOfPages - 1) {
                    page++;
                    scrollTo(page);
                } else if (e.deltaY === -100 && page > 0) {
                    page--;
                    scrollTo(page);
                }
            }
        });
    }

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
                scrolling = false;
            }, 1500);
        }
    }

    return {
        init: init,
        scrollTo: scrollTo,
    };
})();
