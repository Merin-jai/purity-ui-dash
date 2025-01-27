import React from 'react';
import '../styles/style.css';


const Footer = () => {
    return(
        <footer className="footer">
           <div className="footer-left">
                @ 2021, Made with <span style={{color: "red"}}>&#10084;</span> by <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> & <a href="https://www.updivision.com" target="_blank">Simmmple </a>for a better web
           </div>
           <div className="footer-right">
                <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>
                <a href="https://www.updivision.com" target="_blank">Simmmple</a>
                <a href="#" target="_blank">Blog</a>
                <a href="#" target="_blank">License</a>
           </div>
        </footer>
    );
};

export default Footer;
