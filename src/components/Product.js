const Product = (props) => {
  const { name, image, memory, price, rating } = props.productObj;
  return (
    <div className="product">
      {rating > 4.5 && <div className="flex justify-start">
        <span className="bg-yellow-500 text-white rounded-md pl-1.5 pr-1 pb-0.5 m-0.5 text-xs font-semibold">
          Trending 🔥
        </span>
      </div>}

      <img className="product-img" src={image}></img>
      <h1 className="name">{name}</h1>
      <h2 className="ram">{memory}</h2>
      <h2 className="price">Price: ₹ {price}</h2>
      <button className="buy">Buy now</button>
    </div>
  );
};
export default Product;
