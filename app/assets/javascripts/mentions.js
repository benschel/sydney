$(document).on('page:load page:change', function() {
    // var $userInput = $('#mention_user');

    // var getQueryParams = function(str) {
    //     var str = str || document.location.search;
    //     return (!str && {}) || str.replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = decodeURIComponent(n[1]),this}.bind({}))[0];
    // };

    // var params = getQueryParams();

    // $userInput.val(params.user);

    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var $icons = $('.mention-type-container li');

    var randomNum = randomNumber(0, $icons.length);

    $icons.eq(randomNum).find('input[type="radio"]').attr('checked', 'checked');
});