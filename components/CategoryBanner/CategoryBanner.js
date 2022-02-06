import React from "react";
import banner from '../CategoryBanner/CategoryBanner.module.css';

export default function CategoryBanner(props){
    return(
        <div className={banner.categoryBanner} style={{backgroundImage: "url(\"" + props.img + "\")"}}>
            <div className={banner.text}>{props.text}</div>
        </div>

    );
}

