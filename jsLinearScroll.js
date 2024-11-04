function scrollToLinear(a, c, e, d) {
    d || (d = linearEase);
    if (0 === a.scrollTop) {
        var b = a.scrollTop;
        ++a.scrollTop; a = b + 1 === a.scrollTop-- ? a : document.body
    }
    b = a.scrollTop; 0 >= e || ("object" === typeof b && (b = b.offsetTop),
        "object" === typeof c && (c = c.offsetTop), function (a, b, c, f, d, e, h) {
            function g() {
                0 > f || 1 < f || 0 >= d ? a.scrollTop = c : (a.scrollTop = b - (b - c) * h(f),
                    f += d * e, setTimeout(g, e))
            } g()
        }(a, b, c, 0, 1 / e, 20, d))
};
function linearEase(t) { return t; }
