var tl = gsap.timeline({defaults:{opacity:0, ease:"back"}});
function init() {
    tl.from(".section", {ease:"linear", autoAlpha:15})
    .from(".heading-style-h1.is-one", {x:80, duration:1})
    .from(".heading-style-h1.is-two", {x:-80, duration:1}, "<")
    .from(".text-size-regular", {y:30}, "-=0.2")
    .from(".button-group", {y:50}, "-=0.4") 
    .from(".cursor_dot", {scale:0, transformOrigin:"50% 50%", duration:0.8}, "-=0.5")
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
   0.5
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
