// User js
var UserApp = (function() {
    var app = {
        init: function() {
            this.initTipr();
            this.triggerWinner();
        },

        initTipr: function() {
            $('.tip').tipr({
                'mode': 'top'
            });
        },

        triggerWinner: function() {
            if ($('.stars').length) {
                $('.star-icon').addClass('animate-star');
            }
        }
    };

    return app;
})();

$(document).on('page:load page:change', function() {
    if ($('#user-profile-container').length) {
        UserApp.init();
    }
});