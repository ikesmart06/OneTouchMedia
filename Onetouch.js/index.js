// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.onclick = () => {
  navLinks.classList.toggle("active");
};

// Close menu automatically when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.onclick = () => {
    navLinks.classList.remove("active");
  };
});

// Reveal animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();