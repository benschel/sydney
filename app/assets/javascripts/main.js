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

    $.each($('.user-mentions-container'), function(k, v) {
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
});