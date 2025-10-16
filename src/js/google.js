
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,es,fr,de,hi,zh-CN,ja',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    // If the user has a stored language, reapply it
    const lang = localStorage.getItem('preferredLang');
    if (lang) {
      setTimeout(() => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
          select.value = lang;
          select.dispatchEvent(new Event('change'));
        }
      }, 1000);
    }
  }

  // Save user language selection when changed
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('goog-te-combo')) {
      localStorage.setItem('preferredLang', e.target.value);
    }
  });