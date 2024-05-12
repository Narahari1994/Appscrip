import "./ProductCard.css";

const ProductCard = ({ title, price, image, description, rating }) => {
  return (
    <div className="product-container">
      <img src={image} alt="" />
      <h3 className="product-heading">{title.slice(0, 40)}...</h3>
      <p className="product-description">{description.slice(0, 150)}...</p>
      <div>
        <p className="product-price">Price: ${price}</p>
        <span className="product-rating">Rating: {rating.rate}</span>
      </div>
    </div>
  );
};
export default ProductCard;
