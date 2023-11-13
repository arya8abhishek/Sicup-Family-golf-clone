var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-b");

document.addEventListener("mousemove", function (dets) {
    var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    crsr.style.left = dets.x + scrollX + "px";
    crsr.style.top = dets.y + scrollY + "px";
    blur.style.left = dets.x + scrollX - 200 + "px";
    blur.style.top = dets.y + scrollY - 200 + "px";
});


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2;
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "80px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub: 2 
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true
        start: "top 60%",
        end: "top 58%",
        scrub: 2
    }
})



gsap.from("#cards",{
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#cards",
        scroller:"body",
        // markers:true
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})


gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})

document.addEventListener('DOMContentLoaded', function () {
    VanillaTilt.init(document.querySelectorAll('.card'), {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.4,
        scale: 1.15, // Increase the size of the card on tilt
        transition: true,
        reset: true,
        gyroscope: true, // Enable gyroscope on mobile devices
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
    });
});
