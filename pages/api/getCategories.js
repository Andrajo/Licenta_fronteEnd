export default async function getCategories() {
    const getData = async () => {
        const res = await fetch('http://localhost:8080/categories');
        const data = await res.json();
        return data;
    };

    let categories;
    try {
        categories = await getData();
    } catch (error) {
        console.error(error);
    }
    categories = categories?.map(item => (
        {
            id: item.id,
            name: item.name,
            picture: item.categoryPhotoBig,
            pictureMedium: item.categoryPhotoMedium,
        }
    ))
    return categories;
}