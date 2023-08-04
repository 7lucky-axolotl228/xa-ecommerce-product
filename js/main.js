/* Variables */
const modifiers = {
  lightboxOpen: 'lightbox--open',
  siteHeaderCartModalOpen: 'site-header__cart-modal--open',
  imgThumbnailActive: 'img-showcase__thumbnail--active'
};

/* Functions */
function deactivateThumbnailBtn () {
  elsImgShowcaseThumbnailBtn.forEach(function (elButton) {
    elButton.parentElement.classList.remove(modifiers.imgThumbnailActive);
  });
}


/* Shopping cart modal */
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen);
  });
}


/* ImgShowcase */
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');
const elsImgShowcaseThumbnailBtn = document.querySelectorAll('.js-img-showcase__thumbnail-btn');

elsImgShowcaseThumbnailBtn.forEach(function (elButton) {
  elButton.addEventListener('click', function (evt) {
    /* Remove active class from btn */
    deactivateThumbnailBtn();

    /* Add --active class to buttons */
    elButton.closest('.img-showcase__thumbnail').classList.add(modifiers.imgThumbnailActive);

    /* Update active img src */
    elImgShowcaseActiveImg.src = elButton.dataset.imgBig;
  });
});

/* OPEN LIGHTBOX */
const elButtonClose = document.querySelector('.js-lightbox__close');
const elLightbox = document.querySelector('.lightbox');
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');

if (elLightboxToggler) {
  elLightboxToggler.addEventListener('click', function () {
    elLightbox.classList.add(modifiers.lightboxOpen);
  });
}

if (elButtonClose) {
  elButtonClose.addEventListener('click', function () {
    elLightbox.classList.remove(modifiers.lightboxOpen);
  });
}

/* LIGHTBOX SHOWCASE */
const elImgLightboxActiveImg = elLightbox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailBtn = elLightbox.querySelectorAll('.js-img-lightbox__thumbnail-btn');
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');


elsImgLightboxThumbnailBtn.forEach(function (elButton) {
  elButton.addEventListener('click', function () {
    /* Remove active class from btn */
    elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
    });

    /* Add --active class to buttons */
    elButton.closest('.img-showcase__thumbnail').classList.add(modifiers.imgThumbnailActive);

    /* Update active img src */
    elImgLightboxActiveImg.src = elButton.dataset.imgBig;
  });
});

/* LIGHTBOX CONTROL */
const elLightboxContolPrev = elLightbox.querySelector('.js-lightbox-contol--prev');
const elLightboxContolNext = elLightbox.querySelector('.js-lightbox-contol--next');

/* NEXT */
if (elLightboxContolNext) {
  elLightboxContolNext.addEventListener('click', function () {

    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');

    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    /* CHECK if there are elements after this element */
    if (elActiveItem.nextElementSibling === null) {
      elsLightboxImgThumbnail[0].classList.add(modifiers.imgThumbnailActive)
    } else {
      /* Make next element active */
      elActiveItem.nextElementSibling.classList.add(modifiers.imgThumbnailActive);
    }

  })
}

/* PREVIOUS */
if (elLightboxContolPrev) {
  elLightboxContolPrev.addEventListener('click', function () {

    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');

    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    if (elActiveItem.previousElementSibling === null) {
      elsLightboxImgThumbnail[3].classList.add(modifiers.imgThumbnailActive)
    } else {
      /* Make previous element active */
      elActiveItem.previousElementSibling.classList.add(modifiers.imgThumbnailActive);
    }

  })
}