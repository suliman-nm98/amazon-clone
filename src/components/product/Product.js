import React from "react";
import "./Product.css";
import { useStateValue } from "../../services/StateProvider";
function Product({ id, title, image, price, rating }) {
  const [state, dispach] = useStateValue();

  const addToBasket = () => {
    // dispach the item to data layer
    dispach({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* //produce stars based on the rating number */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} className="product__image" alt="image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
