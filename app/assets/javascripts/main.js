$(document).on('page:load page:change', function() {
    $('.tip').tipr({
        'mode': 'top'
    });

    var triggerWinner = function(el) {
        var $user = $(el).parent('.user');

        if ($user.find('.stars').length) {
            $('.star-icon').addClass('animate-star')
        }
    };

    $.each($('#mentions-container .user-mentions-container'), function(k, v) {
        var counter = 0;
        var $icons = $(v).children();

        if ($icons.length) {
            var interval = setInterval(function() {
                $icons.eq(counter).addClass('animate-icon');

                if (counter === $icons.length) {
                    clearInterval(interval);
                    triggerWinner(v);
                }

                counter++;
            }, 250);
        }
    });

    setInterval(function() {
        var $firstUser = $('.current-user-group .user:first-child');
        $firstUser.animate({'opacity': 0}).slideUp(500, function() {
            var $parentContainer = $(this).parent();
            $('.users-group:not(.current-user-group)').addClass('current-user-group');
            $parentContainer.removeClass('current-user-group');

            var $removedUser = $(this).detach();
            $removedUser.show().css({'opacity': 1}).appendTo($parentContainer);
        });
    }, 60000);
});