const ExtraInfoSmall = (function () {
    function init() {
        $(".timeline-info-small").hide();

        $(".more-info-button").click((e) => {
            e.preventDefault();

            if ($(window).innerWidth() < 576) {
                if (!$(e.target).closest("a").hasClass("openInfoSmall")) {
                    $(".timeline-info-small").slideUp();
                    $(".more-info-button a").removeClass("openInfoSmall");

                    $(e.target).addClass("openInfoSmall");
                    $(e.target)
                        .parents("div.timeline-activity")
                        .find(".timeline-info-small")
                        .slideDown();
                }
            } else {
                const modal = new bootstrap.Modal(
                    $(e.target).parents("div.timeline-activity").find(".modal")
                );
                modal.show();
            }
        });
    }

    return {
        init: init,
    };
})();
