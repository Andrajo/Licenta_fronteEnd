export default async function convertDataTopSelling(data) {
    data = data.map(item => (
        {
            id: item.id,
            pictureBig: item.photoUrlsBig[0],
            picture: item.photoUrlsMedium[0],
            pictureSmall: item.photoUrlsSmall[0],
            name: item.name,
            description: item.description,
            price: item.price
        }
    ))

    return data;
}