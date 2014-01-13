/*global websnap, Backbone, JST*/

websnap.Views = websnap.Views || {};

(function () {
    'use strict';

    websnap.Views.RenameView = Backbone.View.extend({

        el: $("#content"),


        events: {
            'click .renameBtn': 'renameBtn'
        },

        initialize: function() {
            console.log('Index view');
            this.render();
        },

        render: function() {
            var self = this;

            $.get('/views/renameView', function(data) {
                self.template = data;
                self.$el.html(data);
            });

        },

        renameBtn: function() {
            var fr = $("#fName").val(),
                newName = $("#fNewName").val();

            $.post('/api/rename', {friend: fr, name: newName}, function(data) {
                console.log(data);
            });
        }

    });

})();
