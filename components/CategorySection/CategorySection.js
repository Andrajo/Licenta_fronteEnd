import React from "react";
import styles from '../../styles/Home.module.css';

export default function CategorySection(props){
    const {item} = props;
    return(
        <div className={styles.subsection}>
            {item && <div className={styles.image} style={{backgroundImage: "url(\"" + item.picture + "\")"}}>
                <div className={styles.categorydetails}>
                    <span className={styles.title}>{item.name}</span>
                    <a href={"/"+item.name.toLowerCase()}>
                        <div className={styles.button}>
                            Explore Options
                        </div>
                    </a>
                </div>
            </div>}
        </div>
    );
}