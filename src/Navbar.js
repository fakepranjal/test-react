import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



export default function Navbar(){
    return(
        <>
        <div className="navbar">
            <div id="nav-logo">Healthcare</div>
            <ul className="nav-links-box">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/foods" className="nav-link">Foods</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
            </ul>
        </div>
        </>
    );
}