import React from 'react';
import { Link } from 'react-router-dom';
import LogNavMenu from '../loggingMenu/LogNavMenu';

const Navbar = () => {

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
                                <LogNavMenu/>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;