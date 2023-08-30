import React, { useState, useContext } from 'react';
import Modal from '../modal/Modal';
import { AuthContext } from '../../context';
import { Link } from 'react-router-dom';

const LogNavMenu = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logOut = event => {
        event.preventDefault();
        setIsAuth(false);
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
    }

    return (
        isAuth
            ?
            <div>
                <ul className="loggingmenu d-flex">
                    <Link to="/profile" className="nav_item"><li><a href="#">Profile</a></li></Link>
                    <button onClick={logOut} className="nav_item"><li><a href="#">Log Out</a></li></button>
                </ul>
            </div>
            :
            <div>
                <ul className="loggingmenu d-flex">
                    <button onClick={() => setModalVisible(true)} className="nav_item logging"><li><a href="#">Log In</a></li></button>
                    <Link to="/register" className="nav_item"><li><a href="#">Sign In</a></li></Link>
                </ul>
                <Modal visible={modalVisible} setVisible={setModalVisible} />
            </div>
    );
};

export default LogNavMenu;