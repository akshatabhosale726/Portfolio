const text = [
    "AI/ML Engineer",
    "Machine Learning Enthusiast",
    "Tech Innovator"
];

let count = 0;
let index = 0;

function type() {
    let current = text[count];
    document.querySelector(".typing").textContent = current.slice(0, index++);

    if (index > current.length) {
        index = 0;
        count++;
    }

    if (count >= text.length) {
        count = 0;
    }

    setTimeout(type, 150);
}

type();

function animateSkill(card) {
    card.classList.add("active");
    setTimeout(function() {
        card.classList.remove("active");
    }, 600);
}

particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        color: { value: "#00ffff" },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.4,
            width: 1
        },
        move: { speed: 2 }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            }
        }
    }
});