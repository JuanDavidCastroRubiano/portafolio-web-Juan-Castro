document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // CURSOR
  // =========================

  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  let mouseX = 0;
  let mouseY = 0;

  let ringX = 0;
  let ringY = 0;

  window.addEventListener("mousemove", e => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;

  });

  const animate = () => {

    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(animate);

  };

  animate();

  // =========================
  // SKILLS ANIMATION
  // =========================

  const fills = document.querySelectorAll(".skill-fill");

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.width =
          entry.target.dataset.width + "%";

      }

    });

  });

  fills.forEach(fill => observer.observe(fill));

  // =========================
  // SMOOTH SCROLL
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

      e.preventDefault();

      const section =
        document.querySelector(link.getAttribute("href"));

      section.scrollIntoView({
        behavior: "smooth"
      });

    });

  });

  // =========================
  // PARTICLES PREMIUM
  // =========================

  particlesJS("particles-js", {

    particles: {

      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 900
        }
      },

      color: {
        value: "#00d2ff"
      },

      shape: {
        type: "circle"
      },

      opacity: {
        value: 0.4,
        random: true
      },

      size: {
        value: 6,
        random: true
      },

      line_linked: {
        enable: true,
        distance: 180,
        color: "#00d2ff",
        opacity: 0.18,
        width: 1.2
      },

      move: {
        enable: true,
        speed: 1.8,
        direction: "none",
        random: true,
        out_mode: "out"
      }

    },

    interactivity: {

      detect_on: "canvas",

      events: {

        onhover: {
          enable: true,
          mode: "grab"
        },

        resize: true

      },

      modes: {

        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.4
          }
        }

      }

    },

    retina_detect: true

  });

});