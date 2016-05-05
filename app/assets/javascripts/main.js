$(document).on('page:load page:change', function() {
    $('.tip').tipr({
        'mode': 'top'
    });

    $.each($('.user-mentions-container'), function(k, v) {
        var counter = 0;
        var $icons = $(v).children();

        if ($icons.length) {
            var interval = setInterval(function() {
                $icons.eq(counter).addClass('animate-icon');

                if (counter === $icons.length) {
                    clearInterval(interval);
                }

                counter++;
            }, 250);
        }
    });
});