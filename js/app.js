let root = document.documentElement;

let from = 0;
let to = 0;
let page = undefined;
const amountOfPages = document.getElementById("pages").childElementCount;

let scrolling = false;

window.addEventListener("load", () => {
    if (sessionStorage.getItem("page") == null) {
        page = 0;
    } else {
        page = parseInt(sessionStorage.getItem("page"), 10);
    }
    console.log(page);
});

document.addEventListener("wheel", (e) => {
    if (!scrolling) {
        if (e.deltaY === 100) {
            if (page < amountOfPages - 1) {
                horizontalScroll(true);
            }
        } else {
            if (page > 0) {
                horizontalScroll(false);
            }
        }
    }
});

function horizontalScroll(forwards) {
    document.getElementById("pages").style.animation =
        "horizontalScroll 1.5s ease-in-out forwards";

    scrolling = true;

    setTimeout(() => {
        document.getElementById("pages").style.left = `${to}vw`;
        document.getElementById("pages").style.animation = "";
        scrolling = false;
    }, 2000);

    root.style.setProperty("--from", `${to}vw`);

    from = to;

    if (forwards) {
        to -= 100;
        page += 1;
        sessionStorage.setItem("page", page);
    } else {
        to += 100;
        page -= 1;
        sessionStorage.setItem("page", page);
    }

    root.style.setProperty("--to", `${to}vw`);
}
