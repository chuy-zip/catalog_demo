import Link from "next/link";
import style from "./BrandButton.module.css"

const BrandButton = ({ brand }) => {
    return (
        <Link href={`/productsView?brand=${encodeURIComponent(brand)}`} passHref>
            <div className={style.brandButton} role="button" tabIndex={0}>
                <h3>{brand}</h3>

            </div>

        </Link>
    )
}

export default BrandButton