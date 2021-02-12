(function () {
    var idx,
        hn = location.hostname.toLowerCase(),
        ln = location.href,
        pn = location.pathname;

    if (ln.indexOf('//github.com/') >= 0) {
        void (location.href = ln.replace(/github\.com/i, 'github1s.com'));
    }
    if (ln.indexOf('//github1s.com/') >= 0) {
        void (location.href = ln.replace(/github1s\.com/i, 'github.com'));
    }


}());