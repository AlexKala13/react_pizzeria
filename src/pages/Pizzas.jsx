import React, { useState } from 'react';
import '../styles/Pizzas.css';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';

const Pizzas = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="wrapper">
                            <div id="search-container">
                                <input type="text" id="search-input" placeholder="Search pizza by name..." />
                            </div>
                            <button id="search">Search</button>
                        </div>
                    </div>
                </div>
                <ProductFilter setActiveFilter={setActiveFilter} />
                <ProductList activeFilter={activeFilter} />
            </div>
        </div>
    );
};

export default Pizzas;
