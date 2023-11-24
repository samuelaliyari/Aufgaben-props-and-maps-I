import Button from "./Button";
import Image from "./Image";


const ProductCard = (props) => {

    return ( 
        <div>
            <Image
                src = {props.src}
            />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <Button />
        </div>
    );    
}

export default ProductCard;