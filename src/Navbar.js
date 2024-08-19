import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './img/ham-icon.svg';


export default function Navbar(){
    return(
        <div className="navpage">
        <div className="navbar">
            <div id="nav-logo">Healthcare</div>
            <ul className="nav-links-box">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/chat" className="nav-link">ChatBot</Link></li>
            <li><Link to="/foods" className="nav-link">Foods</Link></li>
            <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
            <li className="nav-link ham-icon"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/000000/menu--v6.png" alt="menu--v6"/></li>
            </ul>
        </div>
        </div>
    );
}