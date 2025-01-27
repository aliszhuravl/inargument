(function($) {
    $('.more_points').on('click', function () {
        $('.team_box').removeClass('with-hidden');
        $('.team_box__item').removeClass('hidden_point');
        $('.more_points').fadeOut(50);
    });
})(jQuery);