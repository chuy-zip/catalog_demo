import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import useProducts from '../hooks/useProducts';
import Product from '../components/Product';

const ProductsView = () => {
  const router = useRouter();
  const { brand } = router.query;
  const { products, loading, error, getProductsByBrand } = useProducts();
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // Filtrar productos de la marca actual directamente en cada render
  const brandProducts = brand ? getProductsByBrand(brand) : [];
  const currentProduct = brandProducts[currentProductIndex] || null;

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <Link href="/productsBrands" passHref>
          <button className="back-button">Volver a marcas</button>
        </Link>
      </div>
    );
  }

  if (!brand || brandProducts.length === 0) {
    return (
      <div className="error-container">
        <h2>Marca no encontrada</h2>
        <p>No se encontraron productos para la marca seleccionada.</p>
        <Link href="/productsBrands" passHref>
          <button className="back-button">Volver a marcas</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{brand} - Catálogo de Productos</title>
        <meta name="description" content={`Productos de la marca ${brand}`} />
      </Head>

      <div className="page-container">
        <header className="page-header">
          <Link href="/productsBrands" passHref>
            <button className="back-button">← Volver a marcas</button>
          </Link>
          <h1>Productos de {brand}</h1>
          <div className="product-counter">
            {currentProductIndex + 1} / {brandProducts.length}
          </div>
        </header>

        <main className="product-view-container">
          <div className="product-display">
            {currentProduct && <Product product={currentProduct} />}
          </div>

          <div className="product-thumbnails">
            <h3>Todos los productos de {brand}</h3>
            <div className="thumbnail-grid">
              {brandProducts.map((product, index) => (
                <button
                  key={product.id}
                  className={`thumbnail-item ${index === currentProductIndex ? 'active' : ''}`}
                  onClick={() => setCurrentProductIndex(index)}
                  aria-label={`Ver ${product.name}`}
                  aria-current={index === currentProductIndex}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="thumbnail-image"
                  />
                  <span className="thumbnail-name">{product.name}</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductsView;
