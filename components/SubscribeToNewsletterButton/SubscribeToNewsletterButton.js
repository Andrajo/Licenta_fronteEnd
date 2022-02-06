import styles from "./SubscribeToButton.module.css";

export default function SubscribeToNewsletterButton(props) {
    const { isButtonDisabled, afterClickHandler, identifier } = props;
    return (
        <button
            id={identifier + "-button"}
            className={styles.subscribeButton}
            disabled={isButtonDisabled}
            onClick={() => {
                alert(
                    "A confirmation email will be sent to the provided email address"
                );
                afterClickHandler();
            }}
        >
            Subscribe
        </button>
    );
}
