// Display js
var DisplayApp = (function() {
    var app = {
        init: function() {
            var self = this;

            this.counter = 0;
            this.numUsers = $('.user').length;
            this.$currentUser = null;

            this.slideShowDuration = 300000;
            this.slideShowActionDelay = this.slideShowDuration - 1000;

            this.userSlideShow();

            setInterval(function() {
                self.userSlideShow();
            }, this.slideShowDuration);
        },

        userSlideShow: function() {
            this.$currentUser = $('.user').eq(this.counter);
            var self = this;

            this.$currentUser.removeClass('fade-out-left').addClass('fade-in-right');

            // Animate Icons
            setTimeout(function() {
                self._animateIcons();
            }, 800);

            // Slide to next user
            setTimeout(function() {
                self.$currentUser.removeClass('fade-in-right').addClass('fade-out-left');
                self.counter++;

                if (self.counter === self.numUsers) {
                    location.reload();
                }
            }, this.slideShowActionDelay);
        },

        _animateIcons: function() {
            var $icons = this.$currentUser.find('.user-mention');
            var j = 0;
            var self = this;

            var animateIcons = function() {
                $icons.eq(j).addClass('animate-icon');

                j++;

                if (j === $icons.length) {
                    clearInterval(animateIconInterval);
                    self._triggerWinner(self.$currentUser);
                }
            };

            animateIcons();
            var animateIconInterval = setInterval(animateIcons, 250);
        },

        _triggerWinner: function(currentUser) {
            var $currentUser = $(currentUser);

            if ($currentUser.find('.stars').length) {
                $('.star-icon').addClass('animate-star');
            }
        }
    };

    return app;
})();

$(document).on('page:load page:change', function() {
    if ($('#display-container').length) {
        DisplayApp.init();
    }
});
