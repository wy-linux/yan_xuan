;
(function(win) {
    var meta = win.document.querySelector('meta[name="viewport"]');

    var scale = 1 / 2;
    var tid;
    meta.setAttribute("content", `initial-scale=${scale},width=device-width,maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no viewport-fit=cover`);

    function refreshRem() {
        var width = win.document.documentElement.getBoundingClientRect().width;
        var rem = width / 10;
        win.document.documentElement.style.fontSize = rem + 'px';

    }
    refreshRem();
    win.addEventListener("resize",
        function() {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300)
        },
        false);

    win.addEventListener("pageshow",
        function(e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300)
            }
        },
        false);
})(window)