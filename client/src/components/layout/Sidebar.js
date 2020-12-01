import React, { Fragment, useState } from 'react'

const Sidebar = ({setLang, lang}) => {
    const [isVisible, setVisible] = useState(null);
    const onBtnClick = (e) => {
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
        <div className="sidebar-btn" onClick={e=>onBtnClick(e)}>
            <i className="fa fa-cog fa-2x"></i>
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
            {
                colors.map((v,i)=><i key={i} className="colors mx-auto my-2" 
                     style={{backgroundColor:v}} onClick={changeColor}></i>)
            }
        </div>
    </Fragment>);
}

export default Sidebar;