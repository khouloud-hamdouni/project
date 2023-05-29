import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";
import { fetchDataFromExpress } from "../../utils/express";

const Home = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchDataFromExpress("products/all").then((res) => {
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromExpress("categories/all").then((res) => {
            setCategories(res);
        });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
