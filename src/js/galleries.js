import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js';

document.addEventListener('DOMContentLoaded', () => {

  // ===== Dyed Desktop Grid Gallery =====
  const dyedGalleryGrid = document.getElementById('dyedGalleryGrid');
  const dyedSeeAllBtn = document.getElementById('dyedSeeAllBtn');
  const DYED_VISIBLE_COUNT = 15;

  if (dyedGalleryGrid && dyedSeeAllBtn) {
    const DYED_TOTAL_IMAGES = parseInt(dyedGalleryGrid.dataset.total, 10) || 34;
    for (let i = 1; i <= DYED_TOTAL_IMAGES; i++) {
      const div = document.createElement('div');
      div.classList.add('dyed-gallery-item');
      if (i <= DYED_VISIBLE_COUNT) div.classList.add('visible');

      div.innerHTML = `
        <div class="group relative overflow-hidden rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <a href="./public/images/dyed${i}.webp" data-pswp-width="768" data-pswp-height="1024">
            <img ${i <= DYED_VISIBLE_COUNT ? `src="./public/images/dyed${i}.webp" loading="lazy"` : `data-src="./public/images/dyed${i}.webp" class="dyed-deferred-img"`} 
            alt="Dyed ${i}" class="w-full h-full object-cover">
          </a>
        </div>`;
      dyedGalleryGrid.appendChild(div);
    }

    dyedSeeAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.dyed-gallery-item').forEach((item, index) => {
        if (index >= DYED_VISIBLE_COUNT) {
          const img = item.querySelector('.dyed-deferred-img');
          if (img && !img.src) { img.src = img.dataset.src; img.onload = () => img.classList.add('loaded'); }
        }
        item.classList.add('visible');
      });
      dyedSeeAllBtn.style.display = 'none';
    });

    new PhotoSwipeLightbox({
      gallery: '#dyedGalleryGrid',
      children: 'a',
      pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
    }).init();
  }

  // ===== Dyed Mobile Swiper =====
  const dyedSwiperWrapper = document.getElementById('dyedSwiperWrapper');
  if (dyedSwiperWrapper) {
    const DYED_TOTAL_SWIPER_IMAGES = parseInt(dyedSwiperWrapper.dataset.total, 10) || 34;

    for (let i = 1; i <= DYED_TOTAL_SWIPER_IMAGES; i++) {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      slide.innerHTML = `
        <div class="dyed-card">
          <a href="./public/images/dyed${i}.webp" data-pswp-width="768" data-pswp-height="1024">
            <img src="./public/images/dyed${i}.webp" loading="eager" alt="Dyed ${i}">
          </a>
        </div>`;
      dyedSwiperWrapper.appendChild(slide);
    }

    new PhotoSwipeLightbox({
      gallery: '.dyed-swiper',
      children: 'a',
      pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
    }).init();

    new Swiper('.dyed-swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: { 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }
    });
  }

  // ===== Adult (Bedset) Desktop Grid =====
  const galleryGrid = document.getElementById('galleryGrid');
  const seeAllBtn = document.getElementById('seeAllBtn');
  const VISIBLE_COUNT = 15;

  if (galleryGrid && seeAllBtn) {
    const TOTAL_IMAGES_ADULT = parseInt(galleryGrid.dataset.total, 10) || 45;

    for (let i = 1; i <= TOTAL_IMAGES_ADULT; i++) {
      const div = document.createElement('div');
      div.classList.add('gallery-item');
      if (i <= VISIBLE_COUNT) div.classList.add('visible');

      div.innerHTML = `
        <div class="group relative overflow-hidden rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <a href="./public/images/adu${i}.webp" data-pswp-width="768" data-pswp-height="1024">
            <img ${i <= VISIBLE_COUNT ? `src="./public/images/adu${i}.webp" loading="lazy"` : `data-src="./public/images/adu${i}.webp" class="deferred-img"`} 
            alt="Bedset ${i}" class="w-full h-full object-cover">
          </a>
        </div>`;
      galleryGrid.appendChild(div);
    }

    seeAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-item').forEach((item, index) => {
        if (index >= VISIBLE_COUNT) {
          const img = item.querySelector('.deferred-img');
          if (img && !img.src) { img.src = img.dataset.src; img.onload = () => img.classList.add('loaded'); }
        }
        item.classList.add('visible');
      });
      seeAllBtn.style.display = 'none';
    });

    new PhotoSwipeLightbox({
      gallery: '#galleryGrid',
      children: 'a',
      pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
    }).init();
  }

  // ===== Adult Mobile Swiper =====
  const adultSwiperWrapper = document.getElementById('adultSwiperWrapper');
  if (adultSwiperWrapper) {
    const TOTAL_ADULT_SWIPER_IMAGES = parseInt(adultSwiperWrapper.dataset.total, 10) || 45;

    for (let i = 1; i <= TOTAL_ADULT_SWIPER_IMAGES; i++) {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      slide.innerHTML = `
        <div class="adult-card">
          <a href="./public/images/adu${i}.webp" data-pswp-width="768" data-pswp-height="1024">
            <img src="./public/images/adu${i}.webp" loading="eager" alt="Adult ${i}">
          </a>
        </div>`;
      adultSwiperWrapper.appendChild(slide);
    }

    new PhotoSwipeLightbox({
      gallery: '.adult-swiper',
      children: 'a',
      pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
    }).init();

    new Swiper('.adult-swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: { 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }
    });

    console.log('Adult Swiper initialized without buttons!');
  }

  // ===== Kids Desktop Grid Gallery =====
const kidsGalleryGrid = document.getElementById('kidsGalleryGrid');
const kidsSeeAllBtn = document.getElementById('kidsSeeAllBtn');
const KIDS_VISIBLE_COUNT = 15;

if (kidsGalleryGrid && kidsSeeAllBtn) {
  const KIDS_TOTAL_IMAGES = parseInt(kidsGalleryGrid.dataset.total, 10) || 37;

  // Keep an array of remaining items to append late

  for (let i = 1; i <= KIDS_TOTAL_IMAGES; i++) {
    const div = document.createElement('div');
    div.classList.add('kids-gallery-item');
    if(i<=KIDS_VISIBLE_COUNT) div.classList.add('visible'); // only add visible class to first 15   

    div.innerHTML = `
      <div class="group relative overflow-hidden rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105">
        <a href="./public/images/ki${i}.webp" data-pswp-width="768" data-pswp-height="1024">
          <img ${i <= KIDS_VISIBLE_COUNT ? `src="./public/images/ki${i}.webp" loading="lazy"` : `data-src="./public/images/ki${i}.webp" class="deferred-img"`} 
          alt="Kids ${i}" class="w-full h-full object-cover">
        </a>
      </div>`;
      kidsGalleryGrid.appendChild(div);
 
    }

  // See All Button functionality
// ===== Kids Gallery See All Button =====
kidsSeeAllBtn.addEventListener('click', () => {
  document.querySelectorAll('.kids-gallery-item').forEach((item, index) => {
    if (index >= KIDS_VISIBLE_COUNT) {
      const img = item.querySelector('.deferred-img'); // ✅ correct class
      if (img && !img.src) {
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded'); // smooth fade-in
      }
    }
    item.classList.add('visible');
  });
  kidsSeeAllBtn.style.display = 'none';
});


  // Initialize PhotoSwipe for Kids Grid
  new PhotoSwipeLightbox({
    gallery: '#kidsGalleryGrid',
    children: 'a',
    pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
  }).init();
}


// ===== Kids Mobile Swiper =====
const kidsSwiperWrapper = document.getElementById('kidsSwiperWrapper');
if (kidsSwiperWrapper) {
  const KIDS_TOTAL_SWIPER_IMAGES = parseInt(kidsSwiperWrapper.dataset.total, 10) || 45;

  for (let i = 1; i <= KIDS_TOTAL_SWIPER_IMAGES; i++) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    slide.innerHTML = `
      <div class="kids-card">
        <a href="./public/images/ki${i}.webp" data-pswp-width="768" data-pswp-height="1024">
          <img src="./public/images/ki${i}.webp" loading="eager" alt="Kids ${i}">
        </a>
      </div>`;
    kidsSwiperWrapper.appendChild(slide);
  }

  // Initialize PhotoSwipe for Kids Swiper
  new PhotoSwipeLightbox({
    gallery: '.kids-swiper',
    children: 'a',
    pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
  }).init();

  // Initialize Swiper (no navigation, no pagination)
  new Swiper('.kids-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: { 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }
  });

  console.log('Kids Swiper initialized!');
}


});
