import Product from "../Product/Product";
import styles from "./ItemList.module.css";
export default function ItemList(props) {
    const { title, productList } = props;
    return (
        <div className={styles.itemList}>
            <p className={styles.categoryName}>{title}</p>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {productList.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </div>
    );
}
