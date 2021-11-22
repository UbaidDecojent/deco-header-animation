// gsap.registerPlugin(ScrollTrigger);

// var container = document.querySelector("#scroll-container");

// var height = container.clientHeight;
// document.body.style.height = height - "px";

// gsap.to(container, {
//   y: -(height - document.documentElement.clientHeight),
//   scrollTrigger: {
//     trigger: document.body,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 1,
//     markers:true
//   }
// });

const tl = gsap.timeline({
    defaults: {scaleX:1, scaleY:0.8, ease: 'slow'},
    scrollTrigger: {
      trigger: ".h-video",
      scrub: true,
      pin:true,
      start: "50% 50%",
      end: "+=100%",
      // markers:true
      
    }
  })

  .to(".video", {
    scaleX: 1.67,
    scaleY:1.7,
    ease: "slow"
  })

  


// var html = document.documentElement;
// var body = document.body;

// var scroller = {
//   target: document.querySelector("#scroll-container"),
//   ease: 0.05, // <= scroll speed
//   endY: 0,
//   y: 0,
//   resizeRequest: 1,
//   scrollRequest: 0,
// };

// var requestId = null;

// TweenLite.set(scroller.target, {
//   rotation: 0.01,
//   force3D: true
// });

// window.addEventListener("load", onLoad);

// function onLoad() {
//   updateScroller();
//   window.focus();
//   window.addEventListener("resize", onResize);
//   document.addEventListener("scroll", onScroll);
// }

// function updateScroller() {

//   var resized = scroller.resizeRequest > 0;

//   if (resized) {
//     var height = scroller.target.clientHeight;
//     body.style.height = height + "px";
//     scroller.resizeRequest = 0;
//   }

//   var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

//   scroller.endY = scrollY;
//   scroller.y += (scrollY - scroller.y) * scroller.ease;

//   if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
//     scroller.y = scrollY;
//     scroller.scrollRequest = 0;
//   }

//   TweenLite.set(scroller.target, {
//     y: -scroller.y
//   });

//   requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
// }

// function onScroll() {
//   scroller.scrollRequest++;
//   if (!requestId) {
//     requestId = requestAnimationFrame(updateScroller);
//   }
// }

// function onResize() {
//   scroller.resizeRequest++;
//   if (!requestId) {
//     requestId = requestAnimationFrame(updateScroller);
//   }
// }






  