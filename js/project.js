var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;




var swiper = new Swiper(".mySwiper.web", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: ".swiper-pagination",
    },

});

var swiper = new Swiper(".mySwiper.title", {
    allowTouchMove:false,
    direction: "vertical",
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      speed : 5000,
      disableOnInteraction: false,
      reverseDirection:true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });



$(document).ready(function () {

    $('#btn1').click(function () {

        var offset = $('header').offset(); //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

        $('html').animate({
            scrollTop: offset.top
        }, 300);

    });

    $('#btn2').click(function () {

        var offset = $('.sec.two').offset(); //선택한 태그의 위치를 반환

        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

        $('html').animate({
            scrollTop: offset.top
        }, 300);

    });
});
$('#btn3').click(function () {

    var offset = $('.sec.three').offset(); //선택한 태그의 위치를 반환

    //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

    $('html').animate({
        scrollTop: offset.top
    }, 300);

    $('#toggle').click(function () {
        $(this).toggleClass('is-active');
        $('#navbarCollapse').toggleClass('is-active');
    });

    
});

$('.side-bar').click(function() {
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active')
    }
    else {
        $(this).addClass('active')
    }
});


AOS.init();