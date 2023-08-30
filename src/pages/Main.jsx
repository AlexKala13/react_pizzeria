import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <header class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <h1 class="header_title">The best pizzas around the web</h1>
                            <p class="header_text">Try our pizza now!</p>
                            <Link to="/pizzas"><button class="order_button">Order Pizza</button></Link>
                        </div>
                    </div>
                </div>
            </header>
            <section class="about">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <h2 class="about_title">About us</h2>
                        </div>
                    </div>
                    <div class="row justify-content-around">
                        <div class="col-xl-3">
                            <img src={require('../img/icons/pizzaicon.png')} alt="pizza" />
                            <h3 class="card_title">Best Taste</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ex porro adipisci molestiae eveniet</p>
                        </div>
                        <div class="col-xl-3">
                            <img src={require('../img/icons/cheficon.png')} alt="chef" />
                            <h3 class="card_title">Certified Chefs</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ex porro adipisci molestiae eveniet</p>
                        </div>
                        <div class="col-xl-3">
                            <img src={require('../img/icons/vespaicon.png')} alt="vespa" />
                            <h3 class="card_title">Fast Delivery</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ex porro adipisci molestiae eveniet</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cuisine">
                <div class="container">
                    <div class="row cuisine_header">
                        <div class="col-xl-12 cuisine_title">
                            <h2><i>Our Cuisine</i></h2>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="row cuisine_menu">
                        <div class="col-md-3">
                            <p class="menu_product">example</p>
                            <p class="menu_product">example</p>
                            <p class="menu_product">example</p>
                        </div>
                        <div class="col-md-3">
                            <p class="menu_product">example</p>
                            <p class="menu_product">example</p>
                            <p class="menu_product">example</p>
                        </div>
                        <div class="col-md-3">
                            <p class="menu_product">example</p>
                            <p class="menu_product">example</p>
                            <p class="menu_product">example</p>
                        </div>
                        <div class="col-md-3">
                            <p class="menu_product">example</p>
                            <p class="menu_product">example</p>
                            <p class="menu_product">example</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;