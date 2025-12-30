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

const cursor = document.querySelector('.custom-cursor');

// Adjust these so the tip of your cursor image aligns with pointer
const offsetX = 0;
const offsetY = 0;

// Move cursor
document.addEventListener('mousemove', e => {
  cursor.style.left = (e.clientX - offsetX) + 'px';
  cursor.style.top = (e.clientY - offsetY) + 'px';
});

// Click effect
document.addEventListener('mousedown', () => {
  cursor.style.background = "url('cursor.png') no-repeat top left";
});
document.addEventListener('mouseup', () => {
  cursor.style.background = "url('cursor_norm.png') no-repeat top left";
});

// Optional: hover effect for links/buttons
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.background = "url('cursor_norm.png') no-repeat top left"; // or a special hover image
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.background = "url('cursor_norm.png') no-repeat top left";
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