export async function getUser(userId) {
    const getData = async () => {
        const res = await fetch('http://localhost:8080/users/' + userId);
        const data = await res.json();
        return data;
    };

    let user;
    try {
        user = await getData();
    } catch (error) {
        console.error(error);
    }
    user = {
        id: user.id,
        name: user.name,
        password: user.password,
        age: user.age,
        username: user.username,
        country: user.country,
        level: user.level
    }
    return user;
}