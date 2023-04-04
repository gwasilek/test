
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2
  });
!function(e,t){"object"==typeof exports&&"undefined"!=typeof 
  module?t(exports):"function"==typeof 
  define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}
(this,function(e){"use strict";function _defineProperties(e,t)
                  {for(var r=0;r<t.length;r++)
                  {var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in 
                    n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function 
                  s(){return"undefined"!=typeof window}function t()
                  {return I||s()&&(I=window.gsap)&&I.registerPlugin&&I}var I,M,L,D,O,U,N,q,K,V,j,G,Y,J,W,r=(ScrollSmoother.register=function 
                  register(e){return M||(I=e||t(),s()&&window.document&&(L=window,D=document,O=D.documentElement,U=D.body)
                 ,I&&(N=I.utils.toArray,q=I.utils.clamp,j=I.parseEase("expo"),J=I.core.context||function(){},W=I.delayedCall(.2,function()
                 {return K.isRefreshing||V&&V.refresh()}).pause(),K=I.core.globals().ScrollTrigger,
                 I.core.globals("ScrollSmoother",ScrollSmoother),U&&K&&(G=K.core._getVelocityProp,Y=K.core._inputObserver,
                  ScrollSmoother.refresh=K.refresh,M=1))),M},function _createClass(e,t,r)
                  {return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}
                 (ScrollSmoother,[{key:"progress",get:function get(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),
                 ScrollSmoother);function ScrollSmoother(e){var o=this;M||ScrollSmoother.register(I)|
                 |console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},V&&V.kill(),J(V=this);function xa()
                 {return H.update(-_)}function za(){return n.style.overflow="visible"}function Ba(e)
                 {e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),
                   g=!1,e.animation.progress(e.progress,!0)}function 
                 Ca(e,t){(e!==_&&!u||t)&&(k&&(n.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",n._gsap.y=e+"px"),
                 B=e-_,_=e,K.isUpdating||K.update())}function Da(e){return arguments.length?(e<0&&(e=0),
                F.y=-e,g=!0,u?_=-e:Ca(-e),K.isRefreshing?i.update()
               :R(e),this):-_}function Fa(e){m.scrollTop=0,e.target.contains&&e.target.contains(m)||T&&!1===T(o,e)||
                (K.isInViewport(e.target)||e.target===d||o.scrollTo(e.target,!1,"center center"),d=e.target)}function Ga(e)
               {var r,n,o,i;b.forEach(function(t){r=t.pins,i=t.markers,e.forEach(function(e)
               {t.trigger&&e.trigger&&t!==e&&(e.trigger===t.trigger||e.pinnedContainer===t.trigger||t.trigger.contains(e.trigger))&&(n=e.start,
              o=(n-t.start-t.offset)/t.ratio-(n-t.start),r.forEach(function(e){return o-=e.distance/t.ratio-e.distance}),
              e.setPositions(n+o,e.end+o),e.markerStart&&i.push(I.quickSetter([e.markerStart,e.markerEnd],"y","px")),
              e.pin&&0<e.end&&(o=e.end-e.start,r.push({start:e.start,end:e.end,distance:o,trig:e}),t.setPositions(t.start,t.end+o),t.vars.onRefresh(t)))})})}function Ha(){za(),requestAnimationFrame(za),b&&(b.forEach(function(e){var t=e.start,r=e.auto?Math.min(K.maxScroll(e.scroller),e.end):t+(e.end-t)/e.ratio,n=(r-e.end)/2;t-=n,r-=n,e.offset=n||1e-4,e.pins.length=0,e.setPositions(Math.min(t,r),Math.max(t,r)),e.vars.onRefresh(e)}),Ga(K.sort())),H.reset()}function Ia(){return K.addEventListener("refresh",Ha)}function Ja(){return b&&b.forEach(function(e){return e.vars.onRefresh(e)})}function Ka(){return b&&b.forEach(function(e){return e.vars.onRefreshInit(e)}),Ja}function La(t,r,n,o){return function(){var e="function"==typeof r?r(n,o):r;return e||0===e||(e=o.getAttribute("data-"+P+t)||("speed"===t?1:0)),o.setAttribute("data-"+P+t,e),"auto"===e?e:parseFloat(e)}}function Ma(r,e,t,n){function Ab(){e=s(),t=f(),o=parseFloat(e)||1,c=(a="auto"===e)?0:.5,l&&l.kill(),l=t&&I.to(r,{ease:j,overwrite:!1,y:"+=0",duration:t}),i&&(i.ratio=o,i.autoSpeed=a)}function Bb(){g.y=h+"px",g.renderTransform(1),Ab()}function Fb(e){if(a){Bb();var t=function _autoDistance(e,t){var r,n,o=e.parentNode||O,i=e.getBoundingClientRect(),s=o.getBoundingClientRect(),a=s.top-i.top,l=s.bottom-i.bottom,c=(Math.abs(a)>Math.abs(l)?a:l)/(1-t),u=-c*t;return 0<c&&(n=.5==(r=s.height/(L.innerHeight+s.height))?2*s.height:2*Math.min(s.height,-c*r/(2*r-1))*(t||1),u+=t?-n*t:-n/2,c+=n),{change:c,offset:u}}(r,q(0,1,-e.start/(e.end-e.start)));v=t.change,u=t.offset}else v=(e.end-e.start)*(1-o),u=0;d.forEach(function(e){return v-=e.distance*(1-o)}),e.vars.onUpdate(e),l&&l.progress(1)}var o,i,a,l,c,u,s=La("speed",e,n,r),f=La("lag",t,n,r),h=I.getProperty(r,"y"),g=r._gsap,d=[],p=[],v=0;return Ab(),(1!==o||a||l)&&(Fb(i=K.create({trigger:a?r.parentNode:r,scroller:m,scrub:!0,refreshPriority:-999,onRefreshInit:Bb,onRefresh:Fb,onKill:function onKill(e){var t=b.indexOf(e);0<=t&&b.splice(t,1),Bb()},onUpdate:function onUpdate(e){var t,r,n,o=h+v*(e.progress-c),i=d.length,s=0;if(e.offset){if(i){for(r=-_,n=e.end;i--;){if((t=d[i]).trig.isActive||r>=t.start&&r<=t.end)return void(l&&(t.trig.progress+=t.trig.direction<0?.001:-.001,t.trig.update(0,0,1),l.resetTo("y",parseFloat(g.y),-B,!0),A&&l.progress(1)));r>t.end&&(s+=t.distance),n-=t.distance}o=h+s+v*((I.utils.clamp(e.start,e.end,r)-e.start-s)/(n-e.start)-c)}o=function _round(e){return Math.round(1e5*e)/1e5||0}(o+u),p.length&&!a&&p.forEach(function(e){return e(o-s)}),l?(l.resetTo("y",o,-B,!0),A&&l.progress(1)):(g.y=o+"px",g.renderTransform(1))}}})),I.core.getCache(i.trigger).stRevert=Ka,i.startY=h,i.pins=d,i.markers=p,i.ratio=o,i.autoSpeed=a,r.style.willChange="transform"),i}var n,m,t,i,b,s,a,l,c,u,r,f,h,g,d,p=e.smoothTouch,v=e.onUpdate,S=e.onStop,w=e.smooth,T=e.onFocusIn,x=e.normalizeScroll,C=this,E="undefined"!=typeof ResizeObserver&&!1!==e.autoResize&&new ResizeObserver(function(){return K.isRefreshing||W.restart(!0)}),P=e.effectsPrefix||"",R=K.getScrollFunc(L),k=1===K.isTouch?!0===p?.8:parseFloat(p)||0:0===w||!1===w?0:parseFloat(w)||.8,_=0,B=0,A=1,H=G(0),F={y:0};function refreshHeight(){return t=n.clientHeight,n.style.overflow="visible",U.style.height=t+"px",t-L.innerHeight}Ia(),K.addEventListener("killAll",Ia),I.delayedCall(.5,function(){return A=0}),this.scrollTop=Da,this.scrollTo=function(e,t,r){var n=I.utils.clamp(0,K.maxScroll(L),isNaN(e)?o.offset(e,r):+e);t?u?I.to(o,{duration:k,scrollTop:n,overwrite:"auto",ease:j}):R(n):Da(n)},this.offset=function(e,t){var r,n=(e=N(e)[0]).style.cssText,o=K.create({trigger:e,start:t||"top top"});return b&&Ga([o]),r=o.start,o.kill(!1),e.style.cssText=n,I.core.getCache(e).uncache=1,r},this.content=function(e){if(arguments.length){var t=N(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||U.children[0];return t!==n&&(c=(n=t).getAttribute("style")||"",E&&E.observe(n),I.set(n,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),k||I.set(n,{clearProps:"transform"})),this}return n},this.wrapper=function(e){return arguments.length?(m=N(e||"#smooth-wrapper")[0]||function _wrap(e){var t=D.querySelector(".ScrollSmoother-wrapper");return t||((t=D.createElement("div")).classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t}(n),l=m.getAttribute("style")||"",refreshHeight(),I.set(m,k?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):m},this.effects=function(e,t){if(b=b||[],!e)return b.slice(0);(e=N(e)).forEach(function(e){for(var t=b.length;t--;)b[t].trigger===e&&b[t].kill()});t=t||{};var r,n,o=t.speed,i=t.lag,s=[];for(r=0;r<e.length;r++)(n=Ma(e[r],o,i,r))&&s.push(n);return b.push.apply(b,s),s},this.sections=function(e,t){if(s=s||[],!e)return s.slice(0);var r=N(e).map(function(t){return K.create({trigger:t,start:"top 120%",end:"bottom -20%",onToggle:function onToggle(e){t.style.opacity=e.isActive?"1":"0",t.style.pointerEvents=e.isActive?"all":"none"}})});return t&&t.add?s.push.apply(s,r):s=r.slice(0),r},this.content(e.content),this.wrapper(e.wrapper),this.render=function(e){return Ca(e||0===e?e:_)},this.getVelocity=function(){return H.getVelocity(-_)},K.scrollerProxy(m,{scrollTop:Da,scrollHeight:function scrollHeight(){return refreshHeight()&&U.scrollHeight},fixedMarkers:!1!==e.fixedMarkers&&!!k,content:n,getBoundingClientRect:function getBoundingClientRect(){return{top:0,left:0,width:L.innerWidth,height:L.innerHeight}}}),K.defaults({scroller:m});var z=K.getAll().filter(function(e){return e.scroller===L||e.scroller===m});z.forEach(function(e){return e.revert(!0)}),i=K.create({animation:I.fromTo(F,{y:0},{y:function y(){return-refreshHeight()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function onUpdate(){if(this._dur){var e=g;e&&(Ba(i),F.y=_),Ca(F.y,e),xa(),v&&!u&&v(C)}}}),onRefreshInit:function onRefreshInit(e){if(b){var t=K.getAll().filter(function(e){return!!e.pin});b.forEach(function(r){r.vars.pinnedContainer||t.forEach(function(e){if(e.pin.contains(r.trigger)){var t=r.vars;t.pinnedContainer=e.pin,r.vars=null,r.init(t,r.animation)}})})}var r=e.getTween();h=r&&r._end>r._dp._time,f=_,F.y=0,k&&(m.style.pointerEvents="none",m.scrollTop=0,setTimeout(function(){return m.style.removeProperty("pointer-events")},50))},onRefresh:function onRefresh(e){e.animation.invalidate(),e.setPositions(e.start,refreshHeight()),h||Ba(e),F.y=-R(),Ca(F.y),A||e.animation.progress(I.utils.clamp(0,1,f/-e.end)),h&&(e.progress-=.001,e.update())},id:"ScrollSmoother",scroller:L,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:refreshHeight,onScrubComplete:function onScrubComplete(){H.reset(),S&&S(o)},scrub:k||!0}),this.smooth=function(e){return arguments.length&&(k=e||0),arguments.length?i.scrubDuration(e):i.getTween()?i.getTween().duration():0},i.getTween()&&(i.getTween().vars.ease=e.ease||j),this.scrollTrigger=i,e.effects&&this.effects(!0===e.effects?"[data-"+P+"speed], [data-"+P+"lag]":e.effects,{}),e.sections&&this.sections(!0===e.sections?"[data-section]":e.sections),z.forEach(function(e){e.vars.scroller=m,e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!u!==e&&(e?(i.getTween()&&i.getTween().pause(),R(-_),H.reset(),(r=K.normalizeScroll())&&r.disable(),(u=K.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function onChangeY(){return Da(-_)}})).nested=Y(O,"wheel,touch,scroll",!0,!1!==t)):(u.nested.kill(),u.kill(),u=0,r&&r.enable(),i.progress=(-_-i.start)/(i.end-i.start),Ba(i))),this):!!u},this.kill=this.revert=function(){o.paused(!1),Ba(i),i.kill();for(var e=(b||[]).concat(s||[]),t=e.length;t--;)e[t].kill();K.scrollerProxy(m),K.removeEventListener("killAll",Ia),K.removeEventListener("refresh",Ha),m.style.cssText=l,n.style.cssText=c;var r=K.defaults({});r&&r.scroller===m&&K.defaults({scroller:L}),o.normalizer&&K.normalizeScroll(!1),clearInterval(a),V=null,E&&E.disconnect(),U.style.removeProperty("height"),L.removeEventListener("focusin",Fa)},this.refresh=function(e,t){return i.refresh(e,t)},x&&(this.normalizer=K.normalizeScroll(!0===x?{debounce:!0,content:!k&&n}:x)),K.config(e),"overscrollBehavior"in L.getComputedStyle(U)&&I.set([U,O],{overscrollBehavior:"none"}),"scrollBehavior"in L.getComputedStyle(U)&&I.set([U,O],{scrollBehavior:"auto"}),L.addEventListener("focusin",Fa),a=setInterval(xa,250),"loading"===D.readyState||requestAnimationFrame(function(){return K.refresh()})}r.version="3.11.3",r.create=function(e){return V&&e&&V.content()===N(e.content)[0]?V:new r(e)},r.get=function(){return V},t()&&I.registerPlugin(r),e.ScrollSmoother=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});



var tl = gsap.timeline({defaults:{opacity:0, ease:"back"}});
function init() {
    tl.from(".main-wrapper", {ease:"linear", autoAlpha:15})
    .from(".heading-style-h1.is-one", {x:80, duration:1})
    .from(".heading-style-h1.is-two", {x:-80, duration:1}, "<")
    .from(".text-size-regular", {y:30}, "-=0.2")
    .from(".button-group", {y:50}, "-=0.4")
    .from(".yerold", {scale:0, transformOrigin:"50% 50%", duration:0.8}, "-=0.4")
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

