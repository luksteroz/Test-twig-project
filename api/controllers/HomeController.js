'use strict';

module.exports = {
    homeHandler: function(req, res) {
        return res.view('home/view', {});
    },

    testHandler: function(req, res) {

        var pages = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];

        return res.view('home/test', {
            pages: pages
        });
    }
};
