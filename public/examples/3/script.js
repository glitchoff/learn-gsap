


gsap.to("#page2 h1", {
    transform: "translateX(-65%)",
    scrollTrigger:{
        trigger:"#page2",
        start:"top 0%",
        end:"bottom -100%",
        scroller:"body",
        scrub:2,
        pin:true,

    }
})
