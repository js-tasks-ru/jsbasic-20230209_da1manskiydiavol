import createElement from '../../assets/lib/create-element.js';
import '../../5-module/3-task/index.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render_slides();
    this.render_head();
  }

  render_head() {
    this.elem = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
        ${this._slides}
      </div>
    </div>`);
    this.slider();
    this.elem.addEventListener('click', this.onClick);
    return this.elem;
  }

  render_slides() {
    this._slides = '';
    for (let item of this.slides) {
      this._slides += `
      <div class="carousel__slide" data-id="${item.id}">
        <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      </div>`;
    }
  }

  slider() {
    const arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    const arrowRight = this.elem.querySelector('.carousel__arrow_right');
    const carouselInner = this.elem.querySelector('.carousel__inner');
    const carouselSlide = this.elem.querySelector('.carousel__slide');

    let offset = 0;
    let currentSlide = 0;

    currentSlide === 0 ? arrowLeft.style.display = 'none' : arrowLeft.style.display = '';

    arrowRight.addEventListener('click', event => {
      if (event.target.closest('div')) {
        currentPosition(1);
      }
    });

    arrowLeft.addEventListener('click', event => {
      if (event.target.closest('div')) {
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

  onClick = (event) => {
    if (event.target.closest('button')) {
      parent = event.target.parentElement.parentElement.parentElement;
      console.log(parent.dataset.id);
      let customEv = new CustomEvent('product-add', {
        detail: parent.dataset.id,
        bubbles: true,
      });
      console.log(customEv);
      this.elem.dispatchEvent(customEv);
    }
  }
}
