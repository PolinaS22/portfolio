// RUNNING LINE

// let heading = document.querySelector(".heading");
// function playHeading(element){
//     let string = element.textContent;
//     let a = string.slice(1);
//     let b = string.slice(0, 1);
//     let newString = a + b;
//     element.textContent = newString;
//     return;
// }

// setInterval(playHeading, 100, heading)


// preloader
window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);
}


// intro
gsap.from(".left", {x: 46, duration: 1.4, ease: "ease-in", opacity: 0, delay: 0.5})
gsap.from(".right", {x: -150, duration: 1.4, ease: "ease-in", opacity: 0, delay: 0.5})
gsap.from(".subtext", {opacity: 0, delay: 2, duration: 1.3})
// gsap animation
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#about, .imgOverlay",
        pin: true, // pin the trigger element while active
        start: "top 10%", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1,
    }
})
tl.from(".aboutImg", {
    opacity: 0
}).from(".aboutCont", {
    x: -300,
    opacity: 0,
    duration: 0.5
})





// TEXT ANIMATION + projects hover
// function startShowingText(){
    let gsapLoaded = setInterval(function(){
			const eleBuilder = document.querySelector("body").classList.contains("elementor-editor-active");
       if(window.gsap && window.ScrollTrigger && !eleBuilder){
            gsap.registerPlugin(ScrollTrigger);
            textShow();
            hoverAnimation();
            clearInterval(gsapLoaded);
        }
    }, 500);
    
    function textShow(){
        const textWidget = "#textShow";

        gsap.set(textWidget, {ease: "power.out"});

        const tl = gsap.timeline({scrollTrigger: {
            trigger: ".startText",
            start: "top center",
            end: "bottom center",
            toggleActions:"restart none restart none"
            }});

            tl.from(textWidget, {y: "50", ease: "power.out", duration: 1.2, opacity:0});
    };
    
// projects
    function hoverAnimation(){
        const projects = document.querySelectorAll(".project");

        projects.forEach((project) => {
        let tl = gsap.timeline({ paused: true});
        tl.to(project.querySelector(".innerText"), {backgroundColor: "#0c1436", duration: 0.3})
        .fromTo(project.querySelector(".innerName"), {opacity: 0, y: 10}, {opacity: 1, y: 0, duration: 0.3})
        .fromTo(project.querySelector(".innerDescription"), {opacity: 0, y: 10}, {opacity: 1, y: 0, duration: 0.3})
        .fromTo(project.querySelector(".btnMore"), {opacity: 0, y: 10}, {opacity: 1, y: 0, duration: 0.3});

        project.addEventListener("mouseenter", () => {
            tl.play();
        });

        project.addEventListener("mouseleave", () => {
            tl.reverse();
        });
        });
    }

// };
// startShowingText();






// CERTIFICATES
const slider = document.querySelector(".contCertificates");
const items = document.querySelectorAll(".imgBox");
const button = document.querySelectorAll(".button");

let active = 0;
let prev = 3;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => active > 0 ? gotoNum(active - 1) : gotoNum(items.length - 1);
const gotoNext = () => active < 3 ? gotoNum(active + 1) : gotoNum(0);
const gotoNum = number => {
    active = number;
    prev = active - 1;
    next = active + 1;

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
        items[i].classList.remove("prev");
        items[i].classList.remove("next");
    }

    if (next == 4) {
        next = 0;
    }

    if (prev == -1) {
        prev = 3;
    }

    items[active].classList.add("active");
    items[prev].classList.add("prev");
    items[next].classList.add("next");
}

// footer
const typedText = document.querySelector("#typedText");
const cursor = document.querySelector("#cursor");

const typeArray = ["interesting", "hard", "a journey", "fun", "challenging", "LIFE"];
const typeSpeed = 100;
const erasesSpeed = 100;
const wait = 1500;

let typeArrayIndex = 0;
let strIndex = 0;

function type(){
    if (strIndex < typeArray[typeArrayIndex].length) {
        typedText.textContent = typeArray[typeArrayIndex].substring(0, strIndex + 1);
        strIndex++;
        setTimeout(type, typeSpeed);
    }
    else {
        setTimeout(erase, wait)
    }
}

function erase(){
    if (strIndex > 0){
        typedText.textContent = typeArray[typeArrayIndex].substring(0, strIndex - 1);
        strIndex--;
        setTimeout(erase, erasesSpeed);
    }
    else {
        typeArrayIndex++;
        if (typeArrayIndex >= typeArray.length) {
            typeArrayIndex = 0;
        }
        setTimeout(type, typeSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    if(typeArray.length) setTimeout(type, wait);
})


// btn up
const scrollTop = document.querySelector("#scrolltop")
window.onload = () => {
 scrollTop.style.visibility = "hidden";
 scrollTop.style.opacity = 0;
}
window.onscroll = () => {
 if (window.scrollY > 200) {
 scrollTop.style.visibility = "visible";
 scrollTop.style.opacity = 1;
 } else {
 scrollTop.style.visibility = "hidden";
 scrollTop.style.opacity = 0;
 }
};