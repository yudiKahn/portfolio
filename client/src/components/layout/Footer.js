import React from 'react'

function Footer() {
    return (<footer className="bg-main text-white px-2 pb-3">
        <div className="footer-arrow-up">
           <a href="#header" className="txt-gry"><i className="fa fa-caret-up fa-3x"></i></a>
        </div>
        &copy; Yudi Kahn {new Date().getFullYear()} &nbsp; 
        <a href="https://www.linkedin.com/in/yudi-kahn-1873291ab/" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin text-white mx-1"></i>
        </a> 
        <a href="https://github.com/yudiKahn" target="_blank" rel="noreferrer">
            <i className="fa fa-github text-white mx-1"></i>
        </a> 
        <a href="https://codepen.io/yudiK" target="_blank" rel="noreferrer">
            <i className="fa fa-codepen text-white mx-1"></i>
        </a> 
        <a href="tel:055-999-1015" target="_blank" rel="noreferrer">
            <i className="fa fa-phone text-white mx-1"></i>
        </a> 
    </footer>)
}

export default Footer;