const ViewContents = (function () {
    function init() {
        document.querySelectorAll(".page").forEach((e) => {
            e.addEventListener("click", () => {
                Scroller.disable();
            });
        });
    }

    return {
        init: init,
    };
})();
