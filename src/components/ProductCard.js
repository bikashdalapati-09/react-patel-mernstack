import Product from "./Product";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const ProductCard = () => {
  const [listofProduct, setLListofProduct] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
  const data = await fetch(
    "https://raw.githubusercontent.com/bikashdalapati-09/react-patel-mernstack/main/products.json"
  );
  const resData = await data.json();

  setTimeout(() => {
    setLListofProduct(resData);
  }, 1500);
};


  if(listofProduct.length === 0){
    return <Skeleton/>
  }

  return (
    <div>
      <button
        onClick={() => {
          const result = listofProduct.filter(
            (product) => product.price >= 50000,
          );
          setLListofProduct(result);
        }}
        className="flagship"
      >
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
