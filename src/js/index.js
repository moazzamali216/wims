 
 
 document.addEventListener('DOMContentLoaded', () => {
  const allAccordionItems = document.querySelectorAll('.accordion-item');

  allAccordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');

    button.addEventListener('click', () => {
      const clickedItem = button.closest('.accordion-item');
      const isCurrentlyExpanded = button.getAttribute('aria-expanded') === 'true';

      // --- This is the new logic ---
      // First, close all accordion items.
      allAccordionItems.forEach(otherItem => {
        const otherButton = otherItem.querySelector('.accordion-button');
        otherButton.setAttribute('aria-expanded', 'false');
        const otherContent = otherButton.nextElementSibling;
        otherContent.style.maxHeight = '0px';
      });
      // --- End of new logic ---

      // If the clicked item was not already open, then open it.
      if (!isCurrentlyExpanded) {
        button.setAttribute('aria-expanded', 'true');
        const content = button.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + 'px';
      }
      // If it was already open, the loop above has already closed it.
    });
  });
});

 document.addEventListener("DOMContentLoaded", () => {
      const banner = document.getElementById("cookie-banner");
      const acceptBtn = document.getElementById("accept-cookies");
      const declineBtn = document.getElementById("decline-cookies");

      banner.style.display = "none";

      if (!localStorage.getItem("cookiesConsent")) {
        banner.style.display = "flex";
        document.body.style.overflow = "hidden";
      }

      const closeBanner = (choice) => {
        localStorage.setItem("cookiesConsent", choice);
        banner.style.display = "none";
        document.body.style.overflow = "auto";
      };

      acceptBtn.addEventListener("click", () => closeBanner("accepted"));
      declineBtn.addEventListener("click", () => closeBanner("declined"));
    });

    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();


    
 


