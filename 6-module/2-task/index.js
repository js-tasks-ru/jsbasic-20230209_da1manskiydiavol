import createElement from "../../assets/lib/create-element.js";


export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.render();
  }

  render() {
    this.elem = createElement(`
      <div id="holder" class="container_half">
        <div class="card">
          <div class="card__top">
            <img src="/assets/images/products/laab_kai_chicken_salad.png" class="card__image" alt="product">
            <span class="card__price">€${this.product.price.toFixed(2)}</span>
          </div>
          <div class="card__body">
            <div class="card__title">Laab kai chicken salad</div>
            <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      </div>`);

    this.elem.addEventListener('click', event => {
      if (event.target.closest('button')) {
        let customEv = new CustomEvent('product-add', {
          detail: this.product.id,
          bubbles: true,
        });
        this.elem.dispatchEvent(customEv);
      }
    });

    return this.elem;
  }
}
