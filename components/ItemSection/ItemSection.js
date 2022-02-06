import React from "react";
import topstyles from './ItemSection.module.css';
import styles from '../../styles/Home.module.css';
import Item from "./Item";
import itempagination from "./ItemPagination.module.css";

export default function ItemSection(props){
    const {itemlist, title, url, showMore, addToBasket} = props;


    return(
        <div>
            <div className={styles.section}>
                <div className={topstyles.topdetails}>
                    <div className={topstyles.title}>{title}</div>
                    {
                        showMore && itemlist?.length >= 4 &&
                        <div className={topstyles.explore}>
                            <span className={topstyles.bigscreen}>explore all</span>
                            <span className={topstyles.smallscreen}>all</span>
                            <a href={url}><img src="/Group 1340.svg"></img></a>
                        </div>
                    }
                </div>
            </div>

            <div className={itempagination.section}>
                {itemlist?.slice(0,4).map(item =>
                    <Item addToBasket = {addToBasket} type={itempagination.topsubsection} key={item.id} item={item}/>
                )}
            </div>
        </div>
    );
}
