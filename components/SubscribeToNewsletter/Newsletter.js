import styles from "./Newsletter.module.css";
import SubscribeToNewsletterButton from "../SubscribeToNewsletterButton/SubscribeToNewsletterButton";
import React from "react";
import { useState, useCallback } from "react";
import debounce from "lodash.debounce";

export default function Newsletter(props) {
    const { identifier } = props;
    const [email, setEmail] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

    const afterClickHandler = () => {
        const element = document.getElementById(identifier + "-input");
        element.value = "";
        setIsButtonDisabled(true);
    };

    const changeHandler = (event) => {
        if (regex.test(event.target.value)) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
        setEmail(event.target.value);
    };

    const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);
    return (
        <div className={styles.newsletter}>
            <div>
                <input
                    id={identifier + "-input"}
                    className={styles.mailfield}
                    type="text"
                    placeholder="Enter your Email"
                    onChange={debouncedChangeHandler}
                />
            </div>
            <div>
                <SubscribeToNewsletterButton
                    isButtonDisabled={isButtonDisabled}
                    afterClickHandler={afterClickHandler}
                    identifier={identifier}
                />
            </div>
        </div>
    );
}
