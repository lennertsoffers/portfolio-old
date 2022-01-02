const Modals = (function () {
    function init() {
        const portfolio = document.getElementById("portfolio");

        portfolio
            .querySelectorAll("#timeline-content .timeline-item")
            .forEach((timelineItem) => {
                timelineItem
                    .querySelector(".timeline-more-info")
                    .addEventListener("click", () => {
                        const modal = new bootstrap.Modal(
                            timelineItem.querySelector(".modal")
                        );
                        modal.show();
                    });
            });
    }

    return {
        init: init,
    };
})();
