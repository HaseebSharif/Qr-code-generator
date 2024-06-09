import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div>
        <img className="product-img" src={product.imgSrc} alt="product1" />
      </div>
      <div className="product-details">
        <h5 className="product-title">{product.name}</h5>
        <p className="product-price">{product.price}</p>
        <a className="buy-btn" href={product.link} target="_blank">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
