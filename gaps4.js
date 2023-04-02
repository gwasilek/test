var tl = gsap.timeline({defaults:{opacity:0, ease:"back"}});
gsap.set(".rl-page-wrapper", {rotationY:15})
function init() {
    tl.from("rl-page-wrapper", {ease:"linear", autoAlpha:0})
    .from(".heading-style-h1.is-one", {x:80, duration:1})
    .from(".heading-style-h1.is-two", {x:-80, duration:1}, "<")
    .from(".text-size-regular", {y:30}, "-=0.2")
    .from(".button-group", {y:50}, "-=0.4") 
    .from(".cursor_dot", {scale:0, transformOrigin:"50% 50%", duration:0.8}, "-=0.5")
}

window.addEventListener("load", function(event) { 
  init(); //do stuff
});
