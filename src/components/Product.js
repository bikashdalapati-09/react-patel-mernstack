const Product = (props) => {
    const {name, image, memory, price} = props.productObj
    return (
        <div className="product">
            <img className="product-img" src={image}></img>
            <h1 className="name">{name}</h1>
            <h2 className="ram">{memory}</h2>
            <h2 className="price">Price: ₹ {price}</h2>
            <button className="buy">Buy now</button>
        </div>
    )
}
export default Product;