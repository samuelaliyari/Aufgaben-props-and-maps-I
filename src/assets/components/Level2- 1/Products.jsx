import products from './products.json'
import ProductCard from './ProductCard'
import { v4 as uuidv4 } from 'uuid';
import './products.scss'
const Products = () => {
    return ( 
        <section>
            {products.map((product) => <ProductCard
                key = {uuidv4()}
                src = {product.url}
                price = {product.price}
                title = {product.title}
            />)}
        </section>
    );
}

export default Products;