// TODO BACKEND: totalPages must be returned by an api endpoint
// there is no endpoint for totalPages
// there is no endpoint for donuts for special needs
export default async function getDonuts(pageIndex, pageSize) {

    const getData = async () => {

        const res = await fetch('https://localhost:8080/products');
        const data = await res.json();
        const dataFiltered = data?.filter(el => el.type.includes("VIRTUAL_GAME")) ?? [];
        return {totalPages: Math.ceil(dataFiltered.length/pageSize), values: dataFiltered.slice(pageIndex*pageSize, (pageIndex+1)*pageSize)};
    };

    let donuts;

    try {
        donuts = await getData();
    }
    catch (error) {
        console.error(error);
    }

    donuts.values = donuts.values.map(item => (
        {
            id: item.id,
            pictureBig:item.photoUrlsBig[0],
            picture: item.photoUrlsMedium[0],
            pictureSmall: item.photoUrlsSmall[0],
            name: item.title,
            description: item.shortDescription,
            price: item.price
        }
    ))
    return donuts;
}
