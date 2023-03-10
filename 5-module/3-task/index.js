function initCarousel() {
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const arrowRight = document.querySelector('.carousel__arrow_right');

  const carouselInner = document.querySelector('.carousel__inner');
  const carouselSlide = document.querySelector('.carousel__slide');

  let offset = 0;
  let currentSlide = 0;

  currentSlide === 0 ? arrowLeft.style.display = 'none' : arrowLeft.style.display = '';

  arrowRight.addEventListener('click', event => {
    if(event.target.closest('div')) {
      currentPosition(1);
    }
  });

  arrowLeft.addEventListener('click', event => {
    if(event.target.closest('div')) {
      currentPosition(-1);
    }
  });

  function currentPosition(dir) {
    currentSlide += dir;
    currentSlide === 0 ? arrowLeft.style.display = 'none' : arrowLeft.style.display = '';
    currentSlide === carouselInner.children.length - 1 ? arrowRight.style.display = 'none' : arrowRight.style.display = '';
    carouselInner.style.transform = `translateX(${offset -= dir * carouselSlide.offsetWidth}px)`;
  }
}
