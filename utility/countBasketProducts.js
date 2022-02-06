export default function countBasketProducts(basket){

    let counter = 0;
    console.log(basket);
    for(let prod of basket){
        counter += prod.quantity;
        console.log(prod);
    }
    return counter;
}