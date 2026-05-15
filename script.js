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