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

const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('success-msg');

if (contactForm && successMsg) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Hide form, show message
            contactForm.style.display = 'none';
            successMsg.style.display = 'flex';
            
            // RESET THE FORM (Optional)
            contactForm.reset();

            // --- ADD THIS LINE ---
            // It forces the animation library to recognize the new page height
            setTimeout(() => {
                AOS.refresh(); 
            }, 100); 
        });
    }

/* =========================================
       4. COPY EMAIL TO CLIPBOARD
    ========================================= */
    const emailBtn = document.getElementById('email-btn');
    const myEmail = "0325-1139@lspu.edu.ph"; // <--- PUT YOUR REAL EMAIL HERE

    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            // 1. Copy the text
            navigator.clipboard.writeText(myEmail).then(() => {
                
                // 2. Visual Feedback (Let the user know it worked)
                // If it's a text button:
                const originalText = emailBtn.innerText;
                if (originalText) { 
                    emailBtn.innerText = "Email Copied!";
                    setTimeout(() => {
                        emailBtn.innerText = originalText;
                    }, 2000); // Revert back after 2 seconds
                }

                // If it's an icon (in footer):
                // We can change the background color temporarily
                const originalColor = emailBtn.style.backgroundColor;
                emailBtn.style.backgroundColor = "#4A403A"; // Darker color
                setTimeout(() => {
                    emailBtn.style.backgroundColor = originalColor; // Revert color
                }, 200);
                
                // Optional: Alert for mobile users just in case
                // alert("Email copied: " + myEmail); 
            });
        });
    }