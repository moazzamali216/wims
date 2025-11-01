// WIMS Case Studies Fade-Up Animation
document.addEventListener("DOMContentLoaded", () => {
  const caseCards = gsap.utils.toArray("#wimsCases .group"); // select all cards

  if (!caseCards.length) return;

  gsap.from(caseCards, {
    y: 60,                // move up
    opacity: 0,            // fade in
    duration: 1,           // animation duration
    stagger: 0.2,          // delay between each card
    ease: "power3.out",    // smooth easing
    scrollTrigger: {
      trigger: "#wimsCases",
      start: "top 85%",    // when section enters viewport
      toggleActions: "play none none reverse",
    },
  });
    // Optional: Add subtle fade-up animation for each process step
  gsap.utils.toArray(".process-step").forEach((step, i) => {
    gsap.from(step, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: step,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      delay: i * 0.15
    });
  });
});
