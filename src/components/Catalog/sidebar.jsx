import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className="catalog__sidebar">
            <aside>
                <div className="catalog__sidebar-title mb-small">
                    Categories
                </div >
                <ul className="catalog__sidebar-menu">

                    <li className="catalog__sidebar-menu--item active">All</li>
                    <li className="catalog__sidebar-menu--item"><Link to="/category">French</Link></li>
                    <li className="catalog__sidebar-menu--item">Italian</li>
                    <li className="catalog__sidebar-menu--item">Irish</li>
                    <li className="catalog__sidebar-menu--item">Christmas</li>
                </ul>
            </aside>
        </div>
    )
}
export default SideBar;