import Product from "./Product";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const [listofProduct, setLListofProduct] = useState([]);

  useEffect(()=>{
    fetchData()
  }, [])

  const fetchData = async() => {
    const data = await fetch("https://raw.githubusercontent.com/bikashdalapati-09/react-patel-mernstack/refs/heads/main/products.json")
    const resData = await data.json()
    console.log(resData);
    setLListofProduct(resData)
    
}

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
