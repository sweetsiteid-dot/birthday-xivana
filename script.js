/* =========================
   PIN SYSTEM
========================= */

let pin = "";

const correctPin = "0308";

function addPin(num){

    if(pin.length >= 4) return;

    pin += num;

    document.getElementById("pinInput").value =
        "●".repeat(pin.length);

}

function clearPin(){

    pin = pin.slice(0,-1);

    document.getElementById("pinInput").value =
        "●".repeat(pin.length);

}

function checkPin(){

    if(pin === correctPin){

        document.getElementById("pinScreen")
            .style.display = "none";

        document.getElementById("website")
            .classList.remove("hidden");

        const music =
            document.getElementById("music");

        music.volume = .6;

        music.play().catch(()=>{});

    }else{

        alert("Wrong PIN 💗");

        pin = "";

        document.getElementById("pinInput").value = "";

    }

}

/* =========================
   OPEN HEART
========================= */

function openHeart(){

    document.getElementById("bottleSection")
        .classList.remove("hidden");

    document.getElementById("bottleSection")
        .scrollIntoView({
            behavior:"smooth"
        });

}

/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

    const heart =
        document.createElement("div");

    heart.innerHTML =
        ["💗","🤍","🩵","✨"][
            Math.floor(Math.random()*4)
        ];

    heart.style.position = "fixed";

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.top = "-40px";

    heart.style.fontSize =
        (Math.random()*18+18) + "px";

    heart.style.opacity = ".9";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.animation =
        `fall ${Math.random()*4+6}s linear`;

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,650);

/* =========================
   ANIMATION
========================= */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{

transform:translateY(0) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(120vh) rotate(360deg);

opacity:0;

}

}

@keyframes flowerBurst{

0%{

opacity:1;

transform:
translate(0,0)
scale(.4);

}

100%{

opacity:0;

transform:
translate(
var(--x),
var(--y)
)
scale(1.5)
rotate(360deg);

}

}

@keyframes popIn{

from{

opacity:0;

transform:scale(.6);

}

to{

opacity:1;

transform:scale(1);

}

}

`;

document.head.appendChild(style);

/* =========================
   BOTTLE
========================= */

let bottleOpened = false;

function breakBottle(){

    if(bottleOpened) return;

    bottleOpened = true;

    const bottle =
        document.getElementById("bottle");

    bottle.innerHTML = "💥";

    createFlowerBurst();

    setTimeout(()=>{

        bottle.style.display = "none";

        document.getElementById(
            "letterContainer"
        ).style.display = "block";

        typeLetter();

    },1500);

}

/* =========================
   FLOWER BURST
========================= */

function createFlowerBurst(){

    const flowers =
        document.getElementById("flowers");

    const emojis = [
        "🌸",
        "🌷",
        "🌹",
        "💗",
        "🩵",
        "🤍",
        "✨",
        "🫧"
    ];

    for(let i=0;i<45;i++){

        const flower =
            document.createElement("div");

        flower.innerHTML =
            emojis[
                Math.floor(
                    Math.random()*emojis.length
                )
            ];

        flower.style.position = "absolute";

        flower.style.left = "0";

        flower.style.top = "0";

        flower.style.fontSize =
            (Math.random()*18+20)+"px";

        flower.style.setProperty(
            "--x",
            (Math.random()*700-350)+"px"
        );

        flower.style.setProperty(
            "--y",
            (-Math.random()*450-80)+"px"
        );

        flower.style.animation =
            "flowerBurst 2.5s forwards";

        flowers.appendChild(flower);

        setTimeout(()=>{

            flower.remove();

        },2500);

    }

}

/* =========================
   LETTER
========================= */

const message = `

Happy Birthday to my amazing virtual best friend! 🎉💗

It's honestly crazy how someone I've met online can become such an important part of my life. Even though we're miles apart and haven't spent much time together in person, you've always been someone I can laugh with, talk to, and count on. Thank you for being such a wonderful friend.

I hope this year brings you countless reasons to smile, endless happiness, good health, success, and everything you've been wishing for. You deserve so much love, peace, and all the beautiful things life has to offer.

Thank you for every conversation, every laugh, every late-night chat, and every moment you've made my days a little brighter. Distance has never changed how much I appreciate our friendship, and I'm really grateful that we found each other.

I hope we stay friends for a very long time and someday get the chance to meet in person. Until then, I'll keep cheering you on from afar and wishing you nothing but the best in everything you do.

Enjoy your special day, make lots of wonderful memories, and don't forget to smile because today is all about you.

Happy Birthday once again!

I'm so lucky to have a friend like you.

Wishing you the happiest birthday ever! 🤍🎂✨

With love,

Kaileen 💗

`;

function typeLetter(){

    const target =
        document.getElementById("letterText");

    target.innerHTML = "";

    let i = 0;

    const typing = setInterval(()=>{

        target.innerHTML +=
            message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(typing);

        }

    },12);

}

/* =========================
   LOVE QUIZ
========================= */

let currentQuestion = 0;

const questions =
document.querySelectorAll(".question");

function checkAnswer(button, correct){

    if(!correct){

        alert("Oops! That's not the right answer. Try again! 💗");

        return;

    }

    button.style.background =
        "linear-gradient(135deg,#7ed6ff,#ff8fc2)";

    button.innerHTML += " ✓";

    setTimeout(()=>{

        questions[currentQuestion]
            .classList.remove("active");

        currentQuestion++;

        if(currentQuestion < questions.length){

            questions[currentQuestion]
                .classList.add("active");

            questions[currentQuestion]
                .scrollIntoView({
                    behavior:"smooth",
                    block:"center"
                });

        }else{

            document.getElementById("quizSuccess")
                .classList.remove("hidden");

            createConfetti();

            document.getElementById("quizSuccess")
                .scrollIntoView({
                    behavior:"smooth"
                });

        }

    },700);

}

/* =========================
   CONFETTI
========================= */

function createConfetti(){

    const emojis = [
        "💗",
        "🩵",
        "🤍",
        "✨",
        "🎉",
        "🎂",
        "🎈",
        "🌸"
    ];

    for(let i=0;i<100;i++){

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            emojis[
                Math.floor(
                    Math.random()*emojis.length
                )
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random()*100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (Math.random()*18+16) + "px";

        confetti.style.pointerEvents = "none";

        confetti.style.zIndex = "9999";

        confetti.style.animation =
            `fall ${Math.random()*3+3}s linear`;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}

/* =========================
   AUTO PLAY MUSIC
========================= */

document.addEventListener("visibilitychange",()=>{

    const music =
        document.getElementById("music");

    if(!document.hidden){

        music.play().catch(()=>{});

    }

});

/* =========================
   IMAGE POP EFFECT
========================= */

document.querySelectorAll(".gallery-grid img")
.forEach(img=>{

    img.addEventListener("click",()=>{

        img.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(1.08)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:350

        });

    });

});
