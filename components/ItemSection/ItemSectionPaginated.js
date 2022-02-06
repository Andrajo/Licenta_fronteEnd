import React from "react";
import topstyles from './ItemSection.module.css';
import itempagination from './ItemPagination.module.css';
import styles from '../../styles/Home.module.css';
import Item from "./Item";
import ItemPagination from "./ItemPagination";

export default function ItemSectionPaginated(props){
    const {itemlist, title, pageIndex, setPageIndex, addToBasket} = props;


    return(
        <div>
            <div className={styles.section}>
                <div className={topstyles.topdetails}>
                    <div className={topstyles.title}>{title}</div>
                </div>
            </div>

            <div className={itempagination.section}>
                {itemlist?.values?.map(item =>
                    <Item addToBasket = {addToBasket} type={itempagination.topsubsection} key={item.id} item={item}/>
                )}
            </div>

            <ItemPagination totalPages={itemlist?.totalPages} pageIndex={pageIndex} setPageIndex={setPageIndex}/>
        </div>
    );
}