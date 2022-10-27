//  header on scroll css change
$(window).scroll(function () {
    var winWidth = $(window).width();
    if ($(window).scrollTop() >= 680) {
        $("#t1").css({
            position: 'sticky',
            top: '0',
            background: "#ffffff",
            zIndex: "100"
        });

        if (winWidth >= 768) {

            // $( "#skip-main" ).css({display: 'none'});
            //   $( "#search" ).css({display: 'none'});
            $(".header-logo").css({
                display: 'block',
                marginRight: "130px"
            });
            $(".mr-rt-30").css({
                marginRight: "0px"
                // marginRight: "50px"
            });
            $(".light-theme").css({
                marginRight: "126px"
            });
            $(".classic").css({
                marginRight: " 166px",
                width: "274px"
            });
            $("#remove-scroll").removeClass("col-lg-3");
            $('#wide-header').addClass('col-lg-12').removeClass('col-lg-9');
            $('.home-page-menubar').addClass('stick-to-top');
            $('.select-station-wrapper').css({
                margin: '0'
            });

        } else {
            $(".header-logo").css({
                display: 'block',
                marginRight: "0px"
            });
            $(".mr-rt-30").css({
                marginRight: "0"
            });
            $(".light-theme").css({
                marginRight: "0"
            });
            $(".classic").css({
                marginRight: " 0px",
                width: "274px"
            });
            $('.select-station-wrapper').css({
                margin: '15px auto'
            });
            $('.lang-switch').css({
                top: '20px'
            });
        }
    } else {
        $("#t1").css({
            position: 'unset',
            top: '0',
            background: "#f8f8f8",
            zIndex: "0"
        });
        if (winWidth >= 768) {
            // $( "#skip-main" ).css({display: 'block'});
            // $( "#search" ).css({display: 'block'});

            $(".header-logo").css({
                display: 'none'
            });

            $(".header-logo").css({
                display: 'none',
                marginRight: "0"
            });
            $(".mr-rt-30").css({
                marginRight: "30px"
            });
            $(".light-theme").css({
                marginRight: "4px"
            });
            $(".classic").css({
                marginRight: " 35px",
                width: "233px"
            });
            $("#remove-scroll").addClass("col-lg-3");
            $('#wide-header').addClass('col-lg-9').removeClass('col-lg-12');
            $('.home-page-menubar').removeClass('stick-to-top');
            $('.select-station-wrapper').css({
                margin: '0'
            });
        } else {
            $('.select-station-wrapper').css({
                margin: '265px auto 0'
            });
            $('.lang-switch').css({
                top: '-50px'
            });
        }
    }
});



$(document).ready(function () {
    
    var allcookies = document.cookie; 
 
  cookiearray = allcookies.split(';'); 
  for(var i=0; i<cookiearray.length; i++) 
  { 
       name = cookiearray[i].split('=')[0]; 
       value = cookiearray[i].split('=')[1]; 
       if(value=='d')
       {
           if ($(window).scrollTop() >= 680) {
            $("#t1").css({
                position: 'sticky',
                top: '0',
                background: "#262626!important",
                zIndex: "100"
                
            });
           
        }
        else{
             $("#t1").css({
                position: 'sticky',
                top: '0',
                background: "#111",
                zIndex: "100"
            });
        }
         var body = document.getElementById("body");
        var currentClass = body.className;
        body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode"; 
  
       }
     
       
      
  }  
    
    
    
    
    
    
    // for submenu caret arrow toggle on click

    $(".test").click(function () {
        $(".caret").toggleClass("caretup");
    });


    $(function () {
        $(".dropdown-submenu").on("click", function () {

            $(this).find(".caret").toggleClass("caretup");
        });
    });


    //       $(".dropdown-submenu").on("hide.bs.dropdown", function(){
    //     $(".btn").html('Dropdown <span class="caret"></span>');
    //   });
    //   $(".dropdown").on("show.bs.dropdown", function(){
    //     $(".btn").html('Dropdown <span class="caret caret-up"></span>');
    //   });



    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();

        e.stopPropagation();
        e.preventDefault();
    });

    //         var myDiv = $('.max-300');
    // myDiv.text(myDiv.text().substring(0,20)  );

    //             var myDivPara = $('.max-100');
    // myDivPara.text(myDivPara.text().substring(0,10)  );


    //      var myDivSm = $('.max-sm-300');
    // myDivSm.text(myDivSm.text().substring(0,20)  );

    //             var myDivSmPara = $('.max-sm-100');
    // myDivSmPara.text(myDivSmPara.text().substring(0,10)  );



    // header hide after scroll for inner page ==moved to inner-main.js


    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    // var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("t2").style.top = "0";

    //   } else {
    //     document.getElementById("t2").style.top = "-140px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }





    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });



    // history page scrolling
    //   new fullpage('#historyFullpage', {
    //   $('#historyFullpage').fullpage({
    //         anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    //       navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
    //         css3: true,
    //         scrollingSpeed: 1500,
    //         navigation: true,
    //         slidesNavigation: true,
    //         responsiveHeight: 600,
    //         dragAndMove: true,
    //         dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
    //         controlArrows: false,
    //          scrollOverflow: true,
    // //         autoScrolling: false,
    // fitToSection: true,
    //  scrollBar: true,
    //  normalScrollElements: 'footer',
    // // fixedElements: 'header, footer, header-history',
    //     });


    //  $('.image-info .close-i').on('click',function(){
    //      $('.image-info').slideUp('slow')
    //  });

    // navigation up down position 
    $('.dropdown').on('shown.bs.dropdown', function () {
        var menu = $(this).find('.ud');
        // var arrow = $(this).find('.');

        if ((menu != null) && (menu.length == 1)) {
            var btn = menu.parent();

            menu.position({ of: btn,
                my: "left top",
                at: "left-30% bottom",
                collision: "flipfit"
            });
        }
    });
    $('.floating-button').on('click', function (e) {
        $('.contact-list').slideToggle(500);
        $('.floating-contact-section').toggleClass('open-list', 500);
        $('.floating-button .icon').toggleClass('icon-close-list icon-phone', 500);
        e.stopPropagation();
    });

    $(document).on("click", function (e) {
        var triggerPopup = $(".contact-list");
        var trigger = $(".floating-button");
        var trigger2 = $(".floating-button .icon-phone");
        if (!triggerPopup.is(e.target) && !trigger.is(e.target) && !trigger2.is(e.target) && triggerPopup.has(e.target).length === 0) {
            $(".contact-list").slideUp("fast");
            $('.floating-contact-section').removeClass('open-list', 1000);
            $('.floating-button .icon').addClass('icon-phone', 1000);
            $('.floating-button .icon').removeClass('icon-close-list', 1000);
        }
        e.stopPropagation();
    });

    // function onScrollPopup() {
    //     var scrollMainWrap = $('#my-main').offset().top;
    //     var scrollToSec = scrollMainWrap - 63;
    //     if ($(window).scrollTop() >= scrollToSec) {
    //         $('.floating-button').show();
    //     } else {
    //         $('.floating-button').hide();
    //         $('.contact-list').slideUp(1000);
    //     }
    // }
    // $(window).on('scroll', function(e) {
    //     onScrollPopup();
    // });
    // $(window).on('load', function() {
    //     onScrollPopup();
    // });
});
// navigation tab active

$('#topheader .navbar-nav a').on('click', function () {
    $('#topheader .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});

$('#lightGallerySlider').lightSlider({
    item: 4,
    auto: true,
            pauseOnHover: true,
    loop: true,
    pager: false,
    slideMove: 2,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                item: 3,
                slideMove: 1
            }
            },
        {
            breakpoint: 800,
            settings: {
                item: 2,
                slideMove: 1,
                slideMargin: 6,
            }
            },
        {
            breakpoint: 480,
            settings: {
                item: 1,
                slideMove: 1
            }
            },

        ]
});

<!-- font increment and decrement  script -->

var fontSize = 100;
jQuery(document).ready(function () {
    //alert("ok");
    if (_getCookie("fontSize") != null) {
        var fontSize = _getCookie("fontSize");
    } else {
        var fontSize = 100;
    }
    jQuery("#wrapper").css("font-size", fontSize + "%");
});

function _getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            return _getCookieVal(j);
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0)
            break;
    }
    return null;
}

function _deleteCookie(name, path, domain) {
    if (_getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function _setCookie(name, value, expires, path, domain, secure) {
    var vurl = true;
    if (path != '' && path != undefined) {
        vurl = validUrl(path);
    }
    if (jQuery.type(name) == "string" && vurl) {
        document.cookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires.toGMTString() : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    }
}

function _getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length;
    }
    return unescape(document.cookie.substring(offset, endstr));
}
/*********Font size resize**********/
function set_font_size(fontType) {
    if (fontType == "increase") {
        if (fontSize < 130) {
            fontSize = parseInt(fontSize) + 15;
        }
    } else if (fontType == "decrease") {
        if (fontSize > 70) {
            fontSize = parseInt(fontSize) - 15;
        }
    } else {
        fontSize = 100;
    }
    _setCookie("fontSize", fontSize);
    jQuery("#wrapper").css("font-size", fontSize + "%");
    //jQuery("#template_three_column").css("font-size",fontSize + "%");
}

// headlines/ news js 
$("#updates").marquee({
    duration: 11e3,
    duplicated: !0,
    pauseOnHover: !0,
    startVisible: !0,
    yScroll: "bottom"
}), $("#n_slider3").marquee({
    duration: 11e3,
    direction: "up",
    pauseOnHover: !0,
    delayBeforeStart: 0,
    duplicated: !0,
    startVisible: !0
});

function hpause() {
    $('#updates').marquee('pause');
}

function hresume() {
    $('#updates').marquee('resume');
}

function mpause() {
    $('#m_slider2').marquee('pause');
}

function mresume() {
    $('#m_slider2').marquee('resume');
}

 function refreshcaptcha(id){
        var captcha_new_url = $("#captcha_refresh").attr('data-value');
        $("#mycaptcha").removeAttr("src").attr("src",captcha_new_url+Math.random());
    }

