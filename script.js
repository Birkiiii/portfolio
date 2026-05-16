const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
    })
)

function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  modalImg.src = src;
  modal.classList.remove("hidden");
}

// close modal when clicking outside image
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");

  modal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
});

document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.tech-card');

        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Safeguard against inner container description interaction triggers
                if (e.target.closest('.tech-info')) return;

                // Close other opened panels to keep view clean
                cards.forEach(c => { if (c !== card) c.classList.remove('clicked'); });

                // Toggle click assignment class
                card.classList.toggle('clicked');
            });
        });

        // Background tracking to dismiss components if clicking empty canvas space
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.tech-card')) {
                cards.forEach(card => card.classList.remove('clicked'));
            }
        });
    });