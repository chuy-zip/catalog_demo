import Link from "next/link";

const BrandButton = ({ brand }) => {
    return (
        <Link href={`/productsView?brand=${encodeURIComponent(brand)}`} passHref>
            <div className="brand-button">
                <h3>{brand}</h3>

            </div>

        </Link>
    )
}

export default BrandButton