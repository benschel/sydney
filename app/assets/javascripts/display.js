// Display js
$('#display-container').ready(function() {
    var $users = $('.user');
    var i = 0;
    var numUsers = $users.length;

    var triggerWinner = function(currentUser) {
        if ($(currentUser).find('.stars').length) {
            $('.star-icon').addClass('animate-star');
        }
    };

    var userLoop = function() {
        var $currentUser = $users.eq(i);
        
        $currentUser.removeClass('fade-out-left').addClass('fade-in-right');

        setTimeout(function() {
            var $icons = $currentUser.find('.user-mention');
            var j = 0;

            var animateIcons = function() {
                $icons.eq(j).addClass('animate-icon');

                j++;

                if (j === $icons.length) {
                    clearInterval(animateIconInterval);
                    triggerWinner($currentUser);
                }
            };
            animateIcons();
            var animateIconInterval = setInterval(animateIcons, 250);
        }, 800);

        setTimeout(function() {
            $currentUser.removeClass('fade-in-right').addClass('fade-out-left');
            i++;

            if (i === numUsers) {
                location.reload();
            }
        }, 299000);
    };

    userLoop();
    setInterval(userLoop, 300000);
});