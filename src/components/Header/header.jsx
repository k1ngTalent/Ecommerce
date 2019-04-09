import React from 'react';

function Header() {
    return (
        <header class="section-header">
            <div className="container">
                <nav class="navigation">
                    <h3 className="navigation__logo">
                        shopmate
                      </h3>
                    <ul className="navigation__menu">
                        <li class="navigation__menu-item"><a href="#">Regional</a>
                            {/* <ul className="navigation__sub-menu">
                                <li className="navigation__menu-item navigation__menu-item--sub"><a href="#">Italalian
                                </a></li>
                                <li className="navigation__menu-item navigation__menu-item--sub"><a href="#">Chinese
                                </a></li>
                                <li className="navigation__sub-menu-item navigation__menu-item--sub"><a href="#">English
                                </a></li>
                                <li className="navigation__sub-menu-item navigation__menu-item--sub"><a href="#">American
                                </a></li>
                            </ul> */}
                        </li>
                        <li class="navigation__menu-item"><a href="#">Nature</a></li>
                        <li class="navigation__menu-item"><a href="#">Seasonal</a></li>
                    </ul>
                    <div className="navigation__search">
                        <label for="search-box"><i className="fas fa-search navigation__search-icon--search"></i></label>
                        <input type="text" placeholder="search anything" id="search-box" className="form-input form-input--search" />
                        <i className="fas fa-times navigation__search-icon--times"></i>
                    </div>

                    <div className="navigation__bag">
                        <i className="fas fa-shopping-bag navigation__bag-icon"></i>
                        <span className="badge badge--red">6</span>
                    </div>

                </nav>

            </div>
        </header>
    )
}

export default Header;