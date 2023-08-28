import React from 'react';
import './Modal.css';

const Modal = ({visible, setVisible}) => {

    const closeModal = () => {
        setVisible(false);
    };

    return (
        <div className={`pop_up ${visible ? 'active' : ''}`}>
            <div className="container">
                <div className="pop_up_body">
                    <form className="loginForm">
                        <h2>Log In</h2>
                        <input className="loginInput" type="email" placeholder="Email" />
                        <input className="loginInput" type="text" placeholder="Password" />
                        <button className="loginBtn">Search</button>
                    </form>
                    <div className="pop_up_close" onClick={closeModal}>close</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;