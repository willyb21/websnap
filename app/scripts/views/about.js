/*global websnap, Backbone, JST*/

websnap.Views = websnap.Views || {};

(function () {
    'use strict';

    websnap.Views.AboutView = Backbone.View.extend({

        el: $("#content"),

        events: {},

        initialize: function() {
            this.render();
        },

        render: function() {
            $.get('/views/aboutView', function(data) {
                self.template = data;
                self.$el.html(data);
            });
        }

    });

})();
