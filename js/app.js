CreateNav.init();
Scroller.enable();
ViewContents.init();
Modals.init();
ExtraInfoSmall.init();

CreateNav.hideSmallNavInstant();
$(window).resize(() => {
    CreateNav.hideSmallNavInstant();
    if ($(window).innerWidth() >= 576) {
        $(".timeline-info-small").slideUp();
        $(".more-info-button a").removeClass("openInfoSmall");
    } else {
        if (ExtraInfoSmall.getModal() !== undefined) {
            ExtraInfoSmall.getModal().hide();
        }
    }
});

if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    document.querySelectorAll(".page-content article").forEach((article) => {
        article.style.width = "100vw";
    });
}
