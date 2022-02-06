import React, { useState, useEffect } from "react";
import getTopSellingData from "./api/getTopSellingData";
import getAllMerch from "./api/getAllMerch";
import Head from "next/head";
import styles from '../styles/Home.module.css'
import CategoryBanner from '../components/CategoryBanner/CategoryBanner'
import ItemSection from "../components/ItemSection/ItemSection";
import ItemSectionPaginated from "../components/ItemSection/ItemSectionPaginated";
import TopSection from "../components/TopSection/TopSection";
import Footer from "../components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomBreadcrumbs from "../components/breadcrumb/Breadcrumb";
import countBasketProducts from "../utility/countBasketProducts";

export default function Games() {
    const [basket, setBasket] = useState([]);
    const [isRetrievingProducts, setRetrievingProducts] = useState(true);
    const [topGames, setTopGames] = useState([]);
    const [games, setGames] = useState({totalCount: 0, values: []});
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const [desktop, setDesktop] = useState(true);
    const [tablet, setTablet] = useState(true);

    if (process.browser) {
        window.matchMedia("(min-width: 769px)").addListener(e => setDesktop(e.matches));
    }

    const addToBasket = (product) => {
        const productAlreadyIn = basket.find(basketProduct => basketProduct.id === product.id);
        if(productAlreadyIn){
            const newBasket = basket.map(basketProduct => basketProduct.id === product.id ? {...productAlreadyIn, quantityInBasket:productAlreadyIn.quantityInBasket + 1} : basketProduct);
            setBasket(newBasket);
            window.localStorage.setItem("basket", JSON.stringify(newBasket));
        }
        else{
            const newBasket = [...basket, {...product, quantityInBasket: 1}];
            window.localStorage.setItem("basket", JSON.stringify(newBasket));
            setBasket(newBasket);
        }
    }

    useEffect(() => {
        const otherBasket = window.localStorage.getItem("basket");
        if(otherBasket){
            setBasket(JSON.parse(otherBasket));
        }
        else{
            setBasket([]);
        }
    }, []);

    useEffect(() => {
        fetchData(pageIndex, pageSize);
    }, [pageIndex, pageSize]);

    useEffect(() => {
        if (desktop) {
            setPageSize(12);
        }
        else {
            setPageSize(8);
        }
    }, [desktop])

    async function fetchData(pageIndex, pageSize) {
        try {
            const topGames = await getTopSellingData("OBJECT");
            const games = await getAllMerch(pageIndex, pageSize);
            setRetrievingProducts(false);
            setTopGames(topGames);
            setGames(games);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.container}>

            <Head>
                <title>Games</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
            </Head>

            <TopSection  img="group1327.svg" countBasketProducts = {countBasketProducts} basket = {basket}>
            </TopSection>

            <CustomBreadcrumbs />

            <main className={styles.main}>
                <ItemSection addToBasket = {addToBasket} title='top selling Merch' url="#" itemlist={ topGames }/>
                <ItemSectionPaginated addToBasket = {addToBasket} title='all merch' itemlist={games} pageIndex={pageIndex} setPageIndex={setPageIndex}/>
            </main>

            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}
