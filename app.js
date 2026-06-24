/* écran accueil */

document.getElementById("enterBtn")
    .addEventListener("click", () => {

        document.getElementById("welcome")
            .style.display = "none";

        document.body.style.overflow = "auto";

    });

/* machine à écrire */

const text = "Notre Histoire";
let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("title")
            .innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 100);
    }
}

typeWriter();

/* apparition scroll */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".hidden")
    .forEach(el => observer.observe(el));

/* compteur */

/* METTRE VOTRE DATE ICI */
const startDate = new Date("2025-03-09");
const freezeDate = new Date("2026-06-24");

function updateCounter() {
    const diff = freezeDate - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("counter").innerHTML =
        `${days} jours`;
}

updateCounter();
setInterval(updateCounter, 1000);
updateCounter();

/* lettre */

document.getElementById("openLetter")
    .addEventListener("click", () => {

        document.getElementById("letter")
            .style.display = "block";

    });

/* coeurs */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💚";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (10 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.querySelector("header")
        .appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 700);

function scrollToStory() {

    document.querySelector("section")
        .scrollIntoView({
            behavior: "smooth"
        });

}
