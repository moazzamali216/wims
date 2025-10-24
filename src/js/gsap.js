  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".workers-img loading="lazy"", {
    x: -200,              // start position (off-screen left)
    opacity: 0,           // fade in effect
    duration: 1.5,        // animation time
    ease: "power3.out",   // smooth easing
    scrollTrigger: {
      trigger: ".workers-img loading="lazy"", // element to trigger the animation
      start: "top 80%",        // when the top of the image hits 80% of viewport
      toggleActions: "play none none reverse" // replay on scroll up/down
    }
  });
  // Register GSAP plugin


/* ===============================
   IMAGE ANIMATION (slide from left)
   =============================== */
(function animateImage() {
  const img loading="lazy" = document.querySelector('.workers-img loading="lazy"');
  if (!img loading="lazy") return;

  // Set initial state
  gsap.set(img loading="lazy", { x: -300, opacity: 0 });

  gsap.to(img loading="lazy", {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: img loading="lazy",
      start: "top 85%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
      // markers: true, // Uncomment for debugging
    }
  });
})();

/* ===============================
   COUNT-UP ANIMATION (on scroll)
   =============================== */
(function counters() {
  const nodes = document.querySelectorAll('.count');
  if (!nodes.length) return;

  function formatNumber(n) {
    return n.toLocaleString();
  }

  nodes.forEach(node => {
    const targetRaw = node.getAttribute('data-target') || "0";
    const target = parseInt(String(targetRaw).replace(/\D/g, ''), 10) || 0;
    node.textContent = '0+';

    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: Math.min(2, 0.5 + target / 500),
      ease: "power1.out",
      scrollTrigger: {
        trigger: node.closest('.grid') || node,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      onUpdate() {
        const v = Math.floor(obj.val);
        node.textContent = formatNumber(v) + "+";
      },
      onComplete() {
        node.textContent = formatNumber(target) + "+";
      }
    });
  });
})();


(function animateSewImages() {
  const sewRight = document.querySelector('.sew-img loading="lazy"');
  const sewLeft = document.querySelector('.sew2-img loading="lazy"');

  // Right image: fly from bottom-right upward
  if (sewRight) {
    gsap.from(sewRight, {
      y: 200,        // from below
      x: 200,        // from the right side
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sewRight,
        start: "top 85%",
        toggleActions: "play none none reverse",
        // markers: true, // uncomment for testing
      }
    });
  }

  // Left image: fly from bottom-left upward
  if (sewLeft) {
    gsap.from(sewLeft, {
      y: 200,        // from below
      x: -200,       // from the left side
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sewLeft,
        start: "top 85%",
        toggleActions: "play none none reverse",
        // markers: true,
      }
    });
  }
})();


gsap.to("#hero-text", {
    scrollTrigger: {
      trigger: "#hero-text",
      start: "top 90%",
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  // Sale text fade + slide-in
  gsap.to(".sale-text", {
    scrollTrigger: {
      trigger: ".sale-text",
      start: "top 90%",
        toggleActions: "play none none reverse",
    },
    opacity: 1,
    x: 0,

    duration: 1.3,
    ease: "power3.out"
  });

  // Image animations
  gsap.to(".sale-small-img loading="lazy"", {
    scrollTrigger: {
      trigger: ".sale-small-img loading="lazy"",
      start: "top 90%",
              toggleActions: "play none none reverse",
    },
    opacity: 1,
    scale: 1,
    duration: 1.3,
    ease: "power2.out"
  });
   gsap.to(".sale-small-img loading="lazy"-2", {
    scrollTrigger: {
      trigger: ".sale-small-img loading="lazy"-2",
      start: "top 90%",
              toggleActions: "play none none reverse",
    },
    opacity: 1,
    scale: 1,
    duration: 1.3,
    ease: "power2.out"
  });

  gsap.to("#sale-large-img loading="lazy"", {
    scrollTrigger: {
      trigger: "#sale-large-img loading="lazy"",
      start: "top 90%",
              toggleActions: "play none none reverse",
    },
    opacity: 1,
    scale: 1,
    duration: 1.4,
    ease: "power2.out",
    delay: 0.2
  });




gsap.registerPlugin(ScrollTrigger);

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
        start: "top 90%", // triggers earlier to ensure the last one animates too
        end: "bottom 60%", // gives a wider trigger window
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      },
    }
  );
});

// Optional: refresh ScrollTrigger once all content (like images/fonts) are loaded
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});



if (window.innerWidth > 600) {

  // Header Animations
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

  // Card Animations — staggered and Swiper-safe
  gsap.from(".service-card", {
    scrollTrigger: {
      toggleActions: "play none none reverse",
      trigger: ".mySwiper",
      start: "top 80%",
    },
    opacity: 0,
    y: 60,
    duration: 0.9,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Footer Button & Text
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

document.addEventListener("DOMContentLoaded", () => {
  // Disable animations on small screens
  if (window.innerWidth < 600) return;

  gsap.registerPlugin(ScrollTrigger);

  // Animate cards on scroll
  gsap.from(".card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".card",
            toggleActions: "play none none reverse",
      start: "top 85%",
    },
  });

  // Optional: subtle scale animation on entrance
  gsap.from(".card-bg", {
    scale: 1.1,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".card",
            toggleActions: "play none none reverse",
      start: "top 85%",
    },
  });
});
