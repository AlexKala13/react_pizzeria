import React, { useState, useEffect } from 'react';
import PostService from '../API/PostService';
import { APIS } from '../API/ApiUrls';
import { Link } from 'react-router-dom';

function PizzaBlocks({ activeFilter, searchInput }) {
    const [pizzas, setPizzas] = useState([]);

    async function fetchProducts() {
        try {
            const response = await PostService.getAllData(APIS.getAllProducts);
            setPizzas(response.data.data);
        } catch (error) {
            console.error('Product fetch error', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredPizzas = activeFilter === 'all' ? pizzas : pizzas.filter(pizza => pizza.filter === activeFilter);

    const searchFilteredPizzas = filteredPizzas.filter(pizza =>
        pizza.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <section className="products">
            <div className="container">
                <div className="row filter justify-content-center">
                    {searchFilteredPizzas.map(pizza => (
                        <div key={pizza.id} filter={pizza.filter} className="col-xl-4 col-md-3">
                            <Link to={`/pizzas/${pizza.id}`} className="linkCard">
                                <div className="product-card">
                                    <img id="product-cart" src={require('../img/icons/carticon.png')} alt="addToCart" />
                                    <img id="product-img" src={require(`../img/pizzas/${pizza.image}`)} alt="PizzaImg" />
                                    <h3 id="product-name">{pizza.name}</h3>
                                    <h5 id="product-price">{pizza.price}$</h5>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PizzaBlocks;
