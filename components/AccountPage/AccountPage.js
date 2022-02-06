import React from "react";
import styles from "./AccountPage.module.css";
import {Link} from "react-router-dom";

export default function AccountPage() {
    return (
        <div className={styles.AccountButton}>
        <span className={styles.usernameText}>
            Username:
        </span>
            <input className={styles.login} placeholder={"Please enter your username"}/>
            <span className={styles.passwordText}>
            Password:
        </span>
            <input className={styles.register} placeholder={"Please enter your password"} type="password" />
            <a href={"/user"} className={styles.loginbutton} onClick={() => alert("You logged in")}>
                Log In
            </a>
            <a href={"/register"} className={styles.registerbutton}>
                Sign Up
            </a>
        </div>
    );
}
