import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useProducts from '../hooks/useProducts';
import BrandButton from '../components/BrandButton';
import styles from './productsBrands.module.css'

const ProductsBrands = () => {
    const { getBrands, loading, error } = useProducts([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        if (!loading) {
            setBrands(getBrands());
        }
    }, [loading, getBrands])

    if (loading) {
        return (
            <div className='loading-container'>
                <div className='loading-spinner'></div>
                <p>Cargando marcas...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="error-container">
                <h2>Error</h2>
                <p>{error}</p>
                <Link href="/" passHref>
                    <button className="back-button">Volver al inicio</button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Marcas - Catálogo de productos</title>
                <meta name="description" content="Selecciona una marca para ver sus productos" />
            </Head>

            <div className='page-container'>
                <header className="page-header">
                    <Link href="/" passHref>
                        <button className="back-button">← Volver</button>
                    </Link>
                    <h1>Nuestras Marcas</h1>
                    <div></div> {/* Elemento vacío para mantener la alineación */}
                </header>

                <main className={styles.brandsContainer}>
                    {brands.length > 0 ? (
                        brands.map((brand, index) => (
                            <BrandButton key={index} brand={brand} />
                        ))
                    ) : (
                        <div className="empty-state">
                            <p>No hay marcas disponibles</p>
                            <Link href="/" passHref>
                                <button className="cta-button">Volver al inicio</button>
                            </Link>
                        </div>
                    )}
                </main>

            </div>


        </>
    )
}

export default ProductsBrands