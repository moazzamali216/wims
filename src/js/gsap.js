gsap.registerPlugin(ScrollTrigger);

/* ===============================
   WORKERS IMAGE ANIMATION
   =============================== */
gsap.from(".workers-img", {
  x: -200,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".workers-img",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

(function animateImage() {
  const img = document.querySelector(".workers-img");
  if (!img) return;

  gsap.set(img, { x: -300, opacity: 0 });

  gsap.to(img, {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: img,
      start: "top 85%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
    },
  });
})();

/* ===============================
   COUNT-UP ANIMATION
   =============================== */
(function counters() {
  const nodes = document.querySelectorAll(".count");
  if (!nodes.length) return;

  function formatNumber(n) {
    return n.toLocaleString();
  }

  nodes.forEach((node) => {
    const targetRaw = node.getAttribute("data-target") || "0";
    const target = parseInt(String(targetRaw).replace(/\D/g, ""), 10) || 0;
    node.textContent = "0+";

    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: Math.min(2, 0.5 + target / 500),
      ease: "power1.out",
      scrollTrigger: {
        trigger: node.closest(".grid") || node,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      onUpdate() {
        const v = Math.floor(obj.val);
        node.textContent = formatNumber(v) + "+";
      },
      onComplete() {
        node.textContent = formatNumber(target) + "+";
      },
    });
  });
})();

/* ===============================
   SEW IMAGES ANIMATION
   =============================== */
(function animateSewImages() {
  const sewRight = document.querySelector(".sew-img");
  const sewLeft = document.querySelector(".sew2-img");

  if (sewRight) {
    gsap.from(sewRight, {
      y: 200,
      x: 200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sewRight,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }

  if (sewLeft) {
    gsap.from(sewLeft, {
      y: 200,
      x: -200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sewLeft,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }
})();

/* ===============================
   HERO & SALE SECTION
   =============================== */
gsap.to("#hero-text", {
  scrollTrigger: {
    trigger: "#hero-text",
    start: "top 90%",
  },
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power3.out",
});

gsap.to(".sale-text", {
  scrollTrigger: {
    trigger: ".sale-text",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  x: 0,
  duration: 1.3,
  ease: "power3.out",
});

gsap.to(".sale-small-img", {
  scrollTrigger: {
    trigger: ".sale-small-img",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  scale: 1,
  duration: 1.3,
  ease: "power2.out",
});

gsap.to(".sale-large-img", {
  scrollTrigger: {
    trigger: ".sale-large-img",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
  opacity: 1,
  scale: 1,
  duration: 1.3,
  ease: "power2.out",
});

/* ===============================
   PROGRESS BARS
   =============================== */
gsap.utils.toArray(".progress-bar").forEach((bar) => {
  const targetWidth = bar.getAttribute("data-width");

  gsap.fromTo(
    bar,
    { width: "0%" },
    {
      width: targetWidth + "%",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      },
    }
  );
});

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

/* ===============================
   SERVICES SECTION (Desktop only)
   =============================== */
if (window.innerWidth > 600) {
  gsap.from(".services-heading", {
    scrollTrigger: {
      trigger: ".services-heading",
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".services-subtext", {
    scrollTrigger: {
      trigger: ".services-subtext",
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.from(".service-card", {
    scrollTrigger: {
      trigger: ".mySwiper",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 60,
    duration: 0.9,
    stagger: 0.2,
    ease: "power2.out",
  });

  gsap.from(".services-footer", {
    scrollTrigger: {
      trigger: ".services-footer",
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
  });
}

/* ===============================
   CARD ANIMATIONS (Desktop only)
   =============================== */
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 600) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".card",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".card-bg", {
    scale: 1.1,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".card",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});


/* ===============================
   ABOUT IMAGE FLASH OPACITY ANIMATION
   =============================== */
(function animateAboutImages() {
  const images = document.querySelectorAll(".about-g-main, .about-g-1, .about-g-2");
  if (!images.length) return;

  images.forEach((img, i) => {
    gsap.set(img, { opacity: 0, scale: 0.95, y: 40 });

    gsap.to(img, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      delay: i * 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "restart none none reverse", // 👈 replay animation when re-entered
        once: false, // 👈 ensures it runs every time
      },
      onComplete: () => {
        // Flash/pulse effect after fade-in
        gsap.to(img, {
          opacity: 0.8,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        });
      },
    });
  });
})();




/* ===============================
   WELLNESS & WIMS SECTION
   =============================== */
(function wellnessWimsAnimations() {
  const section = document.querySelector(".wellness-section");
  if (!section) return;

  // Animate text block
  gsap.from(".wellness-text", {
    x: -120,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".wellness-text",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate image block
  gsap.from(".wellness-image", {
    x: 120,
    opacity: 0,
    duration: 1.3,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".wellness-image",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate CTA button
  gsap.from(".wellness-btn", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".wellness-btn",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
})();


/* ===============================
   WIMS GALLERY SECTION
   =============================== */
(function animateWimsGallery() {
  const cards = document.querySelectorAll(".gallery-card");
  const heading = document.querySelector(".gallery-heading");



  // Subtle parallax hover effect
  cards.forEach((card) => {
    const imageDiv = card.querySelector("div[style]");
    if (!imageDiv) return;

    card.addEventListener("mouseenter", () => {
      gsap.to(imageDiv, { scale: 1.08, duration: 0.8, ease: "power3.out" });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(imageDiv, { scale: 1, duration: 0.8, ease: "power3.out" });
    });
  });
})();




const dyedSlides = [
      {
        img: './public/images/d2.webp',
        text: '“A perfect blend of comfort and creativity — our Dyed Bedsets bring life and luxury into your space.”'
      },
      {
        img: './public/images/d3.webp',
        text: '“Crafted with precision-dyeing to ensure lasting brilliance and enduring softness.”'
      },
      {
        img: './public/images/d4.webp',
        text: '“Colors that speak elegance — enhancing every room with timeless vibrancy.”'
      }
    ];

    let currentIndex = 0;
    const imgEl = document.getElementById('dyedSliderImage');
    const textEl = document.getElementById('dyedSliderText');

    function updateDyedSlide() {
      imgEl.style.opacity = 0;
      textEl.style.opacity = 0;

      setTimeout(() => {
        imgEl.style.backgroundImage = `url(${dyedSlides[currentIndex].img})`;
        textEl.textContent = dyedSlides[currentIndex].text;
        imgEl.style.opacity = 1;
        textEl.style.opacity = 1;

        currentIndex = (currentIndex + 1) % dyedSlides.length;
      }, 600);
    }

    // Initialize first slide
    updateDyedSlide();
    setInterval(updateDyedSlide, 5000);