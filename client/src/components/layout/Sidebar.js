import React, { Fragment, useEffect, useState } from 'react'

const Sidebar = ({setLang, lang}) => {
    const [isVisible, setVisible] = useState(null);
    const onBtnClick = (e) => {
        if(Array.from(e.target.classList).indexOf('fa-spin') > -1)
            return;
        setVisible(isVisible===null?true:!isVisible);
        e.target.classList += ' fa-spin';
        setTimeout(() => e.target.classList.remove('fa-spin'), 3000);
    }
    const colors=['rgb(52, 58, 64)','rgb(255, 20, 147)','rgb(255, 140, 0)','rgb(32, 178, 170)']
    const changeColor = e => {
        document.documentElement.style.setProperty('--mainColor', e.target.style.backgroundColor);
        document.documentElement.style.setProperty('--mainColorTrans', e.target.style.backgroundColor.replace(')',', .5)'));
        document.querySelector('#theme-color').content = e.target.style.backgroundColor;
    }

    return (<Fragment>
        <div className="sidebar-btn">
            <i className="fa fa-cog fa-2x" onClick={onBtnClick}></i>
        </div>
        <div className={`sidebar ${isVisible===null?'':isVisible ? 'show':'hide'} py-4`}>
            <i className="fa fa-language fa-2x mb-2" onClick={()=>{
                document.body.style.transform = 'rotateY(360deg)';
                document.body.style.transition = 'all 3s';
                setTimeout(() => setLang(lang==='he'?'en':'he'), 1350);
                setTimeout(() => {
                    document.body.style.transform = '';
                    document.body.style.transition = '';
                }, 3000);
            }}></i>
            {/* <div className="spaceship mx-auto" onClick={e=>{
                if(Array.from(e.target.classList).indexOf('shoot') < 0){
                    e.target.classList+=' shoot';
                    setTimeout(()=>e.target.classList.remove('shoot'),1000);
                }
            }}></div> */}
            {
                colors.map((v,i)=><i key={i} className="colors mx-auto my-2" 
                     style={{backgroundColor:v}} onClick={changeColor}></i>)
            }
            <Clock/>
        </div>
    </Fragment>);
}

export default Sidebar;

function Clock(){
    const [state, setState] = useState({hour:0,minute:0,second:0});
    const {hour, minute, second} = state;
    useEffect(()=>{
        let now = new Date();
        setState({
            hour:(now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30),
            minute: (now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6),
            second: (now.getSeconds() / 60 * 360)})
    },[]);
    return (<div className="clock mx-auto my-2">
        <style>
        {`
            .clock .hour{ animation: rotate-hour 43200s linear infinite; }
            .clock .minute{ animation: rotate-minute 3600s linear infinite; }
            .clock .second{ animation: rotate-second 60s linear infinite; }
            @-webkit-keyframes rotate-hour{from{transform:rotate(${hour}deg);}to{transform:rotate(${hour+360}deg);}}
            @-webkit-keyframes rotate-minute{from{transform:rotate(${minute}deg);}to{transform:rotate(${minute+360}deg);}}
            @-webkit-keyframes rotate-second{from{transform:rotate(${second}deg);}to{transform:rotate(${second+360}deg);}}
            @-moz-keyframes rotate-hour{from{transform:rotate(${hour}deg);}to{transform:rotate(${hour+360}deg);}}
            @-moz-keyframes rotate-minute{from{transform:rotate(${minute}deg);}to{transform:rotate(${minute+360}deg);}}
            @-moz-keyframes rotate-second{from{transform:rotate(${second}deg);}to{transform:rotate(${second+360}deg);}
        `}
        </style>
        <div className="center"></div>
        <div className="hour"></div>
        <div className="minute"></div>
        <div className="second"></div>
    </div>)
}