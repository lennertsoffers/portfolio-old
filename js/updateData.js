const UpdateData = (function () {
    function init() {
        const now = new Date(Date.now());
        document.getElementById("age").innerText =
            now.getFullYear() - new Date(2002, 9, 4).getFullYear();
    }

    return {
        init: init,
    };
})();
