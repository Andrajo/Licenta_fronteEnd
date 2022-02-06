import convertDataTopSelling from "./convertDataTopSelling";

export default async function getSimilarProducts(productType){
    const res = await fetch('https://icecreamshop-rkbemzbp2q-ew.a.run.app/products');
    const data= await res.json();
    const filteredData = (data?.filter(product => product.type.includes(productType)));
    const randomFilteredData = [];
    while(randomFilteredData.length < 4 && filteredData.length > 0){
        const randomIndex = getRandomInt(filteredData.length);
        randomFilteredData.push(filteredData[randomIndex]);
        filteredData.splice(randomIndex,1);
    }
    return convertDataTopSelling(randomFilteredData);

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
