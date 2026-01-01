const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

const skillBoxes = document.querySelectorAll('.skill-box');

skillBoxes.forEach(box => {
  const progress = box.querySelector('.progress span');
  const percentage = box.dataset.percentage;

  box.addEventListener('mouseenter', () => {
    progress.style.width = percentage + '%';
    let count = 0;
    const interval = setInterval(() => {
      if(count >= percentage) clearInterval(interval);
      else {
        count++;
        progress.textContent = count + '%';
      }
    }, 15);
  });

  box.addEventListener('mouseleave', () => {
    progress.style.width = '0%';
    progress.textContent = '0%';
  });
});