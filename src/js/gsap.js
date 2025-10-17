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