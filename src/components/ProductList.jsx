import '../styles/ProductList.css';
import ProductCard from './ProductCard'


function ProductList({ products }) {
    return (
        <div className="product-list">
            {
                <ProductCard key={products.id} product={products}/>
            }
            
        </div>
    )
}

export default ProductList
