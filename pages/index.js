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
            src="/logo-megalabs-green.png"
            alt="Logo"
            width={360}
            height={76}
            priority
          />
          <h1 className='gray-subs'>Línea dermatológica</h1>

          <Link href="/productsBrands" passHref>
            <button className="cta-button">Comenzar</button>
          </Link>
        </div>
      </div>
    </>
  );
}