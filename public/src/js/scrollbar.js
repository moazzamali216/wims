   document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollToTop");
  let lastScrollTop = 0;

  // Show/Hide button based on scroll direction
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop && scrollTop > 300) {
      // Scrolling down
      scrollBtn.classList.add("opacity-100", "scale-100");
      scrollBtn.classList.remove("opacity-0", "scale-0");
    } else if (scrollTop < lastScrollTop) {
      // Scrolling up
      scrollBtn.classList.remove("opacity-100", "scale-100");
      scrollBtn.classList.add("opacity-0", "scale-0");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Scroll smoothly to top
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
