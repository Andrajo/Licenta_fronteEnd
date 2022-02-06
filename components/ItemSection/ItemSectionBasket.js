import React from "react";
import topstyles from './ItemSection.module.css';
import styles from '../../styles/Home.module.css';
import Item from "./ItemFromBasket";
import basketitem from './ItemSectionBasket.module.css';

export default function ItemSectionBasket(props){

    const {itemlist, title} = props;

    const { useState } = React
    const [totalPrice, setTotalPrice] = useState(0)

    return(
        <div>
            <div className={styles.section}>
                <div className={topstyles.topdetails}>
                    <div className={topstyles.title}>{title}</div>
                </div>
            </div>

            <div className={basketitem.section}>
                {itemlist?.values?.map(item =>
                    <Item type={basketitem.subsection} key={item.id} item={item} updateTotalPriceHandler={
                        (totalproductprice) => {
                            setTotalPrice((prevstate)=>prevstate+=totalproductprice)
                        }}/>
                )}
            </div>

            <div className={basketitem.paymentbutton}>
                <a href={"/undefined"}>Pay: {totalPrice}$</a>
            </div>
        </div>
    );
}