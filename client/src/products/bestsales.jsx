import React, { useState, useEffect } from "react";
import axios from "axios";
import'./bes.css'
import $ from "jquery"
import StarRating from "./stars";

const BestSales = () => {
    const [bestSales, setBestSales] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/products/sales")
            .then(response => {
                setBestSales(response.data);
            })
            .catch(error => {
                console.error("Error fetching best-selling products:", error);
            });
    }, []);
    useEffect(() => {
   
        $(".product-card").hover(
            function() {
                $(this).find(".addtocart").fadeIn();
            }, function() {
                $(this).find(".addtocart").fadeOut();
            }
        );
    }, [bestSales]);
    return (
        
        <div>
        <h2>Best Selling Products</h2>
        <div className="product-grid">
            {bestSales.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <StarRating/>
                    <button className="addtocart">Add to Cart</button>
                </div>
            ))}
        </div>
    </div>
   
    );
};

export default BestSales;
