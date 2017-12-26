$(document).ready(function() {
    $('body').scrollspy({ target: '.navbar' });

    var swiper = new Swiper('.nav-contaier .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });



    var swiper = new Swiper('.extension .swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        speed: 300,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
    });

    var swiper = new Swiper('.team .swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 1,
        slidesPerView: 'auto',
        speed: 300,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: false
        }
    });

    $(window).scroll(function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var top_div = $("#navbar-default");
        if (t >= 1) {
            $('.navbar-default').css({
                'background': 'rgba(0,0,0,.6)'
            })
        } else {
            $('.navbar-default').css({
                'background': 'rgba(0,0,0,0)'
            })
        }
    })




    change();
    onresize();

    $(function () { $("[data-toggle='tooltip']").tooltip(); });


});

function mouseover(e){
    var list = $('#subject li');
    var target = $(e.target).parents('li');

    list.removeClass('big');
    target.addClass('big');
}

(function(){
    var outer = $('#subject');
    outer.find('li').on('mouseover', mouseover);
})()
    


function change() {
    var width = $("body").outerWidth(true);
    console.log(width);
    if (width <= 768) {
        $('.navbar-toggle').on('click', function() {
            $('.navbar-default').css({
                'background': 'rgba(0,0,0,.2)'
            })
        })
        $('.extension .ex-p').addClass('dn').removeClass('db');
        $('.extension .img4').addClass('dn').removeClass('db');
        // $('.extension .swiper-container').css({
        //     'opacity': '1',
        //     'position': 'relative'
        // });
        $('.cum .col-sm-9').addClass('dn');
        $('.cum .col-sm-3').addClass('col-xs-12').removeClass('col-sm-3');

        $('.team-swiper').css({
            'margin-top': '0',
            'opacity': '1'
        })
        $('.list-unstyled').addClass('dn');

        $(".mapimg").attr('src', 'images/bg3_04.jpg');

        $('.an1').addClass('animation1');
        $('.an2').addClass('animation2');
        $('.an3').addClass('animation3');

    }else {
        $('.extension .ex-p').addClass('db').removeClass('dn');
        $('.extension .img4').addClass('db').removeClass('dn');
        // $('.extension .swiper-container').css({
        //     'opacity': '0'
        // });
        $('.cum .col-sm-9').removeClass('dn');
        $('.cum .col-xs-12').addClass('col-sm-3').removeClass('col-xs-12');

        $('.team-swiper').css({
            'margin-top': '-375px',
            'opacity': '0'
        })
        $('.list-unstyled').removeClass('dn');
        $(".mapimg").attr('src', 'images/map.jpg');

        $('.an1').removeClass('animation1');
        $('.an2').removeClass('animation2');
        $('.an3').removeClass('animation3');
    }


    var imgHeight = $(".img-bg").height();
    $('.cums').css({
        'height': imgHeight
    })

    console.log(imgHeight);
}


window.onresize = function() {
    var width = $("body").outerWidth(true);
    console.log(width);
    if (width <= 768) {
        $('.navbar-toggle').on('click', function() {
            $('.navbar-default').css({
                'background': 'rgba(0,0,0,.2)'
            })
        })
        $('.extension .ex-p').addClass('dn').removeClass('db');
        $('.extension .img4').addClass('dn').removeClass('db');
        // $('.extension .swiper-container').css({
        //     'opacity': '1',
        // });
        $('.cum .col-sm-9').addClass('dn');
        $('.cum .col-sm-3').addClass('col-xs-12').removeClass('col-sm-3');

        $('.team-swiper').css({
            'margin-top': '0',
            'opacity': '1'
        })
        $('.list-unstyled').addClass('dn');

        $(".mapimg").attr('src', 'images/bg3_04.jpg');
         $('.an1').addClass('animation1');
         $('.an2').addClass('animation2');
         $('.an3').addClass('animation3');

    } else {
        $('.extension .ex-p').addClass('db').removeClass('dn');
        $('.extension .img4').addClass('db').removeClass('dn');
        // $('.extension .swiper-container').css({
        //     'opacity': '0',
        //     'position': 'absolute'
        // });
        $('.cum .col-sm-9').removeClass('dn');
        $('.cum .col-xs-12').addClass('col-sm-3').removeClass('col-xs-12');

        $('.team-swiper').css({
            'margin-top': '-375px',
            'opacity': '0'
        })
        $('.list-unstyled').removeClass('dn');
        $(".mapimg").attr('src', 'images/map.jpg');
         $('.an1').removeClass('animation1');
        $('.an2').removeClass('animation2');
        $('.an3').removeClass('animation3');
    }
    var imgHeight = $(".img-bg").height();
    $('.cums').css({
        'height': imgHeight
    })
}
