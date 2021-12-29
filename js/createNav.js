const CreateNav = (function () {
    function init() {
        const navUl = document.getElementById("nav-items");

        let pageNum = 0;
        document.querySelectorAll("#pages div>h1").forEach((e) => {
            navUl.innerHTML += `<li class="nav-item">
                    <a class="nav-link" aria-current="page" data-page="${pageNum}" href="#">${e.innerText}</a>
                </li>`;
            pageNum++;
        });

        document.querySelectorAll(".nav-link").forEach((e) => {
            e.addEventListener("click", (element) => {
                Scroller.enable();
                Scroller.scrollTo(element.target.getAttribute("data-page"));
                document.querySelector("#navBg div").style.animation =
                    "animateNavBgUp 1s ease-out forwards";
            });
        });

        document
            .getElementById("nav-brand")
            .addEventListener("click", () => Scroller.scrollTo(0));
    }

    return {
        init: init,
    };
})();
