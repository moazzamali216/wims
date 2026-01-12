
  import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js';

  const dyedGalleryGrid = document.getElementById('dyedGalleryGrid');
  const dyedSeeAllBtn = document.getElementById('dyedSeeAllBtn');

  const DYED_TOTAL_IMAGES = 34;  // Total number of dyed images
  const DYED_VISIBLE_COUNT = 15; // First 12 images visible
  const START_INDEX = 1;        // Starting image: dyed21.webp

  // Generate Dyed Gallery Items
  for (let i = START_INDEX; i < START_INDEX + DYED_TOTAL_IMAGES; i++) {
    const div = document.createElement('div');
    div.classList.add('dyed-gallery-item');
    if (i < START_INDEX + DYED_VISIBLE_COUNT) div.classList.add('visible'); // First 12 visible

    div.innerHTML = `
      <div class="group relative overflow-hidden rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105">
        <a href="./public/images/dyed${i}.webp" 
           data-pswp-width="768" data-pswp-height="1024" 
           data-pswp-src="./public/images/dyed${i}.webp">
          <img ${i < START_INDEX + DYED_VISIBLE_COUNT ? `src="./public/images/dyed${i}.webp" loading="eager"` : `data-src="./public/images/dyed${i}.webp" class="dyed-deferred-img"`} 
          alt="Dyed ${i}" class="w-full h-full object-cover">
        </a>
      </div>
    `;
    dyedGalleryGrid.appendChild(div);
  }

  // See All click event
  dyedSeeAllBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.dyed-gallery-item');
    items.forEach((item, index) => {
      if (index >= DYED_VISIBLE_COUNT) {
        const img = item.querySelector('.dyed-deferred-img');
        if (img && !img.src) {
          img.src = img.dataset.src;
          img.onload = () => img.classList.add('loaded'); // Fade-in
        }
      }
      item.classList.add('visible');
    });
    dyedSeeAllBtn.style.display = 'none';
  });

  // Initialize PhotoSwipe Lightbox
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#dyedGalleryGrid',
    children: 'a',
    pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
  });

  lightbox.init();

  const swiperWrapper = document.getElementById('dyedSwiperWrapper');
  const seeAllBtn = document.getElementById('dyedSeeAllBtn');

  const TOTAL_IMAGES = 45;  // total dyed images
  const VISIBLE_COUNT = 12; // first 12 visible
  const START_INDEX2 = 21;   // starting image

  // Generate slides
  for (let i = START_INDEX2; i < START_INDEX2 + TOTAL_IMAGES; i++) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    if (i < START_INDEX2 + VISIBLE_COUNT) slide.classList.add('visible');

    slide.innerHTML = `
      <div class="dyed-card">
        <a href="./public/images/dyed${i}.webp" data-pswp-width="768" data-pswp-height="1024" data-pswp-src="./public/images/dyed${i}.webp">
          <img ${i < START_INDEX2 + VISIBLE_COUNT ? `src="./public/images/dyed${i}.webp" loading="eager"` : `data-src="./public/images/dyed${i}.webp" class="dyed-deferred-img"`} alt="Dyed ${i}">
        </a>
      </div>
    `;
    swiperWrapper.appendChild(slide);
  }

  // See All button
  seeAllBtn.addEventListener('click', () => {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide, index) => {
      if (index >= VISIBLE_COUNT) {
        const img = slide.querySelector('.dyed-deferred-img');
        if (img && !img.src) {
          img.src = img.dataset.src;
          img.onload = () => img.classList.add('loaded');
        }
      }
    });
    seeAllBtn.style.display = 'none';
  });

  // Initialize PhotoSwipe
  const lightbox2 = new PhotoSwipeLightbox({
    gallery: '.dyed-swiper',
    children: 'a',
    pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
  });
  lightbox2.init();

  // Initialize Swiper
  const swiper = new Swiper('.dyed-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      0: { slidesPerView: 1 },    // <600px
      600: { slidesPerView: 2 },  // 600px - 768px
      768: { slidesPerView: 3 }   // >=768px
    }
  });




  const bedsetGalleryGrid = document.getElementById('bedsetGalleryGrid');
  const bedsetSeeAllBtn = document.getElementById('bedsetSeeAllBtn');
  const BEDSET_TOTAL_IMAGES = 45;
  const BEDSET_VISIBLE_COUNT = 15;

  // Generate gallery items
  for (let index = 1; index <= BEDSET_TOTAL_IMAGES; index++) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('bedset-gallery-item');
    if (index <= BEDSET_VISIBLE_COUNT) galleryItem.classList.add('visible'); // First 15 visible

    galleryItem.innerHTML = `
      <div class="group relative overflow-hidden rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105">
        <a href="./public/images/adu${index}.webp" data-pswp-width="768" data-pswp-height="1024">
          <img ${index <= BEDSET_VISIBLE_COUNT 
                ? `src="./public/images/adu${index}.webp" loading="eager"` 
                : `data-src="./public/images/adu${index}.webp" class="bedset-deferred-img"`} 
          alt="Bedset ${index}" class="w-full h-full object-cover">
        </a>
      </div>
    `;
    bedsetGalleryGrid.appendChild(galleryItem);
  }

  // See All click event
  bedsetSeeAllBtn.addEventListener('click', () => {
    const allItems = bedsetGalleryGrid.querySelectorAll('.bedset-gallery-item');
    allItems.forEach((item, idx) => {
      if (idx >= BEDSET_VISIBLE_COUNT) {
        const img = item.querySelector('.bedset-deferred-img');
        if (img && !img.src) {
          img.src = img.dataset.src;
          img.onload = () => img.classList.add('loaded'); // Fade-in effect
        }
      }
      item.classList.add('visible');
    });
    bedsetSeeAllBtn.style.display = 'none';
  });




  


  
