
var tl = gsap.timeline({defaults:{opacity:0, ease:"back"}});
function init() {
    tl.from(".page-wrapperr", {ease:"linear", autoAlpha:15})
    .from(".heading-style-h1.is-one", {x:80, duration:1})
    .from(".heading-style-h1.is-two", {x:-80, duration:1}, "<")
    .from(".text-size-regular", {y:30}, "-=0.2")
    .from(".button-group", {y:50}, "-=0.4") 
    .from(".yer", {scale:0, transformOrigin:"50% 50%", duration:0.8}, 0)
    .from(".script5.is-title", {scale:0, transformOrigin:"50% 50%", duration:0.8}, "<")

}

window.addEventListener("load", function(event) { 
  init(); //do stuff
});
// On Page Load
function pageLoad() {
  let tl = gsap.timeline({ delay: 0.1 });
  tl.to(".header_image", {
   height: "100%",
    width: "100%",
    ease: "power4.out",
    duration: 5.25,
    transformOrigin:"50% 50%"
   },
   0.1
   );
}
pageLoad();
gsap.defaults({ duration: 1.5, ease: "power2.out" });
$(".menu_link").on("mouseenter", function () {
  gsap.fromTo($(this).find(".menu_line"), { 
    x: "-110%"
  }, {
    x: "0%",
    duration: 0.5
  });
});
$(".menu_link").on("mouseleave", function () {
  gsap.to($(this).find(".menu_line"), {
    x: "110%",
    duration: 0.5
  });
  
  
});
var pages;
// html example: https://g6jds.csb.app/range_slider.txt
$(document).ready(function () {
    pages = 25;
    $('[name=pages]').val(pages);
    swiper_func_pages("pages", '.slider-number');
    do_on_range_change_pages();
  });
  $("[name=pages]").on("input", function () {
    pages = $('[name=pages]').val();
    swiper_func_pages("pages", '.slider-number');
    do_on_range_change_pages();
  });
  function do_on_range_change_pages() {
      $('.slider-number').text(pages);
  $('[bloc=budget]').text((pages * 4));
  $('[bloc=budget]').text((pages * 4));
  }
  function swiper_func_pages(name, swiper) {
    name = "[name=" + name + "]";
    var range_val = $(name).val();
    range_val = parseFloat(range_val);
    var range_width = $(name).width() - 10;
    var range_max = $(name).attr("max");
    range_width = range_width / range_max;
    range_width = range_width * (range_val - 1);
    $(swiper).css({ transform: "translateX(" + range_width + "px)" });
  }
