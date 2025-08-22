import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Catálogo de Productos</title>
        <meta name="description" content="Catálogo de productos por marcas" />
      </Head>

      <div className="home-container">
        <div className="hero-section">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={38}
            priority
          />
          <h1>Bienvenido al Catálogo</h1>
          <p>Descubre nuestros productos por marcas</p>
          <Link href="/productsBrands" passHref>
            <button className="cta-button">Comenzar</button>
          </Link>
        </div>
      </div>
    </>
  );
}