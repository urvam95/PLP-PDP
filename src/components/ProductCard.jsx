import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <Link to={`/product/${product.products}`} className="product-card">
            <div className="product-info">
                {product.products.map((prr, index) => (
                    <div key={index}>
                        <h1>{prr?.title}</h1>
                        <img src={prr.thumbnail} />
                         <p>${prr.price}</p>
                    </div>
                )
                    
                    
                
                )}
               

            </div>
        </Link>

    )
}

export default ProductCard
