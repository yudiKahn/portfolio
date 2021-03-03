import React, { useEffect, useState } from 'react';
import img_me from '../../imgs/me.jpg';
import Carousel from './Carousel';
import text from '../../text.json';
import img1 from '../../imgs/js.png'

function Home({lang}) {
    
    return (<main style={{minHeight:'100vh'}}>
        <div className="w-100" style={{minHeight:'150%',textAlign:'center',position:'relative'}}>
            <img className="img-me" src={img_me} alt="Yudi Kahn" onMouseMove={e=>{ 
                const card = e.target;
                let mousePosition = { x: 0, y: 0 };
                const containerHeight = e.target.parentElement.offsetHeight;
                const containerWidth = e.target.parentElement.offsetWidth;
            
                mousePosition.x = e.pageX;
                mousePosition.y = e.pageY;
                const angleX =
                    -1 * (mousePosition.y * 100 / containerHeight * 0.2 - 10) + "deg",
                  angleY = 1 * (mousePosition.x * 100 / containerWidth * 0.2 - 10) + "deg",
                  translateX = mousePosition.x * 80 / containerHeight * 0.3 + "px",
                  translateY = mousePosition.y * 80 / containerHeight * 0.3 + "px";
            
                card.style.transform = `translate3d(${translateX}, ${translateY}, 0) rotatex(${angleX}) rotatey(${angleY})`;
                card.style.backgroundPosition = `${mousePosition.x / containerWidth * 50}% ${mousePosition.y / containerHeight * 50}%`;
            }}></img>
            <br/>
            <div className="py-4 color-main">
                <h5>{text[lang]['greeting'][getGreetingType()]}</h5>
                <p className="px-4 mx-auto my-0" style={{width: '90vw',maxWidth: 400, direction: lang==='he'?'rtl':'ltr'}}>
                    {text[lang]['about']}
                </p>    
                <p className="px-4 mx-auto" style={{width: '90vw',maxWidth: 400, direction: lang==='he'?'rtl':'ltr'}}>
                    {text[lang]['about2']} !
                </p>           
            </div>
            <br/>
            <div className="row justify-content-center py-4">
                <a href="tel:055-999-1015" className="btn mr-2">
                    <i className="fa fa-phone"></i>
                </a>
                <button className="btn mx-2" style={{position:'relative'}} onClick={e=>{
                    let heart = e.target.children.length === 0 ? e.target.parentElement.children[1] : e.target.children[1];
                    heart.classList.contains('hide') ? (()=>{
                        heart.classList.remove('hide');
                        setTimeout(()=> heart.classList.add('hide'), 3000);
                    })() : (()=>{})();
                }}>
                    <i className="fa fa-thumbs-up"></i>
                    <i className="fa fa-heart hide"></i>
                </button>
                <a href="mailto:yudikahn8@gmail.com" className="btn ml-2">
                    <i className="fa fa-envelope"></i>
                </a>
            </div>
        </div>
        <div className="parralex">
            <div className="w-100 h-100 bg-main-trans row mx-0" style={{position:'relative'}}>
                <Carousel imgs={['js','csharp','css3','html5','node.js','react'].map(v=>require(`../../imgs/${v}.png`).default)}
                    imgStyle={{maxHeight:230}}/>
            </div>
        </div>
        <div className="w-100" style={{minHeight:'100vh',display:'grid',placeContent:'center'}}>
            <Quotes/>
        </div>
    </main>)
}

export default Home;

function getGreetingType(){
    let now = new Date().getHours();
    if(now > 4 && now< 12) return 0;
    if(now >=12&& now <18) return 1;
    if(now >=18&& now <=23) return 2;
    else return 3;
}

// function Notebook(){
//     return(<Link to="/Notebook" style={{textDecoration:'none'}}>
//     <ul className="notebook-ul">
//         <li></li>
//         <li></li>
//         <li></li>
//         <li><p className="m-0 anim">Notebook...</p></li>
//         <li><p className="m-0 anim" style={{width:0,animationDelay:'3s'}}>Click me</p></li>
//         <li></li>
//         <li></li>
//         <li></li>
//     </ul>
//     </Link>)
// }

function Quotes(){
    const [q, setQ] = useState('');
    const getRndQ = () => fetch('https://api.quotable.io/random', {method:'GET'})
        .then(res=> res.ok ? res.json().then(data=> setQ(data)) : '');
    useEffect(()=>{
        getRndQ();
    },[]);

    return (<div className="w-100 h-100" style={{display:'grid',placeContent:'center'}}>
        {
            typeof q === 'object' && (<div style={{textAlign:'center'}}>
                <p className="quote">&ldquo;{q.content}&rdquo;</p>
                <i className="fa fa-refresh fa-2x color-main" onClick={getRndQ} style={{cursor:'pointer'}}></i>
            </div>)
        }
    </div>)
}