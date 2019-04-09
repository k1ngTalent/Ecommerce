
import React, { Fragment } from 'react';
function Filter() {
    return (
        <Fragment>
            <div class="filter">
                <div class="filter__header">
                    <h2 class="heading-tertiary mb-small">Filter 486 items</h2>
                    <div class="filter__header--filter ">

                    </div>
                </div>
                <div class="filter__body">
                    <span className="filter__body-header">Color</span>
                    <div class="filter__body--color">
                        <span className="color-group">
                            <input type="checkbox" id="checkbox-blue" class="color color--blue" />
                            <label for="checkbox-blue" class="color color--blue"></label>
                        </span>
                        <span className="color-group">
                            <input type="checkbox" id="checkbox-teal" class="color color--teal" />
                            <label for="checkbox-teal" class="color color--teal"></label>
                        </span>
                        <span className="color-group">
                            <input type="checkbox" id="checkbox-primary" class="color color--primary" />
                            <label for="checkbox-primary" class="color color--primary"></label>
                        </span>
                        <span className="color-group">
                            <input type="checkbox" id="checkbox-orange" class="color color--orange" />
                            <label for="checkbox-orange" class="color color--orange"></label>
                        </span>
                        <span className="color-group">
                            <input type="checkbox" id="checkbox-yellow" class="color color--yellow" />
                            <label for="checkbox-yellow" class="color color--yellow"></label>
                        </span>
                        <span className="color-group">
                            <input type="checkbox" id="checkbox-green" class="color color--green" />
                            <label for="checkbox-green" class="color color--green"></label>
                        </span>
                        <span className="color-group">
                            <input type="checkbox" id="checkbox-purple" class="color color--purple" />
                            <label for="checkbox-purple" class="color color--purple"></label>
                        </span>
                    </div>
                    <span className="filter__body-header">Size</span>

                    <div class="filter__body--size">
                        <div class="size-group">
                            <input type="checkbox" id="checkbox-size" />
                            <label for="checkbox-size" class="size">XS</label></div>
                        <div class="size-group">
                            <input type="checkbox" id="checkbox-x" />
                            <label for="checkbox-x" class="size">S</label>
                        </div><div class="size-group">
                            <input type="checkbox" id="checkbox-y" />
                            <label for="checkbox-y" class="size">L</label>
                        </div><div class="size-group">
                            <input type="checkbox" id="checkbox-z" />
                            <label for="checkbox-z" class="size">M</label>
                        </div><div class="size-group">
                            <input type="checkbox" id="checkbox-t" />
                            <label for="checkbox-t" class="size">XXL</label>
                        </div>
                    </div>
                    <span class="filter__body-header">Price</span>
                    <div class="filter__body--price">
                        <input type="text" placeholder="&#163; Min" />

                        <input type="text" placeholder="&#163; Max" />
                    </div>
                    <span className="filter__body-header">Category</span>
                    <div class="filter__body--category">

                        <div class="form-checkbox">
                            <input type="checkbox" id="checkbox1" />
                            <label for="checkbox1">French</label>
                        </div>
                        <div class="form-checkbox">
                            <input type="checkbox" id="checkbox2" />
                            <label for="checkbox2" >Italian</label>
                        </div>
                        <div class="form-checkbox">
                            <input type="checkbox" id="checkbox3" />
                            <label for="checkbox3">Animal</label>
                        </div>
                        <div class="form-checkbox">
                            <input type="checkbox" id="checkbox4" />
                            <label for="checkbox4">Flower</label>
                        </div>
                        <div class="form-checkbox">
                            <input type="checkbox" id="checkbox5" />
                            <label for="checkbox5" >English</label>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default Filter;