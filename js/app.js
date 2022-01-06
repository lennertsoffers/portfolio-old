CreateNav.init();
Scroller.enable();
ViewContents.init();
Modals.init();

CreateNav.hideSmallNavInstant();
$(window).resize(() => {
    CreateNav.hideSmallNavInstant();
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
