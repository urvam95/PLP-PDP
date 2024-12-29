import { useEffect,useState} from "react";
import { useParams } from "react-router-dom"
import { fetchProducts } from "../api/fetchProducts";
import "../styles/ProductDetail.css"

function ProductDetailPage() {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProduct() {
            const data = await fetchProducts();
            console.log(data)
            const productss = data.products 
            const foundProducts = productss?.find((index) =>
                index.id === id
                
            )
            console.log(foundProducts)
            setProduct(foundProducts);
            setLoading(false);
            
        }
        loadProduct();
    }, [id])
    if (loading) return <p>Loading product...</p>;
    if (!product) return <p>Product not found!</p>
    
    return (
        <div className="product-detail">
            <img src={product.thumbnail} alt={product.name} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default ProductDetailPage
