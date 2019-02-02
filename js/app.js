var menuBtn = document.getElementsByClassName('menu-btn');
var mobileMenu = document.getElementsByClassName('mobile-menu');
var clickedBtn = function(){
    mobileMenu[0].classList.toggle('active');
}

menuBtn[0].addEventListener('click', clickedBtn);

console.log(menuBtn[0]);


$('a[href*=#]').on('click', function (e) {
    var targetSec = $(this).text();
    $('html, body').animate({
        scrollTop: $('#' + targetSec).offset().top
    }, 2000);
});



