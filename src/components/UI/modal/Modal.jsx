import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ visible, setVisible }) => {

    const closeModal = () => {
        setVisible(false);
    };

    return (
        <div className={`${styles.pop_up} ${visible ? styles.active : ''}`}>
            <div className={styles.container}>
                <div className={styles.pop_up_body}>
                    <form className={styles.loginForm}>
                        <h2>Log In</h2>
                        <input className={styles.loginInput} type="email" placeholder="Email" />
                        <input className={styles.loginInput} type="text" placeholder="Password" />
                        <button className={styles.loginBtn}>Log In</button>
                    </form>
                    <div className={styles.pop_up_close} onClick={closeModal}>close</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
