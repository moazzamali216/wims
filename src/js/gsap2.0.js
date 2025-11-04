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




document.addEventListener("DOMContentLoaded", () => {

  // heading
  gsap.from("section#uniformHero h1", {
    x: -80,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger:{
      trigger: "section#uniformHero",
      start: "top 60%",
              toggleActions: "play none none reverse",
    }
  });

  // subtext
  gsap.from("section#uniformHero p", {
    y: 50,
    opacity: 0,
    duration: 1.1,
    delay: .2,
    ease: "power3.out",
    scrollTrigger:{
      trigger: "section#uniformHero",
      start: "top 60%",
              toggleActions: "play none none reverse",
    }
  });

  // CTA button
  gsap.from("section#uniformHero a", {
    scale: 0.75,
    opacity: 0,
    duration: .9,
    delay: .35,
    ease: "power3.out",
    scrollTrigger:{
      trigger: "section#uniformHero",
      start: "top 60%",
              toggleActions: "play none none reverse",
    }
  });

  // image
  gsap.from("section#uniformHero img", {
    scale: 1.25,
    opacity: 0,
    duration: 1.6,
    ease: "power3.out",
    scrollTrigger:{
      trigger: "section#uniformHero",
      start: "top 60%",
              toggleActions: "play none none reverse",
    }
  });

});

