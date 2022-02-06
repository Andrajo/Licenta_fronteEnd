import React, {useState} from "react";
import styles from "../Register/RegisterPage.module.css";
import {Link} from "react-router-dom";
import {Select} from "@material-ui/core";
import axios from "axios";

export default function RegisterPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirm] = useState("");
    const [country, setCountry] = useState("");
    const [age, setAge] = useState(0);
    const [firstname, setFirstname] = useState("");
    const level = 0;

    const data = {
        username: username,
        password: password,
        name: firstname,
        age: age,
        country: country,
        level: level
    };

    const postNewUse = () => {
        let newuser = axios.post("http://localhost:8080/users", data)
            .then(res => alert("Account created successfully"))
            .catch(err => console.log(err));
        return newuser
    }

    return (
        <div className={styles.AccountButton}>
            <span className={styles.usernameText}>
                Username:
            </span>
            <input className={styles.login} placeholder={"Please enter your username"} onChange={ (event) => setUsername(event.target.value) }/>
            <span className={styles.passwordText}>
                Password:
            </span>
            <input className={styles.register} placeholder={"Please enter your password"}  type="password" onChange={ (event) => setPassword(event.target.value) }/>
            <span className={styles.confirmPassText}>
            Confirm Password:
            </span>
            <input className={styles.confirmPassword} placeholder={"Please reenter your password"} type="password" onChange={ (event) => setConfirm(event.target.value) }/>
            <span className={styles.firstNameText}>
            Name:
            </span>
            <input className={styles.firstname} placeholder={"Please enter your firstname"} onChange={ (event) => setFirstname(event.target.value) }/>
            <span className={styles.countryText}>
                Country:
            </span>
            <input className={styles.country} placeholder={"Insert your Country"} onChange={ (event) => setCountry(event.target.value) }/>
            <span className={styles.ageText}>
                Age:
            </span>
            <input className={styles.ageSelect}  placeholder={"Insert your Age"} onChange={ (event) => setAge(parseInt(event.target.value))}/>
            <a href={"/"} className={styles.loginbutton} onClick={postNewUse}>
                Save account
            </a>
        </div>
    );
}
