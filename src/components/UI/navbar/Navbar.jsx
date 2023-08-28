import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';

const Navbar = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div>
            <header class="menu-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-2">
                            <Link to="/main"><img src={require('../../../img/logo/logotype.png')} alt="logo" class="logo" /></Link>
                        </div>
                        <div class="col-xl-10 ml-auto align-self-center">
                            <nav class="navbar">
                                <ul class="menu d-flex">
                                    <Link to="/main" class="nav_item"><li><a href="#">Home</a></li></Link>
                                    <Link to="/pizzas" class="nav_item"><li><a href="#">Pizzas</a></li></Link>
                                    <Link to="/pizzas/14" class="nav_item"><li><a href="#">Custom</a></li></Link>
                                    <Link class="nav_item"><li><a href="#">About</a></li></Link>
                                    <Link class="nav_item"><li><a href="#">Contact Us</a></li></Link>
                                    <Link class="nav_item"><li><a href="#">Search</a></li></Link>
                                </ul>
                                <ul class="loggingmenu d-flex">
                                    <button onClick={() => setModalVisible(true)} class="nav_item logging"><li><a href="#">Log In</a></li></button>
                                    <Link class="nav_item logging"><li><a href="#">Sign In</a></li></Link>
                                </ul>
                                <Modal visible={modalVisible} setVisible={setModalVisible} />    
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;