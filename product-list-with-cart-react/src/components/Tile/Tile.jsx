import cart from './../../images/icon-add-to-cart.svg';

export const Tile = ({ image, label, name, price }) => {
  return (
    <div className="products__item">
      <div className="products__item-cart">
        <img className="products__item-image"
            src={image.src}
            alt={image.alt}
            width="250"
        />
        <button className="products__item-button js-add-to-cart">
          <img src={cart} />
          Add to Cart
        </button>
      </div>
      <div className="products__item-text">
        <p className="products__item-label">{label}</p>
        <h2 className="products__item-name">{name}</h2>
        <p className="products__item-price">${price}</p>
      </div>
    </div>
  );
}