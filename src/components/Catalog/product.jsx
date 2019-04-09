import React, { Fragment } from 'react';
import image from "../../assets/images/coat-of-arms-thumbnail.gif";

function Product({ products }) {
    const base = "https://backendapi.turing.com/images/products/"
    return (
        <Fragment>
            {products.map((product) => (
                <div className="product">
                    <div className="product__image mb-small">
                        <img src={base + product.thumbnail} alt="Product Image" className="product__image--img" />
                    </div>
                    <div className="product__name mb-small">
                        {product.name}
                    </div>

                    {product.discounted_price != "0.00" && <div className="product__price">
                        <span className="product__price--original">
                            &#163;{product.price}
                        </span>
                        &nbsp;
                   <span className="product__price--discount">
                            &#163;{product.discounted_price}
                        </span>
                    </div>}

                    {product.discounted_price == "0.00" && <div className="product__price">
                        <span className="product__price--original">
                            &#163;{product.price}
                        </span>

                    </div>}
                </div>
            ))}
        </Fragment>
    )


}
export default Product;