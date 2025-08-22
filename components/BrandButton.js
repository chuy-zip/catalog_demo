import Link from "next/link";

const BrandButton = ({ brand }) => {
    return (
        <Link href={`/productsView?brand=${encodeURIComponent(brand)}`} passHref>
            <div className="brand-button" role="button" tabIndex={0}>
                <h3>{brand}</h3>
                <span className="brand-button-arrow">→</span>

            </div>

        </Link>
    )
}

export default BrandButton