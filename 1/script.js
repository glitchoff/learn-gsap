document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded");
})

//  Tweens .to()
let tween2 = gsap.to(".box1", {
    x: 1000,
    rotation:360,
    duration: 10,
    yoyo: true,
    repeat: -1,
    ease:"bounce.out",
    onComplete: () => {
        console.log("Animation Completed");
    },
    onStart: () => {
        console.log("Animation Started");
    },
    onUpdate: () => {
        console.log("Animation Updated");
    },
    onReverseComplete: () => {
        console.log("Animation Reversed");
    },
    onRepeat: () => {
        console.log("Animation Repeated");
    },
    onRepeatComplete: () => {
        console.log("Animation Repeat Completed");
    },
    onCompleteParams: ["Animation Completed"],
    onStartParams: ["Animation Started"],
    onUpdateParams: ["Animation Updated"],
    onReverseCompleteParams: ["Animation Reversed"],
    onRepeatParams: ["Animation Repeated"],
    onRepeatCompleteParams: ["Animation Repeat Completed"],
})


document.querySelector(".play").addEventListener("click", () => {
    tween2.play();
})
document.querySelector(".pause").addEventListener("click", () => {
    tween2.pause();
})
document.querySelector(".reverse").addEventListener("click", () => {
    tween2.reverse();
})
document.querySelector(".restart").addEventListener("click", () => {
    tween2.restart();
})

gsap.from(".box2", {
    x: 1000,
    rotation:360,
    duration: 10,
    yoyo: true,
    repeat: -1,
    ease:"bounce.out",
    onComplete: () => {
        console.log("Animation Completed");
    },
    onStart: () => {
        console.log("Animation Started");
    },
    onUpdate: () => {
        console.log("Animation Updated");
    },
    onReverseComplete: () => {
        console.log("Animation Reversed");
    },
    onRepeat: () => {
        console.log("Animation Repeated");
    },
    onRepeatComplete: () => {
        console.log("Animation Repeat Completed");
    },
    onCompleteParams: ["Animation Completed"],
    onStartParams: ["Animation Started"],
    onUpdateParams: ["Animation Updated"],
    onReverseCompleteParams: ["Animation Reversed"],
    onRepeatParams: ["Animation Repeated"],
    onRepeatCompleteParams: ["Animation Repeat Completed"],
})

// from to
gsap.fromTo(".box3", {
    x: 1000,
    rotation:30,
    yoyo: true,
    repeat: -1,
    ease:"bounce.out",
},{
    x: 0,
    rotation:360,
    duration: 10,
    yoyo: true,
    repeat: -1,
    ease:"bounce.out",
    
})


