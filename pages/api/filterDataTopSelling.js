export default async function filterDataTopSelling(data, type) {
    data =  data?.filter(el => el.productType.includes(type)) ?? [];
    let min = Math.min(...data.map(el => el.quantity));
    const dataFiltered = data.filter(el => el.quantity===min) ?? [];
    console.log(dataFiltered);
    return dataFiltered;
}