import Product from "./Product";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const ProductCard = () => {
  const [listofProduct, setListofProduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [dummydata, setDummydata] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/bikashdalapati-09/react-patel-mernstack/main/products.json",
    );
    const resData = await data.json();

    setTimeout(() => {
      setListofProduct(resData);
      setDummydata(resData)
    }, 100);
  };

  if (listofProduct.length === 0) {
    return <Skeleton />;
  }

  return (
    <div>
      <div className="menu-bar">
        <button
          onClick={() => {
            const result = listofProduct.filter(
              (product) => product.price >= 50000,
            );
            setDummydata(result);
          }}
          className="flagship"
        >
          flagship
        </button>
        <div className="search-bar">
          <input type="text" placeholder="Find Your mobile" onChange={(e)=>{setSearchText(e.target.value)} } value={searchText}></input>
          <button onClick={ () => {
            const searchData = listofProduct.filter((product) =>{
              return product.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setDummydata(searchData);
          }}>Search</button>
        </div>
      </div>
      <div className="productCard">
        {dummydata.map((product, idx) => {
          return <Product key={idx} productObj={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductCard;
