const ViewContents = (function () {
    let _viewingContent = false;

    function init() {
        document.querySelectorAll(".page").forEach((e) => {
            e.addEventListener("click", (element) => {
                _viewingContent = true;
                const page = document.querySelector(
                    `#${element.target.closest("div.page").id}`
                );
                Scroller.disable();

                page.querySelector(".page-scroll>div").style.animation =
                    "hideTitle 0.5s ease-in-out forwards";

                setTimeout(() => {
                    page.querySelector(".page-scroll>div").style.display =
                        "none";
                }, 1500);

                setTimeout(() => {
                    const content = page.querySelector(".page-content");
                    content.style.animation = "";

                    content.style.display = "block";

                    page.style.height = "auto";
                    page.querySelector("div.page-scroll").style.height = "0";

                    document.querySelector("#navBg div").style.animation =
                        "animateNavBgDown 0.5s ease-out forwards";

                    content.style.animation = "showPageContent 0.5s ease-out";

                    document.body.style.overflowY = "scroll";
                }, 700);
            });
        });
    }

    function stopViewingContent() {
        _viewingContent = false;
    }

    function isViewingContent() {
        return _viewingContent;
    }

    return {
        init: init,
        stopViewingContent: stopViewingContent,
        isViewingContent: isViewingContent,
    };
})();
