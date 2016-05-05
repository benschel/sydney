$(document).on('page:load page:change', function() {
    $('.tip').tipr({
        'mode': 'top'
    });

    var $iconsContainer = $('.user-mentions-container');
    var $icons = $('.user-mention');

    $.each($iconsContainer, function(k, v) {
        var counter = 0;

        setInterval(function() {
            $(v).children().eq(counter).addClass('animate-icon');
            counter++;
        }, 250);
    });
});