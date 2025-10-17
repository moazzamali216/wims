  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".workers-img", {
    x: -200,              // start position (off-screen left)
    opacity: 0,           // fade in effect
    duration: 1.5,        // animation time
    ease: "power3.out",   // smooth easing
    scrollTrigger: {
      trigger: ".workers-img", // element to trigger the animation
      start: "top 80%",        // when the top of the image hits 80% of viewport
      toggleActions: "play none none reverse" // replay on scroll up/down
    }
  });
  // Register GSAP plugin


/* ===============================
   IMAGE ANIMATION (slide from left)
   =============================== */
(function animateImage() {
  const img = document.querySelector('.workers-img');
  if (!img) return;

  // Set initial state
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
