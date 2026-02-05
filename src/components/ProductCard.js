import Product from "./Product"
import productObj from "../utills/constant"
const ProductCard = ({limit}) => {
    return (
        <div className="productCard">
            {
                productObj.filter(product => product.price > limit).map((product, idx) => {
                    return (
                        <Product key={idx} productObj={product} />
                    )
                })
            }
        </div>
    )
}

export default ProductCard