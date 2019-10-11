
import React, { Component } from 'react';
import './Header.css';
import ModalLogin from '../Modal/ModalLogin';
export default class Header extends Component {


    render() {
        return (
            <div className="App">
                <div className="topnav">
                    <a className="active" href="#">MYWEBSITE</a>
                    <a href="MEN">MEN</a>
                    <a href="WOMEN">WOMEN</a>
                    <a href="MOBILE">MOBILE COVERS</a>
                    <input type="text" placeholder="Search by Product, Category or Collection "></input>
                    <ModalLogin />
                    <div className="cart"><i className="fa fa-shopping-cart fa_custom fa-2x"></i></div>
                </div>
            </div>
        )
    }
}