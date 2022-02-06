import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopSection from "../components/TopSection/TopSection";
import AccountPage from "../components/AccountPage/AccountPage";
import CustomBreadcrumbs from "../components/breadcrumb/Breadcrumb";
import countBasketProducts from "../utility/countBasketProducts";

export async function accountLogin() {
    const environmentVariables = {
        BACKEND_API: process.env.BACKEND_API,
    };

    return {
        props: {
            environmentVariables,
        },
    };
}

export default function Home({ environmentVariables }) {
    const [basket, setBasket] = useState([]);
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
                <title>Game Store</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                ></meta>
            </Head>

            <TopSection img="group1327.svg" countBasketProducts = {countBasketProducts} basket = {basket}></TopSection>

            <CustomBreadcrumbs />

            <AccountPage />
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}
