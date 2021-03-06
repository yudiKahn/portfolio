import React from 'react';
import { Link } from 'react-router-dom';
import text from '../../text.json';

function Navbar({lang}) {

    return (<header className="p-4 header" id="header">
        <nav className={`navbar navbar-expand-lg bg-dark py-3 navbar-dark ${lang==='he'?'flip':''}`}>
        <Link className={`navbar-brand txt-gry ${lang==='he'?'flip':''}`} to="/">
            {text[lang]['navbar'][0]}
        </Link>
        <button onClick={e => {
            let btn = e.nativeEvent.path.find(el=>el.classList.contains('navbar-toggler'));
            btn.classList.contains('click') ? btn.classList.remove('click') : btn.classList.add('click');
        }} className="navbar-toggler" data-toggle="collapse" data-target="#nav-coll" aria-controls="nav-coll" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
        </button> 
        <div className="collapse navbar-collapse" id="nav-coll">
            <ul className={`navbar-nav mr-auto ${lang==='he'?'flip text-right':''}`}>
                <li className="nav-item">
                    <Link to="/Projects" className="nav-link text-white" id="nav-project">
                        {text[lang]['navbar'][1]}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Certificates" className="nav-link text-white" id="nav-cert">
                        {text[lang]['navbar'][2]}
                    </Link>
                </li>
            </ul>
            <div style={{transform:`scaleX(${lang==='he'?'-':''}1)`}}>
                <a href="https://www.linkedin.com/in/yudi-kahn-1873291ab/" target="_blank" rel="noreferrer">
                    <i className="fa fa-linkedin text-white"></i>
                </a>&nbsp;
                <a href="https://codepen.io/yudiK" target="_blank" rel="noreferrer">
                    <i className="fa fa-codepen text-white"></i>
                </a>&nbsp;
                <a href="https://github.com/yudiKahn" target="_blank" rel="noreferrer">
                    <i className="fa fa-github text-white"></i>
                </a>
            </div>
        </div>
        </nav>
    </header>)
}

export default Navbar;