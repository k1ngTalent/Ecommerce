import React from 'react';
import image from "../../assets/images/coat-of-arms-thumbnail.gif";

function Cart() {
    return (
        <div className="container">
            <div className="cart">
                <h3 className="cart__header">4 items in your cart</h3>
                <div className="cart__body">
                    <table>
                        <tr>
                            <th>item</th>
                            <th>size</th>
                            <th>quantity</th>
                            <th>price</th>
                        </tr>
                        <tr>
                            <td className="cart__col cart__col--item">
                                <img src={image} alt="Product Image" />
                                <h2 className="cart__productName">green t-shirt 2016</h2>
                                <p className="cart__productCart">green t-shirt 2016</p>
                                <a className="cart__action">*</a>
                            </td>
                            <td className="cart__col cart__col--size">
                                <span>XL</span>
                            </td>
                            <td className="cart__col cart__col--quantity">
                                <div className="section-product__quantity mb-medium">
                                    <button className="btn btn--round">-</button>
                                    &nbsp;
                        <div className="form-input">
                                        <input type="text" className="form-input form-input--small" value="1" />
                                    </div>
                                    &nbsp;
                        <button className="btn btn--round">+</button>
                                </div></td>
                            <td className="cart__col cart__col--price">
                                &#163;13.99</td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Cart;