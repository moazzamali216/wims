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
