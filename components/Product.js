import Image from 'next/image';

const Product = ({ product }) => {

    console.log(product)
    if (!product) {
        return (
            <div className="product-card">
                <div className="product-error">
                    <p>Producto no disponible</p>
                </div>
            </div>
        );
    }

    return (
        <div className="product-card">
            <div className="product-image">
                <Image
                    key={product.id}
                    priority={true}
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="product-img"
                />
            </div>
            <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
            </div>
        </div>
    );
};

export default Product;