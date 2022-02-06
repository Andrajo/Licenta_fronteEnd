import React, { useState, useEffect } from "react";
import {getProductsFromBasket} from "./api/getBasketProducts";
import Head from "next/head";
import styles from '../styles/Home.module.css'
import CategoryBanner from '../components/CategoryBanner/CategoryBanner'
import TopSection from "../components/TopSection/TopSection";
import Footer from "../components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemSectionBasket from "../components/ItemSection/ItemSectionBasket";
import CustomBreadcrumbs from "../components/breadcrumb/Breadcrumb";
import countBasketProducts from "../utility/countBasketProducts";

export default function Basket() {

    const [isRetrievingProducts, setRetrievingProducts] = useState(true);

    const [basket,setBasket] = useState({values: []})

    const [basketId, setBasketId] = useState();
    const [basketFront, setBasketFront] = useState([]);
    const [desktop, setDesktop] = useState(true);
    const [tablet, setTablet] = useState(true);

    if (process.browser) {
        window.matchMedia("(min-width: 769px)").addListener(e => setDesktop(e.matches));
    }

    async function fetchData(basketId) {
        try {

            const basket = await getProductsFromBasket(3);

            setRetrievingProducts(false);
            setBasket(basket);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData(basketId);
    }, [basketId]);

    useEffect(() => {
        const otherBasket = window.localStorage.getItem("basket");
        if(otherBasket){
            setBasketFront(JSON.parse(otherBasket));
        }
        else{
            setBasketFront([]);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>

            <Head>
                <title>Game store</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
            </Head>

            <TopSection countBasketProducts = {countBasketProducts} basket = {basketFront} img="group1327.svg"> </TopSection>

            <CustomBreadcrumbs />

            <main className={styles.main}>
                <ItemSectionBasket title='your products' itemlist={basket}/>
            </main>

            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}
