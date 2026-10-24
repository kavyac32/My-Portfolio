// TYPING ANIMATION
const typingElement = document.getElementById("typing");

const words = [
"Web Developer 💻",
"Computer Science Student 🎓",
"Creative Learner ✨"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeText() {
if (!typingElement) return;

const word = words[wordIndex];

typingElement.textContent = word.substring(0, charIndex);

if (!deleting) {
    charIndex++;

    if (charIndex > word.length) {
        deleting = true;
        setTimeout(typeText, 1200);
        return;
    }
} else {
    charIndex--;

    if (charIndex < 0) {
        charIndex = 0;
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
}

setTimeout(typeText, deleting ? 45 : 90);

}

typeText();

// DARK MODE / LIGHT MODE
const themeToggle = document.getElementById("themeToggle");

function updateThemeButton() {
if (!themeToggle) return;

const isLight = document.body.classList.contains("light-mode");

themeToggle.textContent = isLight ? "🌙" : "☀️";
themeToggle.title = isLight ? "Switch to dark mode" : "Switch to light mode";
themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode"
);

}

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
document.body.classList.add("light-mode");
}

updateThemeButton();

if (themeToggle) {
themeToggle.addEventListener("click", () => {
document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");

    updateThemeButton();
    createSparkles(
        window.innerWidth - 40,
        100,
        8
    );
});

}

// BACK TO TOP ARROW
const backToTop = document.getElementById("backToTop");

if (backToTop) {
window.addEventListener("scroll", () => {
backToTop.classList.toggle("show", window.scrollY > 300);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

}

// FLOATING PARTICLES
const particlesContainer = document.getElementById("particles");

if (particlesContainer) {
for (let i = 0; i < 45; i++) {
const particle = document.createElement("span");

    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = (7 + Math.random() * 12) + "s";
    particle.style.animationDelay = (Math.random() * 10) + "s";
    particle.style.width = (2 + Math.random() * 4) + "px";
    particle.style.height = particle.style.width;

    particlesContainer.appendChild(particle);
}

}

// GLITTER EFFECT
function createSparkles(x, y, count = 7) {
for (let i = 0; i < count; i++) {
const sparkle = document.createElement("span");

    sparkle.className = "sparkle";
    sparkle.textContent = ["✦", "✧", "✨", "·"][Math.floor(Math.random() * 4)];

    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
    sparkle.style.setProperty("--dx", (Math.random() * 100 - 50) + "px");
    sparkle.style.setProperty("--dy", (Math.random() * 100 - 50) + "px");

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 850);
}

}

// Mouse glitter on computers
document.addEventListener("mousemove", (event) => {
if (Math.random() > 0.72) {
createSparkles(event.clientX, event.clientY, 1);
}
});

// Tap glitter on mobile and click effects
document.addEventListener("click", (event) => {
createSparkles(event.clientX, event.clientY, 5);
});

// Interactive cards
document.querySelectorAll(".interactive-card").forEach((card) => {
card.addEventListener("click", (event) => {
if (event.target.closest("button") || event.target.closest("a")) {
return;
}

    card.classList.remove("is-tapped");

    // Restart the tap animation
    void card.offsetWidth;

    card.classList.add("is-tapped");

    setTimeout(() => {
        card.classList.remove("is-tapped");
    }, 400);
});

});

// Project details buttons
document.querySelectorAll(".project-btn").forEach((button) => {
button.addEventListener("click", () => {
const card = button.closest(".project-card");

    if (!card) return;

    card.classList.toggle("expanded");

    button.textContent = card.classList.contains("expanded")
        ? "Show Less ↑"
        : "Explore Project ✨";
});

});

// Profile photo sparkle burst
const profilePhoto = document.getElementById("profilePhoto");

if (profilePhoto) {
profilePhoto.addEventListener("click", (event) => {
const rect = profilePhoto.getBoundingClientRect();

    createSparkles(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        22
    );
});

}

// Current year
const yearElement = document.getElementById("year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}