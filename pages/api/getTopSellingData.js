import filterDataTopSelling from "./filterDataTopSelling";
import convertDataTopSelling from "./convertDataTopSelling";

export default async function getTopSellingData(type) {
    const getData = async () => {
        const res = await fetch('http://localhost:8080/products');
        const data = await res.json();
        const dataFiltered = filterDataTopSelling(data, type);
        return dataFiltered;
    };

    let returnData;
    try {
        returnData = await getData();
    } catch (error) {
        console.error(error);
    }
    returnData = convertDataTopSelling(returnData);

    return returnData;
}

