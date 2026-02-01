// Reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Mobile menu
document.querySelector(".menu-toggle").onclick = () =>
  document.querySelector(".nav-links").classList.toggle("active");

// Back to top
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.onclick = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });

// Footer year FIX
document.getElementById("year").textContent = new Date().getFullYear();


document.getElementById("year").textContent = new Date().getFullYear();

