import React, {useState } from 'react'

function Carousel({imgs, imgStyle}) {
    const [state, setState] = useState({viewerDistance: 500, itemWidth:400,apothem:482.842712474619,
        itemSeparation: 80, theta: (2 * 3.141592653589793 / imgs.length), currImg:0});
    const {viewerDistance, itemWidth, apothem, itemSeparation, theta, currImg} = state;
    const [styles, setStyles] = useState({ 
        carousel:{
            perspective: viewerDistance,
            overflow: 'hidden',
            display: 'grid',
            placeItems: 'center'
        },
        figure: {
            margin: 0,
            maxWidth: itemWidth,
            width:'100vw',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s',
            transformOrigin: `50% 50% -${apothem}px`,
            flex: '0 0 auto'
        },
        img: {
            width: '100%',
            boxSizing: 'border-box',
            padding: `0 ${itemSeparation / 2}px`,
            opacity: 0.9,
            flex: '0 0 auto'
        },
        img_notfirst: {
            position: 'absolute',
            left: 0,
            top: 0,
            transformOrigin: `50% 50% -${apothem}px`
        },
        btn: {
            flex: '0 0 auto',
            margin: '0 5px',
            cursor: 'pointer'
        }
    });
    const {carousel, figure, img, img_notfirst, btn} = styles;

    const move = e => {
        if(e.target.tagName.toLowerCase()!=='button')
            return;
        if(e.target.id === 'prev'){
            setState({...state, currImg: currImg-1});
        }
        else{
            setState({...state, currImg: currImg+1});
        }
    }
    const moveTouch = (dir) => {
        if(dir.toLowerCase()==='right'){
            setState({...state, currImg: currImg-1});
        }
        if(dir.toLowerCase()==='left'){
            setState({...state, currImg: currImg+1});
        }
    }
    const t = new Touch();

    return (<div className="w-100 h-100" style={carousel} onTouchStart={t.start} onTouchEnd={e=>moveTouch(t.end(e))}>
        <figure style={{...figure, transform:`rotateY(${currImg * (-theta)}rad) scale(1)`}}>
        {
            imgs.map((imgSrc,i)=>{
                let rad = (i)*theta;
                return(<img alt="stam" key={i} src={imgSrc}
                style={{...img, ...img_notfirst, ...imgStyle, transform:`rotateY(${rad}rad)`}}/>);
            })
        }
        </figure>
        <nav className="txt-gry" style={{display: 'flex',justifyContent: 'center',margin: '20px 0 0',flex: '0 0 auto'}} onClick={move}>
            <button className="btn btn-dark fa fa-caret-left px-3" id="prev" style={btn}></button>
            <button className="btn btn-dark fa fa-caret-right px-3" id="next" style={btn}></button>
        </nav>
    </div>)
}

export default Carousel;

function Touch(){
    this.dir="";
    this.startX="";
    this.startY="";
    this.distX="";
    this.distY="";
    this.start = (e) => {
        var touchobj = e.changedTouches[0];
        this.startX = touchobj.pageX;
        this.startY = touchobj.pageY;
    };
    this.end = (e) => {
        var touchobj = e.changedTouches[0]
        this.distX = touchobj.pageX - this.startX // get horizontal dist traveled by finger while in contact with surface
        this.distY = touchobj.pageY - this.startY // get vertical dist traveled by finger while in contact with surface
        if (Math.abs(this.distX) > Math.abs(this.distY)){ // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
            this.dir = (this.distX < 0)? 'left' : 'right'
        }
        return this.dir;
    };
}