export async function getProductsFromBasket(basketId) {
    const getData = async () => {
        const res = await fetch('http://localhost:8080/baskets/' + basketId);
        const data = await res.json();

        return {values: data};
    };

    let basket;
    try {
        basket = await getData();
    } catch (error) {
        console.error(error);
    }
    basket.values = basket.values.map(item => (
        {
            id: item.id,
            name: item.product.name,
            quantity: item.quantity,
            price: item.product.price,
            maxLimit: item.product.quantity,
            picture: item.product.photoUrlsMedium[0],
            pictureSmall: item.product.photoUrlsSmall[0]
        }
    ))
    return basket;
}