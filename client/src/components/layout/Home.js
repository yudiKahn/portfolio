import React from 'react';
import img_me from '../../imgs/me.jpg';

function Home({lang}) {
    const txt = {
        EN: {
            greeting: (()=>{
                switch(getGreetingType()){
                    case 1: return 'Good Morning.';
                    case 2: return 'Good Afternoon.';
                    case 3: return 'Good Evening.';
                    default:return 'Good Night.';
                }
            })(),
            about: `Hello & Welcome. my name is Yudi Kahn and I am a full-stack web developer.
            among my specializations are C#, .NET, node.js, mongodb, React, Redux & more.
            Hope u find this site helpful.`
        },
        HE:{
            greeting: (()=>{
                switch(getGreetingType()){
                    case 1: return '.בוקר טוב';
                    case 2: return '.צהריים טובים';
                    case 3: return '.ערב טוב';
                    default:return '.לילה טוב';
                }
            })(),
            about:`שלום וברוכים הבאים . שמי יודי כהן ואני מפתח ווב מקצה לקצה. בין ההתמחויות שלי ישנם`+
                ' C#, .NET, node.js, mongodb, React, Redux '+'ועוד.  מקווה שתמצאו אתר זה מועיל'
        }
    }
    
    return (<main style={{minHeight:'100vh'}}>
        <div className="w-100" style={{backgroundColor:'#f5efef', minHeight:'150%',textAlign:'center',position:'relative'}}>
            <img className="img-me" src={img_me} alt="Yudi Kahn"></img>
            <br></br>
            <div className="py-4">
                <h5>{txt[lang.toUpperCase()].greeting}</h5>
                <p className="px-4">{txt[lang.toUpperCase()].about}</p>               
            </div>
            <br></br>
            <div className="row justify-content-center py-4">
                <a href="tel:055-999-1015" className="btn btn-dark mr-2">
                    <i className="fa fa-phone"></i>
                </a>
                <button className="btn btn-dark mx-2"><i className="fa fa-thumbs-up"></i></button>
                <a href="mailto:yudikahn8@gmail.com" className="btn btn-dark ml-2">
                    <i className="fa fa-paper-plane"></i>
                </a>
            </div>
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