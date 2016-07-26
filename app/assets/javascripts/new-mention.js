// New Mention js
var NewMentionApp = (function() {
    var app = {
        init: function() {
            this.$icons = $('.mention-type-container li');
            this.numIcons = this.$icons.length;

            this.setRandomIcon();
        },

        setRandomIcon: function() {
            var randomNum = this._randomNumber(0, this.numIcons);

            this.$icons.eq(randomNum).find('input[type="radio"]').attr('checked', 'checked');
        },

        _randomNumber: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };

    return app;
})();

$(document).on('page:load page:change', function() {
    if ($('#new-mention-container').length) {
        NewMentionApp.init();
    }
});
