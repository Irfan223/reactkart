
import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import ModalLogin from '../Modal/ModalLogin';
function Header() {
    return (
        <div>
            <div className="toggle">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Mobile Covers</a></li>
                    <li><a href="#">Clearance</a></li>
                    <a id="searchbar"><input type="text" placeholder="Search Here" /></a>
                    <a id="login" href="#"><i class="fa fa-sign-in" aria-hidden="true"></i></a>

                </ul>
            </nav>


        </div>
    )
}

export default Header;