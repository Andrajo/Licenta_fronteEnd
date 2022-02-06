import React, { useState, useEffect } from "react";
import getTopSellingData from "./api/getTopSellingData";
import Head from "next/head";
import styles from '../styles/Home.module.css'
import Categories from '../components/CategorySection/Categories'
import ItemSection from "../components/ItemSection/ItemSection";
import {getProductsFromBasket} from "./api/getBasketProducts";
import Footer from '../components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopSection from "../components/TopSection/TopSection";
import getCategories from "./api/getCategories";
import CustomBreadcrumbs from "../components/breadcrumb/Breadcrumb";
import countBasketProducts from "../utility/countBasketProducts";


export default function Home() {
  const [isRetrievingProducts, setRetrievingProducts] = useState(true);
  const [merchandise, setMerchandise] = useState([]);
  const [topGames, setTopGames] = useState([]);
  const [topMerch, setTopMerch] = useState([]);
  const [categories, setCategories] = useState([]);
  const [basketElements,setBasketElements] = useState([]);
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const productExists = basket.find(p => p.id === product.id);
    if(productExists){
      const newBasket = basket.map(p => p.id === product.id ? {...productExists, quantity:productExists.quantity + 1} : p);
      setBasket(newBasket);
      window.localStorage.setItem("basket", JSON.stringify(newBasket));
    }
    else{
      const newBasket = [...basket, {...product, quantity: 1}];
      window.localStorage.setItem("basket", JSON.stringify(newBasket));
      setBasket(newBasket);
    }
  }

  async function fetchData() {
    try {
      const topGames = await getTopSellingData("VIRTUAL_GAME");
      const topMerch = await getTopSellingData("OBJECT");
      const categories = await getCategories();
      const basketElements = await getProductsFromBasket(3);

      setRetrievingProducts(false);
      setMerchandise(merchandise);
      setTopGames(topGames);
      setTopMerch(topMerch);
      setBasketElements(basketElements);
      setCategories(categories);
    }
    catch (error) {
      console.error(error);
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
        <TopSection countBasketProducts = {countBasketProducts} basket = {basket} img="group1327.svg"> </TopSection>
        <CustomBreadcrumbs />
        <main className={styles.main}>
          <Categories itemlist={categories}/>
          <ItemSection addToBasket = {addToBasket} showMore={true} title='Games' url="/games" itemlist={topGames}/>
          <ItemSection addToBasket = {addToBasket} showMore={true} title='Merch' url="/donuts" itemlist={topMerch}/>
        </main>
        <div className="footer">
          <Footer />
        </div>
      </div>
  )
}
