CreateNav.init();
Scroller.enable();
ViewContents.init();
ExtraInfoSmall.init();
TimelineAnimation.init();

CreateNav.hideSmallNavInstant();
TimelineAnimation.setOpacity();

const toast = new bootstrap.Toast(document.getElementById("toast"));
toast.show();
setTimeout(() => {
    toast.hide();
}, 2500);

$(window).resize(() => {
    CreateNav.hideSmallNavInstant();
    TimelineAnimation.setOpacity();
    if ($(window).innerWidth() >= 576) {
        $(".timeline-info-small").slideUp();
        $(".more-info-button a").removeClass("openInfoSmall");
    } else {
        if (ExtraInfoSmall.getModal() !== undefined) {
            ExtraInfoSmall.getModal().hide();
        }
    }
});

const footerText = $(".footer-text");
const year = new Date().getFullYear();
footerText.text("©lennertsoffers - " + year);

if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    document.querySelectorAll(".page-content article").forEach((article) => {
        article.style.width = "100vw";
    });
}
