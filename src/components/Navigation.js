import React from "react";
import {Link} from "react-router-dom";
import "../css/import.css";

function Navigation(){
    return (
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;