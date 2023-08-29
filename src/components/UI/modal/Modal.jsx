import React, { useState, useContext } from 'react';
import styles from './Modal.module.css';
import { AuthContext } from '../../context';
import PostService from '../../../API/PostService';
import { APIS } from '../../../API/ApiUrls';

const Modal = ({ visible, setVisible }) => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [wrongUserMessage, setWrongUserMessage] = useState('');

    const [user, setUser] = useState({
        Email: '',
        Password: '',
    });

    const closeModal = () => {
        setVisible(false);
    };

    const login = async (e) => {
        e.preventDefault();

        try {
            const response = await PostService.logInUser(APIS.logInUrl, user);
            const responseToken = response.data.data;

            if (responseToken) {
                localStorage.setItem('token', responseToken);
                setIsAuth(true);
                localStorage.setItem('auth', 'true');
                setVisible(false);
            } else {
                setWrongUserMessage('Wrong user');
            }
        } catch (error) {
            console.log(error);
        }

        setUser({
            Email: '',
            Password: ''
        });
    }

    return (
        <div className={`${styles.pop_up} ${visible ? styles.active : ''}`}>
            <div className={styles.container}>
                <div className={styles.pop_up_body}>
                    <form className={styles.loginForm} onSubmit={login}>
                        <h2>Log In</h2>
                        <input
                            value={user.Email}
                            onChange={(e) => setUser({ ...user, Email: e.target.value })}
                            className={styles.loginInput}
                            type="email"
                            placeholder="Email" />
                        <input
                            value={user.Password}
                            onChange={(e) => setUser({ ...user, Password: e.target.value })}
                            className={styles.loginInput}
                            type="text"
                            placeholder="Password" />
                            <h4 className='wrongUserAlert'>{wrongUserMessage}</h4>
                        <button type="submit" className={styles.loginBtn}>Log In</button>
                    </form>
                    <div className={styles.pop_up_close} onClick={closeModal}>close</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
