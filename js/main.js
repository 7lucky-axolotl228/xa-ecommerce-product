/* Variables */
const modifiers = {
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

    elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open');
  });
}


/* ImgShowcase */
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');
const elsImgShowcaseThumbnailBtn = document.querySelectorAll('.img-showcase__thumbnail-btn');


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
    elLightbox.classList.add('lightbox--open');
  });
}

if (elButtonClose) {
  elButtonClose.addEventListener('click', function () {
    elLightbox.classList.remove('lightbox--open');
  });
}