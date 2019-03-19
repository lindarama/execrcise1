// Smooth Scrolling
$('.page-scroll').on('click', function(e){
    var tujuan = $(this).attr('href');
    var elementujuan = $(tujuan);
    $('html,body').animate({
        scrollTop: elementujuan.offset().top-30
    },1000,'easeInOutExpo');

    e.preventDefault();
});