import React from 'react';
import img_me from '../../imgs/me.jpg';
import Carousel from './Carousel';
import {Link} from 'react-router-dom';

function Home({lang}) {
    let skills=' C#, .NET, node.js, mongodb, React, Redux ';
    const txt = {
        EN: {
            greeting: (()=>{
                switch(getGreetingType()){
                    case 1: return 'Good Morning,';
                    case 2: return 'Good Afternoon,';
                    case 3: return 'Good Evening,';
                    default:return 'Good Night,';
                }
            })(),
            about: `My name is Yudi Kahn, a full-stack web developer.
                among my specializations are ${skills} & more.`,
        },
        HE:{
            greeting: (()=>{
                switch(getGreetingType()){
                    case 1: return ',בוקר טוב';
                    case 2: return ',צהריים טובים';
                    case 3: return ',ערב טוב';
                    default:return ',לילה טוב';
                }
            })(),
            about:`שמי יודי כהן, מפתח ווב מקצה לקצה. בין ההתמחויות שלי ישנם`+skills+
                'ועוד.  מקווה שתמצאו אתר זה מועיל',
        }
    }
    
    return (<main style={{minHeight:'100vh'}}>
        <div className="w-100" style={{minHeight:'150%',textAlign:'center',position:'relative'}}>
            <img className="img-me" src={img_me} alt="Yudi Kahn"></img>
            <br></br>
            <div className="py-4 color-main">
                <h5>{txt[lang.toUpperCase()].greeting}</h5>
                <p className="px-4 mx-auto" style={{width: '90vw',maxWidth: 400, direction: lang==='he'?'rtl':'ltr'}}>
                    {txt[lang.toUpperCase()].about}
                </p>               
            </div>
            <br></br>
            <div className="row justify-content-center py-4">
                <a href="tel:055-999-1015" className="btn mr-2">
                    <i className="fa fa-phone"></i>
                </a>
                <button className="btn mx-2"><i className="fa fa-thumbs-up"></i></button>
                <a href="mailto:yudikahn8@gmail.com" className="btn ml-2">
                    <i className="fa fa-paper-plane"></i>
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
            <Link to="/Notebook" style={{textDecoration:'none'}}>
            <ul className="notebook-ul">
                <li></li>
                <li></li>
                <li></li>
                <li><p className="m-0 anim">Notebook...</p></li>
                <li><p className="m-0 anim" style={{width:0,animationDelay:'3s'}}>Click me</p></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            </Link>
        </div>
    </main>)
}

export default Home;

function getGreetingType(){
    let now = new Date().getHours();
    if(now > 4 && now< 12) return 1;
    if(now >=12&& now <18) return 2;
    if(now >=18&& now <=23) return 3;
    else return 4;
}