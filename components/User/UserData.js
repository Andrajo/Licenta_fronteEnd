import React from "react";
import style from "./UserData.module.css";

export default function UserData(props){

    const {user} = props;

    return(
        <>
            <div className={style.container}>
                <b className={style.personal}>Personal details:</b>
                <div className={style.firstname}>
                    <b>Name:</b>
                    <span> {user.name}</span>
                </div>
                <div className={style.level}>
                    <b>Level:</b>
                    <span> {user.level}</span>
                </div>
                <div  className={style.username}>
                    <b>Username:</b>
                    <span> {user.username}</span>
                </div>
                <div className={style.age}>
                    <b>Age:</b>
                    <span> {user.age}</span>
                </div>
                <div className={style.country}>
                    <b>Country:</b>
                    <span> {user.country}</span>
                </div>
            </div>
        </>

    );
}