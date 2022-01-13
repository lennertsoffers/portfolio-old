const ExtraInfoSmall = (function () {
    let modal;

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
                modal = new bootstrap.Modal(
                    $(e.target).parents("div.timeline-activity").find(".modal")
                );
                modal.show();
                $(".modal").click(() => {
                    modal.hide();
                });
            }
        });
    }

    function getModal() {
        return modal;
    }

    return {
        init: init,
        getModal: getModal,
    };
})();
