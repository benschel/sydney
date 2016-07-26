// Mentions js
var MentionsApp = (function() {
    var app = {
        init: function() {
            var self = this;

            this.initTipr();
            this.showMentions();

            setInterval(function() {
                self.slideThroughUsers();
            }, 60000);
        },

        initTipr: function() {
            $('.tip').tipr({
                'mode': 'top'
            });
        },

        showMentions: function() {
            var self = this;

            $.each($('.user-mentions-container'), function(k, v) {
                var counter = 0;
                var $icons = $(v).children();

                if ($icons.length) {
                    var iconInterval = setInterval(function() {
                        $icons.eq(counter).addClass('animate-icon');

                        if (counter === $icons.length) {
                            clearInterval(iconInterval);
                            self._triggerWinner(v);
                        }

                        counter++;
                    }, 250);
                }
            });
        },

        slideThroughUsers: function() {
            var $firstUser = $('.current-user-group .user:first-child');

            $firstUser.animate({'opacity': 0}).slideUp(500, function() {
                var $parentContainer = $(this).parent();

                $('.users-group:not(.current-user-group').addClass('current-user-group');
                $parentContainer.removeClass('current-user-group');

                var $removedUser = $(this).detach();
                $removedUser.show().css({'opacity': 1}).appendTo($parentContainer);
            });
        },

        _triggerWinner: function(el) {
            var $user = $(el).parent('.user');

            if ($user.find('.stars').length) {
                $('.star-icon').addClass('animate-star');
            }
        }
    };

    return app;
})();

$(document).on('page:load page:change', function() {
    if ($('#mentions-container').length) {
        MentionsApp.init();
    }
});
