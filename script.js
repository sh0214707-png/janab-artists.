/*==================================================
      HAPPY BIRTHDAY JANAB JI ❤️
      JAVASCRIPT VERSION 2 - PART 1
      Loader • AOS • Smooth Scroll • Typing
==================================================*/

"use strict";

/*======================
        LOADER
======================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.transition = "0.8s ease";

        }, 1800);

    }

});

/*======================
      AOS ANIMATION
======================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1200,
        once: true,
        offset: 100,
        easing: "ease-in-out"

    });

}

/*======================
      SMOOTH SCROLL
======================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});

/*======================
      HERO BUTTON
======================*/

const startBtn = document.getElementById("startBtn");

if(startBtn){

    startBtn.addEventListener("click",()=>{

        const story = document.getElementById("story");

        if(story){

            story.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}

/*======================
      TYPING EFFECT
======================*/

if(typeof Typed !== "undefined"){

new Typed(".typing",{

strings:[

"Happy Birthday ❤️",

"You Are My Happiness ❤️",

"My World Is Beautiful Because Of You ❤️",

"Forever Together ❤️"

],

typeSpeed:70,

backSpeed:40,

backDelay:1800,

loop:true

});

}

/*======================
      ACTIVE NAVBAR
======================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*======================
      HEADER BLUR
======================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*======================
      END OF PART 1
======================*/
/*==================================================
      JAVASCRIPT VERSION 2 - PART 2
      Music • Celebrate • Confetti • Hearts
==================================================*/

"use strict";

/*=========================
      BACKGROUND MUSIC
=========================*/

const music = document.getElementById("birthdayMusic");
const celebrateBtn = document.getElementById("celebrateBtn");

let musicStarted = false;

function playBirthdayMusic() {

    if (!music || musicStarted) return;

    music.volume = 0.4;

    music.play().catch(() => {});

    musicStarted = true;

}

document.addEventListener("click", playBirthdayMusic, { once: true });

/*=========================
      CELEBRATE BUTTON
=========================*/

if (celebrateBtn) {

    celebrateBtn.addEventListener("click", () => {

        playBirthdayMusic();

        startConfetti();

        createHearts(35);

        celebrateBtn.innerHTML = "❤️ Happy Birthday ❤️";

        celebrateBtn.style.transform = "scale(1.08)";

        setTimeout(() => {

            celebrateBtn.style.transform = "scale(1)";

        }, 300);

    });

}

/*=========================
      CONFETTI
=========================*/

function startConfetti() {

    if (typeof confetti !== "function") return;

    confetti({

        particleCount: 180,

        spread: 180,

        origin: {

            y: 0.6

        }

    });

    setTimeout(() => {

        confetti({

            particleCount: 120,

            angle: 60,

            spread: 80,

            origin: {

                x: 0

            }

        });

        confetti({

            particleCount: 120,

            angle: 120,

            spread: 80,

            origin: {

                x: 1

            }

        });

    }, 500);

}

/*=========================
      FLOATING HEARTS
=========================*/

function createHearts(total = 20) {

    const container = document.querySelector(".floating-hearts");

    if (!container) return;

    const emojis = [

        "❤️",

        "💖",

        "💕",

        "💗",

        "💝",

        "💞"

    ];

    for (let i = 0; i < total; i++) {

        const heart = document.createElement("span");

        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize = (18 + Math.random() * 20) + "px";

        heart.style.animationDuration = (8 + Math.random() * 5) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 13000);

    }

}

/*=========================
      AUTO HEARTS
=========================*/

setInterval(() => {

    createHearts(4);

}, 3000);

/*=========================
      SURPRISE BUTTON
=========================*/

const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", () => {

        playBirthdayMusic();

        startConfetti();

        createHearts(50);

        alert("❤️ Happy Birthday Janab Ji ❤️");

    });

}

/*=========================
      BUTTON RIPPLE
=========================*/

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        ripple.style.left = e.offsetX + "px";

        ripple.style.top = e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*=========================
      END OF PART 2
=========================*/
/*==================================================
      JAVASCRIPT VERSION 2 - PART 3
      Gallery • Scroll Progress • Scroll Top
      Mobile Menu • Cursor Glow
==================================================*/

"use strict";

/*=========================
      GALLERY LIGHTBOX
=========================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

if (galleryImages.length > 0) {

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    const preview = document.createElement("img");

    lightbox.appendChild(preview);

    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("show");
            preview.src = img.src;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.classList.remove("show");

    });

}

/*=========================
      SCROLL PROGRESS BAR
=========================*/

const progress = document.createElement("div");

progress.className = "scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const width = (scrollTop / pageHeight) * 100;

    progress.style.width = width + "%";

});

/*=========================
      SCROLL TO TOP
=========================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "scrollTop";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================
      MOBILE NAVIGATION
=========================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector("nav ul");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

/*=========================
      CURSOR GLOW
=========================*/

const cursor = document.createElement("div");

cursor.className = "cursor-glow";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/*=========================
      IMAGE HOVER SCALE
=========================*/

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

/*=========================
      RANDOM QUOTES
=========================*/

const quotes = [

"Every heartbeat reminds me of you ❤️",

"You are my favorite person forever ❤️",

"My happiest place is beside you ❤️",

"Happy Birthday My Love ❤️"

];

const quoteBox = document.querySelector(".quote-text");

if (quoteBox) {

    let index = 0;

    setInterval(() => {

        quoteBox.style.opacity = 0;

        setTimeout(() => {

            index++;

            if (index >= quotes.length) index = 0;

            quoteBox.innerHTML = quotes[index];

            quoteBox.style.opacity = 1;

        }, 500);

    }, 4000);

}

/*=========================
      END OF PART 3
=========================*/
/*==================================================
      JAVASCRIPT VERSION 2 - PART 4 (FINAL)
      Fireworks • Balloons • GSAP • Parallax
==================================================*/

"use strict";

/*=========================
      FIREWORKS
=========================*/

function launchFireworks() {

    if (typeof confetti !== "function") return;

    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 5,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

}

/*=========================
      BALLOONS
=========================*/

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.innerHTML = "🎈";

    balloon.style.left = Math.random() * 100 + "%";

    balloon.style.fontSize = (30 + Math.random() * 25) + "px";

    balloon.style.animationDuration =
        (8 + Math.random() * 5) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, 15000);

}

setInterval(createBalloon, 2500);

/*=========================
      PARALLAX
=========================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.backgroundPositionY =
            window.scrollY * 0.4 + "px";

    }

});

/*=========================
      GSAP ANIMATION
=========================*/

if (typeof gsap !== "undefined") {

    gsap.from(".glass-card", {

        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"

    });

}

/*=========================
      ROMANTIC QUOTES
=========================*/

const messages = [

"You are my today and all my tomorrows ❤️",

"My heart belongs to you forever ❤️",

"Every smile of yours is my happiness ❤️",

"I love you more every single day ❤️"

];

const romantic = document.querySelector(".romantic-text");

if (romantic) {

    let i = 0;

    setInterval(() => {

        romantic.style.opacity = "0";

        setTimeout(() => {

            i++;

            if (i >= messages.length) i = 0;

            romantic.textContent = messages[i];

            romantic.style.opacity = "1";

        }, 400);

    }, 5000);

}

/*=========================
      CELEBRATION
=========================*/

if (celebrateBtn) {

    celebrateBtn.addEventListener("click", () => {

        launchFireworks();

        createHearts(80);

        for (let i = 0; i < 15; i++) {

            setTimeout(createBalloon, i * 180);

        }

    });

}

/*=========================
      PAGE FADE-IN
=========================*/

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = "opacity 1s ease";

    document.body.style.opacity = "1";

});

/*=========================
      PERFORMANCE
=========================*/

window.addEventListener("resize", () => {

    document.body.style.overflowX = "hidden";

});

/*=========================
      END OF SCRIPT
=========================*/

console.log("❤️ Happy Birthday Janab Ji Website Loaded Successfully ❤️");
