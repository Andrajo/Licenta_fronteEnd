// TODO BACKEND: totalPages must be returned by an api endpoint
// there is no endpoint for totalPages
// there is no endpoint for games for special needs

import React, { Component, useState, useEffect } from 'react';
import Link from 'next/link';
import axios from "axios";

export default async function getGames(pageIndex, pageSize) {
    let games;


    const getData = async () => {
        const res = await fetch('http://localhost:8080/products');
        const data = await res.json();

        const dataFiltered = data?.filter(el => el.productType.includes("OBJECT")) ?? [];
        console.log(dataFiltered);

        return {totalPages: Math.ceil(dataFiltered.length/pageSize), values: dataFiltered.slice(pageIndex*pageSize, (pageIndex+1)*pageSize)};
    };

    try {
        games = await getData();
    }
    catch (error) {
        console.error(error);
    }

    games.values = games.values.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        sale: item.sale,
        genres: item.genres,
        pictureBig:item.photoUrlsBig[0],
        picture: item.photoUrlsMedium[0],
        pictureSmall: item.photoUrlsSmall[0]
    }))

    return games;
}
