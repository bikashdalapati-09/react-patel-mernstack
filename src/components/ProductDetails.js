import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const params = useParams();
  const idx = Number(params.productId) - 1;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/bikashdalapati-09/react-patel-mernstack/refs/heads/main/products.json",
    );
    const resData = await data.json();
    const singleData = resData[idx];
    setSingleProduct(singleData);
  };

  if (singleProduct === null) {
    return <Skeleton />;
  }

  return (
    <div className="single-product">
  <img
    className="product-img"
    src={singleProduct.image}
    alt={singleProduct.name}
  />

  <div>
    <h1>{singleProduct.name}</h1>
    <p>{singleProduct.memory}</p>
    <h2>Price: ₹ {singleProduct.price}</h2>

    <p>Performance: {singleProduct.performance}</p>
    <p>Camera: {singleProduct.camera}</p>
    <p>Battery: {singleProduct.battery}</p>
    <p>Display: {singleProduct.display}</p>
    <p>Rating: {singleProduct.rating}</p>

    <button className="buy-btn">Buy Now</button>
  </div>
</div>

  );
};


export default ProductDetails;
