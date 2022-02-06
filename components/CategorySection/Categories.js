import CategorySection from "./CategorySection";
import styles from '../../styles/Home.module.css';

export default function Categories(props){
    const {itemlist} = props;
    return(
        <div className={styles.section}>
            {itemlist?.map(item =>
                <CategorySection key={item.id} item={item}/>
            )}
        </div>

    );
}