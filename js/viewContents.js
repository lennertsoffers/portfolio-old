const ViewContents = (function () {
    function init() {
        document.querySelectorAll(".page").forEach((e) => {
            e.addEventListener("click", (element) => {
                const page = document.querySelector(
                    `#${element.target.closest("div.page").id}`
                );
                Scroller.disable();

                page.querySelector("h1").style.animation =
                    "hideTitle 0.5s ease-in-out forwards";

                setTimeout(() => {
                    const content = page.querySelector(".page-content");

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

    return {
        init: init,
    };
})();
