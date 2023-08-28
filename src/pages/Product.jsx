import React, { useEffect, useState } from 'react';
import '../styles/Product.css';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { APIS } from '../API/ApiUrls';

const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState({});

    async function fetchProduct() {
        try {
            const response = await PostService.getProductById(APIS.getById, params.id);
            setProduct(response.data.data);
            console.log(response);
            console.log(response.data);
        } catch (error) {
            console.error('Product fetch error', error);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            <section class="product-detailed my-5 pt-3">
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-lg-5 col-md-12 col-12">
                            <img class="img-fluid w-100 pb-1" id="mainImg" src={product.image ? require(`../img/pizzas/${product.image}`) : ''} alt="mainImg" />
                        </div>
                        <div class="col-lg-6 col-md-12 col-12">
                            <h6 id="path-title">Pizzas / {product.name}</h6>
                            <h3 class="py-4">{product.name}</h3>
                            <h2 id="pizza-price">{product.price}$</h2>
                            <select class="my-3">
                                <option>Select Size</option>
                                <option>8"</option>
                                <option>10"</option>
                                <option>12"</option>
                                <option>14"</option>
                            </select>
                            <input type="number" value="1" />
                            <button class="order-btn">Add To Cart</button>
                            <h4 class="mt-5 mb-5 details-title">Product Details</h4>
                            <span id="details-info">{product.description}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;