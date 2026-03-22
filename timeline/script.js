document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded");
})

let t1= gsap.timeline();


t1.to(".box2", {
    x: 1000,
    duration: 1,
    rotation:360,
    ease: "power1.out",
})
t1.to(".box3", {
    x: 1100,
    duration: 14,
    ease: "power1.out",
})

Draggable.create(".box1", {
    // type: "rotation",
    type :"x,y",
    bounds: ".container",
    onDragEnd: () => {
        console.log("Drag Ended");
    },
    onDragStart: () => {
        console.log("Drag Started");
    },
    onDrag: () => {
        console.log("Dragging");
    },
    onDragEndParams: ["Drag Ended"],
    onDragStartParams: ["Drag Started"],
    onDragParams: ["Dragging"],
})