// Display js
$('#display-container').ready(function() {
    var $users = $('.user');
    var i = 0;
    var numUsers = $users.length;

    var userLoop = function() {
        var $currentUser = $users.eq(i);

        $currentUser.removeClass('fade-out-left').addClass('fade-in-right');

        setTimeout(function() {
            $currentUser.removeClass('fade-in-right').addClass('fade-out-left');
            i++;

            if (i == numUsers) {
                location.reload();
            }
        }, 4800);
    };

    userLoop();
    setInterval(userLoop, 5000);
});