// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Typing Effect
const text = "BS Computer Science Student";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 100);
    }
}
typingEffect();

// Scroll Reveal
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// ===============================
// SKILLS COUNT-UP (FINAL WORKING)
// ===============================

let skillsAnimated = false;

function animateSkills() {
    if (skillsAnimated) return;

    const skillsSection = document.querySelector("#skills");
    if (!skillsSection) return;

    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 150) {
        skillsAnimated = true;

        document.querySelectorAll(".progress").forEach(bar => {
            const target = Number(bar.dataset.percent);
            let count = 0;

            bar.style.width = target + "%";

            const interval = setInterval(() => {
                count++;
                bar.textContent = count + "%";

                if (count >= target) {
                    clearInterval(interval);
                }
            }, 20);
        });
    }
}

window.addEventListener("scroll", animateSkills);
