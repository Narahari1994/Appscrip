import { BsChevronCompactLeft } from "react-icons/bs";

import Sidebar from "../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="main-container">
      <div className="main-heading-container">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque
          eius, aut vero corrupti voluptatum corporis amet non asperiores
          aspernatur.
        </p>
      </div>
      <div className="items-container">
        <div className="items">
          <span className="item">{products.length} ITEMS</span>
          <span className="filter" onClick={() => setShowFilter(!showFilter)}>
            <BsChevronCompactLeft className="left" /> HIDE FILTER
          </span>
        </div>
        <select className="recomended-container">
          <option value="recomended">recomended</option>
          <option value="newest first">newest first</option>
          <option value="popular">popular</option>
          <option value="hightolow"> price: high to low</option>
          <option value="lowtohigh">price: low to high</option>
        </select>
      </div>
      <div className="products-container">
        {showFilter ? <Sidebar /> : null}

        <div className={showFilter ? "products" : "product-grid"}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Shop;
