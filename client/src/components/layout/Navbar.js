import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({lang}) {

    return (<header className="p-4 header" id="header">
        <nav className={`navbar navbar-expand-lg bg-dark py-3 navbar-dark ${lang==='he'?'flip':''}`}>
        <Link className={`navbar-brand txt-gry ${lang==='he'?'flip':''}`} to="">
            {lang==='he'? 'בית' : 'Home'}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav mr-auto ${lang==='he'?'flip text-right':''}`}>
                <li className="nav-item">
                    <Link to="" className="nav-link text-white" id="nav-project">
                        {lang==='he'? 'פרויקטים' : 'Projects'}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="Certificates" className="nav-link text-white" id="nav-cert">
                        {lang==='he'? 'תעודות' : 'Certificates'}
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
    </header>)
}

export default Navbar;