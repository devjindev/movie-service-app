import React from "react";
import "../css/import.css";

function About(props){
    console.log(props);
    return (
        <footer id="contact">
            <div>
                <div>
                    <span>CONTACT ME</span>
                    <span>
                        hongyujin0216@gmail.com
                        <a href="mailto:hongyoujin0216@gmail.com"><i className="far fa-envelope"></i></a>
                    </span>
                </div>
                <div></div>
                <div></div>
            </div>
            <span>
                <a href="https://github.com/devjindev" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://devjindev.tistory.com/" target="_blank" rel="noreferrer">T</a>
            </span>
            <p>Copyright © 2021 yujin hong all rights reserved</p>
        </footer>
    );
}
export default About;