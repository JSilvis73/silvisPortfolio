import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="displayFlexNav">
            <div className="">
                Silvis' Portfolio
             </div>
            <div className="links">
                <Link to={'/'} >About</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
        </nav>
    )
}