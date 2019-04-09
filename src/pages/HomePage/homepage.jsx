import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/header";
import Topbar from "../../components/Header/topbar";
import Product from '../../components/Catalog/product';
import Footer from '../../components/Footer/footer';
import SideBar from '../../components/Catalog/sidebar';
import banner from "../../assets/images/banner1.jpg";
import advert from "../../assets/images/advert1.jpg";
import axios from 'axios';


function HomePage() {

    const [products, setProducts] = useState(null);
    const url = "https://backendapi.turing.com/products";
    const fetchdata = async () => {
        const _products = await axios(url);
        setProducts(_products.data.rows);
        console.log(_products.data.rows);
    }
    useEffect(() => {
        fetchdata();
    }, []);
    if (products == null) {
        return (
            <div>Loading....</div>
        )
    } else {
        return (
            <div>
                <div className="container">
                    <section className="section-banner">
                        <img src={banner} alt="Product Banner" className="section-banner__image" />
                    </section>
                </div>

                <section className="section-products mb-large">
                    <div className="container">
                        <div className="heading-secondary mb-small">
                            All products
                </div>
                        <div className="section-products__catalog">
                            <div className="section-products__catalog--sidebar">
                                <SideBar />
                            </div>
                            <div className="section-products__catalog--catalog">
                                <Product products={products} />
                            </div>


                        </div>

                    </div>
                </section>

            </div>



        )
    }

}

export default HomePage;