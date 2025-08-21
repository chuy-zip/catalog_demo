import Image from "next/image";

const Product = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <Image 
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    objectFit="cover"
                />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default Product