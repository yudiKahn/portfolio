import React from 'react';
import Carousel from './Carousel';

function Certificates() {
    let url = (c) => `https://raw.githubusercontent.com/yudiKahn/Certificates/main/${c}`;
    const certificates = ['full%20stack.png','RWD.png', 'api%20&%20microservices.png', 'data%20visualization.png',
     'frontEnd%20lib.png','javaScript.png','qa.png','mern.jpg'];

    return (<div style={{minHeight:'100vh',height:'100vh', width:'100%'}}>
        <Carousel imgs={certificates.map(v=>url(v))} imgStyle={{backgroundColor: 'var(--mainColorTrans)',
            padding: 10, border: '5px solid var(--mainColor)',boxShadow: '3px 3px 16px black',height:300,opacity:1}}/>
    </div>)
}

export default Certificates;