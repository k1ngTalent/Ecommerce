import React from 'react';
import image from "../../assets/images/wreath.gif";
import Suggestion from './suggestion';
function Product() {

    return (
        <div className="container">
            <div class="section-product">
                <div class="section-product section-product--left">
                    <div className="section-product__image">
                        <img src={image} alt="Product Image" className="section-product__image--img" />
                    </div>
                </div>
                <div class="section-product section-product--right mb-small">
                    <div class="section-product__desc">
                        <h2 className="section-product__header mb-small">
                            super oversized t-shirt with raw sleeves in brown
                   </h2>
                    </div>
                    <div className="section-product__price mb-small">
                        &#163;13.99
                </div>

                    <span className="section-product__header section-product__header--body mb-small">Color</span>
                    <div class="section-product__color mb-small">
                        <span className="color-group">
                            <input type="radio" id="radio-blue" name="color" class="color color--blue" />
                            <label for="radio-blue" class="color color--blue"></label>
                        </span>
                        <span className="color-group">
                            <input type="radio" id="radio-teal" name="color" class="color color--teal" />
                            <label for="radio-teal" class="color color--teal"></label>
                        </span>
                        <span className="color-group">
                            <input type="radio" id="radio-primary" name="color" class="color color--primary" />
                            <label for="radio-primary" class="color color--primary"></label>
                        </span>
                        <span className="color-group">
                            <input type="radio" id="radio-orange" name="color" class="color color--orange" />
                            <label for="radio-orange" class="color color--orange"></label>
                        </span>
                        <span className="color-group">
                            <input type="radio" id="radio-yellow" name="color" class="color color--yellow" />
                            <label for="radio-yellow" class="color color--yellow"></label>
                        </span>
                        <span className="color-group">
                            <input type="radio" id="radio-green" name="color" class="color color--green" />
                            <label for="radio-green" class="color color--green"></label>
                        </span>
                        <span className="color-group">
                            <input type="radio" id="radio-purple" name="color" class="color color--purple" />
                            <label for="radio-purple" class="color color--purple"></label>
                        </span>
                    </div>
                    <span className="section-product__header section-product__header--body mb-small">Size</span>
                    <div class="section-product__size mb-small">
                        <div class="size-group">
                            <input type="radio" id="radio-size" name="size" />
                            <label for="radio-size" class="size">XS</label></div>
                        <div class="size-group">
                            <input type="radio" id="radio-x" name="size" />
                            <label for="radio-x" class="size">S</label>
                        </div><div class="size-group">
                            <input type="radio" id="radio-y" name="size" />
                            <label for="radio-y" class="size">L</label>
                        </div><div class="size-group">
                            <input type="radio" id="radio-z" name="size" />
                            <label for="radio-z" class="size">M</label>
                        </div><div class="size-group">
                            <input type="radio" id="radio-t" name="size" />
                            <label for="radio-t" class="size">XXL</label>
                        </div>
                    </div>
                    <span className="section-product__header section-product__header--body mb-small">Quantity</span>
                    <div className="section-product__quantity mb-medium">

                        <button className="btn btn--round">+</button>
                        &nbsp;
                        <div className="form-input">
                            <input type="text" className="form-input form-input--small" value="1" />
                        </div>
                        &nbsp;
                        <button className="btn btn--round">-</button>
                    </div>
                    <div className="section-product__action">
                        <button className="btn btn--lg btn--primary">Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="section-suggestion">
                <h3 className="section-suggestion__header">You may also like</h3>
                <Suggestion />
            </div>
        </div>

    )
}
export default Product;