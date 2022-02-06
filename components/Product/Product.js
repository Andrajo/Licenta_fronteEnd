import BasketButton from "../basketPage/BasketButton";
import styles from "./Product.module.css";
import Image from "next/image";
function Product(props) {
    const { product } = props;
    return (
        <div
            className={styles.itembox}
            style={{flexDirection: "column" }}
        >
            <div className={styles.items}>
                <Image
                    className={styles.image}
                    width="314"
                    height="181"
                    src={product.picture}
                    alt="item"
                />
                <p className={styles.titleOfItems}>{product.name}</p>
                <p className={styles.descriptionStyle}>{product.description}</p>
                <p className={styles.price}>{product.price}</p>
                <BasketButton />
            </div>
        </div>
    );
}
export default Product;
