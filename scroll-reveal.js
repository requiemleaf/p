console.log("Scroll reveal script loaded");

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".project-img");

  const revealOnScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      } else {
        entry.target.classList.remove("reveal");
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, {
    threshold: 0.1,
  });

  images.forEach((img) => observer.observe(img));
});
