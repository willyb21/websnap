
websnap.Routers = websnap.Routers || {};

(function () {
    'use strict';

    websnap.Routers.AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'about': 'about',
            'rename': 'rename',
            'snaps': 'pendingSnaps'
        },

        initialize: function() {
            console.log("AppRouter initialize");
        },

        index: function() {
            var view = new websnap.Views.IndexView();
            this.view = view;
        },

        about: function() {
            var view = new websnap.Views.AboutView();
            this.view = view;
        },

        rename: function() {
            var view = new websnap.Views.RenameView();
            this.view = view;
        },

        pendingSnaps: function() {
            var view = new websnap.Views.PendingView();
            this.view = view;
        }
    });

})();
