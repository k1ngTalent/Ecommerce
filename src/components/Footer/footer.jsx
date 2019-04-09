import React from 'react';
function Footer() {
    return (
        <footer className="section-footer">
            <div className="section-footer__menu">
                <ul>
                    <li>Nature</li>
                    <li>Region</li>
                    <li>Seasonal</li>

                </ul>
            </div>
            <div className="section-footer__social ">
                <i className="section-footer__social--item fab fa-instagram"></i>
                <i className="section-footer__social--item fab fa-pinterest"></i>
                <i className="section-footer__social--item fab fa-twitter"></i>
                <i className="section-footer__social--item fab fa-facebook"></i>
            </div>
            <div className="section-footer__company-info mb-medium">
                <p>2016 Shopmate Ltd.</p>
            </div>
        </footer>
    )

}
export default Footer;