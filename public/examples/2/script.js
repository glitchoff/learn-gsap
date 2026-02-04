

gsap.from("#page2 h1", {
    duration: 0.5,
    x:-500,
    opacity:1,
    scrollTrigger:{ 
        trigger: "#page2 h1",
        scroller: "body",
        start:"top 50%",
    }
})

gsap.from("#page2 h2", {
    duration: 0.5,
    x:500,
    opacity:1,
    scrollTrigger:{ 
        trigger: "#page2 h2",
        start:"top 50%",
        scroller: "body",
    }
})

gsap.from("#page3 .box", {
    duration: 1,
    x: -100,
    rotation: 360,
    scrollTrigger:{ 
        trigger: "#page3 .box",
        scroller: "body",
        markers:true,
         scrub:true
    }
})