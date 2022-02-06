import React,{useEffect,useState} from "react";
import topstyles from './ItemSectionBasket.module.css';

const Button = ({ increment, onClickFunction, sign, updateTotalPrice, productPrice, countItem, maxQuantity}) => {
    const handleClick = () => {
        if((sign==='-' && countItem===0) || (sign==='+' && countItem===maxQuantity))
        {
            increment=0;
        }
        onClickFunction(increment)
        updateTotalPrice(increment*productPrice)
    }
    return <button  className={topstyles.countbutton} onClick={handleClick}>{sign}</button>
}

export default function Item(props){
    const { item, type, updateTotalPriceHandler} = props;
    const [count, setCount] = useState(item.quantity)

    useEffect(()=>{
        updateTotalPriceHandler(item.quantity*item.price);
    },[])

    const incrementCount = increment => {
        setCount(count + increment)
    }
    return(
        <div className={type}>
            <div className={topstyles.imagecontainer}>
                <img src={item.picture}
                     alt={"Product picture"}
                     width="314"
                     height="181"
                />
            </div>
            <div  className={topstyles.smallpicture}>
                <img src={item.pictureSmall}
                     alt={"Product picture"}
                     width="150"
                     height="100"
                />
            </div>
            <span className={topstyles.toptitle}>{item.name}</span>
            <div className={topstyles.topprice}>Product price: {item.price + "$"}</div>
            <div className={topstyles.productbuttons}>
                <Button increment={-1} onClickFunction={incrementCount} updateTotalPrice={updateTotalPriceHandler} productPrice={item.price} sign={'-'} countItem={count} maxQuantity={item.maxLimit}/>
                <span className={topstyles.topquantity}>{count}</span>
                <Button increment={1} onClickFunction={incrementCount} updateTotalPrice={updateTotalPriceHandler} productPrice={item.price} sign={'+'} countItem={count} maxQuantity={item.maxLimit}/>
                <button className={topstyles.deletebutton}><b>Delete</b></button>
            </div>
            <div className={topstyles.fullprice}>
                <span><b>Total price: {count*item.price}$</b></span>
            </div>
        </div>
    );
}