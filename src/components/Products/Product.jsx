import React from "react";
import styles from "./product.module.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p>{title}</p>
        <p className={styles.product__price}>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
          </div>
      </div>
      <img src={image} />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
