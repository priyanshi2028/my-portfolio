// paraklx
// Select your elements
const text = document.getElementById("text");
const leaf = document.getElementById("leaf");
const hill1 = document.getElementById("hill1");
const hill2 = document.getElementById("hill2");
const hill3 = document.getElementById("hill3");

const moon = document.getElementById("moon");
const plant = document.getElementById("plant");
const hill5 = document.getElementById("hill5");
const hill4 = document.getElementById("hill4");
const tree = document.getElementById("tree");


tl1 = gsap.timeline()

tl1.from(moon , {
  // y:-200,
  scale:2,
  opacity : 0,
  duration : 2,
  ease: "ease-in",
})
tl1.from(hill4 , {
  x:-200,
  opacity : 0,
  duration : 0.3,
  ease : "ease-in"
})
tl1.from(hill5 , {
  x:200,
  opacity : 0,
  duration : 0.4,
  ease : "ease-in"
})
tl1.from([hill2,hill3,plant] , {

  opacity : 0,
  duration : 0.4,
  ease : "ease-in"
})
tl1.from(leaf, {
  y: -300,
  duration: 3,
  ease: "elastic.out(1,0.3)",
});

// tl1.from(".main", {
//   backgroundColor: 'gray',
// })



// Initialize a variable to track the previous scroll position
let previousScroll = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  let scrollDirection = currentScroll > previousScroll ? "down" : "up";

  // Update previousScroll with the current scroll position
  previousScroll = currentScroll;

  // Animate with GSAP based on scroll direction
  if (scrollDirection === "down") {
    gsap.to(text, { marginTop: currentScroll * 2.5, opacity: 0, duration: 3 });
    gsap.to(hill1, { marginTop: currentScroll * 2.5, opacity: 0, duration: 3, ease: "power2.out" });
    gsap.to(moon, { marginTop: currentScroll + 20, opacity: 0, duration: 3 });
    gsap.to(leaf, { top: currentScroll * -1.5, left: currentScroll * 1.5, opacity: 0, duration: 3 });
    gsap.to(hill5, { left: currentScroll * 1.5, opacity: 0, duration: 3 });
    gsap.to(hill4, { left: currentScroll * -1.5, opacity: 0, duration: 3 });
    gsap.to([hill2, hill3], { scale: 1.2, opacity: 0, duration: 0.4, ease: "power1.in" });
    gsap.to(plant ,{
      opacity : 0,
        duration: 0.5,
        ease: "ease-in",
       
      });
  } else {
    gsap.to(text, { marginTop: currentScroll * 2.5, opacity: 1, duration: 2 });
    gsap.to(hill1, { marginTop: currentScroll * 2.5, opacity: 1, duration: 2, ease: "power2.out" });
    gsap.to(moon, { marginTop: currentScroll + 20, opacity: 1, duration: 2 });
    gsap.to(leaf, { top: currentScroll * -1.5, left: currentScroll * 1.5, opacity: 1, duration: 3 });
    gsap.to(hill5, { left: currentScroll * 1.5, opacity: 1, duration: 2 });
    gsap.to(hill4, { left: currentScroll * -1.5, opacity: 1, duration: 2 });
    gsap.to([hill2, hill3], { scale: 1, opacity: 1, duration: 1, ease: "power1.out" });
    gsap.to(plant ,{
      opacity : 1,
        duration: 0.5,
        ease: "ease-in",
       
      });
  }
});


var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})


var tl =gsap.timeline({
  scrollTrigger : {
    trigger : ".page1 h1",
    // scroller: ".page1",
    // markers:true,
    start: "top 27%",
    end: "top 30%",
    scrub: 3
  }
})

  tl.to(moon  ,{
    opacity : 0,
      duration: 0.5,
      ease: "ease-in",
    });
tl.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
  
})
//  gsap.timeline({
//   scrollTrigger: {
//       trigger: ".page1 h1",
//       scroller: ".main",
//       markers:true,
//       start: "top 27%",
//       end: "top 0",
//       scrub: 3
//   }
// })
tl.to(".page1 h1", {
  x: -100,
}, "anim")
tl.to(".page1 h2", {
  x: 100
}, "anim")
tl.to(".page1 video", {
  width: "90%"
}, "anim")

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page2",
      // scroller: ".main",
      // markers:true,
      // start: "top -115%",
      // end: "top -120%",
      scrub: 3
  }
})
tl2.to(".main", {
  backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page4 ",
      // scroller: ".main",
      // markers:true,
      // start: "top -280%",
      // end: "top -300%",
      scrub: 3
  }
})

// tl3.to(".main",{
//   backgroundColor:"#0F0D0D"
// })
tl3.to(".main",{
    backgroundColor:"black"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      purple.style.display = "block"   
      gsap.from(purple , {
        opacity : 1,
        duration:0.6
      })
     
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})


