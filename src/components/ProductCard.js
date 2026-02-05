import Product from "./Product";
import productObj from "../utills/constant";
import { useState } from "react";

const ProductCard = () => {
  const [listofProduct, setLListofProduct] = useState(productObj);
  return (
    <div>
      <button onClick={() => {
        const result = listofProduct.filter(product => product.price >= 50000)
        setLListofProduct(result)
      }} className="flagship">
        flagship
      </button>
      <div className="productCard">
        {listofProduct.map((product, idx) => {
          return <Product key={idx} productObj={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductCard;
