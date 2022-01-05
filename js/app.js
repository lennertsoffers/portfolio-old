CreateNav.init();
Scroller.enable();
ViewContents.init();
Modals.init();

if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    document.querySelector("nav").style.paddingRight = "8px";
    document.querySelectorAll(".page-content article").forEach((article) => {
        article.style.width = "100vw";
    });
}
