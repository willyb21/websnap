/*global websnap$*/


window.websnap = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';

    websnap.init();

    var AppRouter = new websnap.Routers.AppRouter();
    Backbone.history.start();

//    $("a").click(function(e) {
//        e.preventDefault();
//    });
});
