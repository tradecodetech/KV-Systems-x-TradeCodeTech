// Fade-in scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade").forEach(el => observer.observe(el));

    // Dark Mode Toggle
    const toggle = document.createElement("div");
    toggle.className = "toggle";
    toggle.innerText = "Dark Mode";
    toggle.onclick = () => document.body.classList.toggle("dark");
    document.body.appendChild(toggle);
});
