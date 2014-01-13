/*global websnap, Backbone, JST*/

websnap.Views = websnap.Views || {};

(function () {
    'use strict';

    websnap.Views.IndexView = Backbone.View.extend({

        events: {
            'click .signInBtn': 'signInBtn'
        },

        el: $("#content"),

        initialize: function() {
            console.log('Index view');
            this.render();
        },

        render: function() {
            var self = this;

            $.get('/views/indexView', function(data) {
                self.template = data;
                self.$el.html(data);
            });

        },

        signInBtn: function() {
            var us = $("#username").val(),
                pw = $("#password").val();

            $.post('/api/login', {username: us, password: pw}, function(data) {
                if(!data.error) {
                    console.log(data);

                    // Play with styling
                    $("#signInForm").css("display", "none");
                    $("#sc-actions").css("display", "block");
                    $("#information").css("display", "block");

                    // Render my info
                    $(".username").text(data.username);

                    // Render friends
                    var friends = data.friends;
                    _.each(friends, function(friend) {
                        $("#friends").append("<li>Display name: " + friend.display + ", username: " + friend.name + "</li>");
                    });

                } else {
                    console.log(data.error_message);
                }
            });
        }

    });

})();
