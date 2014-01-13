/*global websnap, Backbone, JST*/

websnap.Views = websnap.Views || {};

(function () {
    'use strict';

    websnap.Views.PendingView = Backbone.View.extend({

        el: $("#content"),

        events: {
            'click .signInBtn': 'someFunction'
        },

        initialize: function() {
            console.log('Index view');
            this.render();
        },

        render: function() {
            var self = this;

            $.get('/views/pendingView', function(data) {
                self.template = data;
                self.$el.html(data);

                console.log("View: " + data);
            });

        },

        someFunction: function() {

        }

    });

})();
