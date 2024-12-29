import { useEffect, useState } from "react"
import { fetchProducts } from "../api/fetchProducts"
import ProductList from "../components/ProductList";
function ProductListPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadproducts() {
            const data = await fetchProducts();
            setProducts(data);
            setLoading(false);
            
        }
        loadproducts();
    }, []);

    if (loading) return <p> Loading Products</p>
    return (
        <div>
            <h1>
                Our Products
            </h1>
            <ProductList products={products}/>
            
        </div>
    )
}

export default ProductListPage
