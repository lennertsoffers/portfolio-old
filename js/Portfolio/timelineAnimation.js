const TimelineAnimation = (function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function init() {
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                const animationTime = 500;
                const entryId = entry.target.attributes[1].nodeValue;
                const element = document.getElementById(entryId);

                if ($(window).innerWidth() >= 868) {
                    if (entry.isIntersecting) {
                        if (entry.boundingClientRect.top > 0) {
                            element.style.animation = `timeline-fade-in-bottom ${
                                animationTime / 1000
                            }s ease-out`;
                        } else {
                            element.style.animation = `timeline-fade-in-top ${
                                animationTime / 1000
                            }s ease-out`;
                        }

                        setTimeout(() => {
                            element.style.animation = "";
                            element.style.opacity = "1";
                        }, animationTime);

                        $(element).addClass("timeline-visible");
                    } else {
                        element.style.opacity = "0";
                        $(element).removeClass("timeline-visible");
                    }
                }
            });
        });

        timelineItems.forEach((timelineItem) => {
            observer.observe(timelineItem);
            timelineItem.style.opacity = "0";
        });
    }

    function setOpacity() {
        if ($(window).innerWidth() >= 868) {
            timelineItems.forEach((timelineItem) => {
                if (!$(timelineItem).hasClass("timeline-visible")) {
                    timelineItem.style.opacity = "0";
                }
            });
        } else {
            timelineItems.forEach((timelineItem) => {
                timelineItem.style.opacity = "1";
            });
        }
    }

    return {
        init: init,
        setOpacity: setOpacity,
    };
})();
