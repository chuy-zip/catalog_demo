import Image from 'next/image';
import styles from './Product.module.css';

const Product = ({ product }) => {
    console.log(product);

    if (!product) {
        return (
            <div className={styles.productCard}>
                <div className={styles.productError}>
                    <p>Producto no disponible</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.productCard}>
            <div className={styles.productImage}>
                <Image
                    key={product.id}
                    priority={true}
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className={styles.productImg}
                />
            </div>
            <div className={styles.productInfo}>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productDescription}>{product.description}</p>
            </div>
        </div>
    );
};

export default Product;
