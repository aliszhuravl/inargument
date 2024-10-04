(function($) {
    $('.btn_show').on('click', function () {
        $('.hidden_content').toggleClass('hidden');
        $('.btn_show').addClass('hidden');
    });
})(jQuery);