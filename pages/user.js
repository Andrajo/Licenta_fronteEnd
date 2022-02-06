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
import {getUser} from "./api/getUser";
import UserData from "../components/User/UserData";

export default function User() {

    const [isRetrievingUsers, setRetrievingUsers] = useState(true);

    const [basket, setBasket] = useState([]);
    const [user,setUser] = useState({values: []})

    const [userId, setUserId] = useState();
    const [userFront, setUserFront] = useState([]);
    const [desktop, setDesktop] = useState(true);
    const [tablet, setTablet] = useState(true);

    if (process.browser) {
        window.matchMedia("(min-width: 769px)").addListener(e => setDesktop(e.matches));
    }

    async function fetchData(userId) {
        try {

            const user = await getUser(1);

            setRetrievingUsers(false);
            setUser(user);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData(userId);
    }, [userId]);


    useEffect(() => {
        const otherBasket = window.localStorage.getItem("basket");
        if(otherBasket){
            setBasket(JSON.parse(otherBasket));
        }
        else{
            setBasket([]);
        }
    }, []);

    return (
        <div className={styles.container}>

            <Head>
                <title>Game store-Donuts</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
            </Head>

            <TopSection countBasketProducts = {countBasketProducts} basket = {basket} img="group1327.svg"> </TopSection>

            <CustomBreadcrumbs />

            <main className={styles.main}>
                <UserData user={user}/>
            </main>

            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}
