import React, { Fragment } from 'react';
import Product from './product';
import Filter from './filter';

function Catalog() {

    return (
        <div className="container">
            <section class="section-catalog">
                <div className="section-catalog__filter">
                    <Filter />
                </div>
                <div className="section-catalog__product">
                    <Product />
                </div>
            </section>
        </div>





    )

}
export default Catalog;