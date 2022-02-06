import React from 'react';
import topstyles from './ItemSection.module.css';
import Image from "next/image";

export default function Item(props){

    const {item, type, addToBasket} = props;

    return(
        <div className={type}>
            <div className={topstyles.imagecontainer}>
                <img src={item.picture}
                     alt={"Product picture"}
                     width="314"
                     height="181"
                />
            </div>
            <div className={topstyles.topcategorydetails}>
                <span className={topstyles.toptitle}>{item.name}</span>
                <div className={topstyles.topdesc}>{item.description}</div>
                <div className={topstyles.topprice}>{"$ " + item.price}</div>
                <div className={topstyles.basketbutton}>
                    <a href={item.url} onClick = {() => {addToBasket(item)}} style={{width:"260px",textAlign:"left",paddingLeft:"10px"}}>Add to basket</a>
                </div>
            </div>
        </div>

    );
}