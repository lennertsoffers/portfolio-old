let root = document.documentElement;

let from = 0;
let to = 0;
let page = 0;
const amountOfPages = document.getElementById("pages").childElementCount;

let scrolling = false;

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
    } else {
        to += 100;
        page -= 1;
    }

    root.style.setProperty("--to", `${to}vw`);
}
