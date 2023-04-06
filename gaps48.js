var tl = gsap.timeline({defaults:{opacity:0, ease:"back"}});
function init() {
    tl.from(".main-wrapper", {ease:"linear", autoAlpha:0})
    .from(".heading-style-h1.is-one", {x:80, duration:1})
    .from(".heading-style-h1.is-two", {x:-80, duration:1}, "<")
    .from(".text-size-regular", {y:30}, "-=0.2")
    .from(".button-group", {y:50}, "-=0.4")
    .from(".yerold", {scale:0, transformOrigin:"50% 50%", duration:0.8}, "-=0.4")
    .from(".header_image", {height:"100%", width:"100%", ease:"power4.out", duration: 5.25, transformOrigin:"50% 50%"}, 0.1);
}

window.addEventListener("load", function(event) { 
  init(); //do stuff
});

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



   gsap.set(".col", {opacity:0, y:60})

ScrollTrigger.create({
	trigger:".grid_wrapper, .wrapper-flex",
	start:"bottom 50%",
	marker:"true",
	onEnter: ()=> gsap.to(".col", {opacity:1, y:0, stagger:0.2, ease:"back"})
})

ScrollTrigger.create({
	trigger:".grid_wrapper, .wrapper-flex",
	start:"top 100%",
	marker:"true",
	onLeaveBack: ()=> {
		console.log("onLeaveBack")
		gsap.set(".col", {opacity:0, y:60, stagger:0.2, ease:"back"})
	}
})
  

