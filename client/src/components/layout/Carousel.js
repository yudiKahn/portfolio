import React, {Fragment, useState } from 'react'

function Carousel({imgs, imgStyle}) {
    const [state, setState] = useState({viewerDistance: 500, itemWidth:400, apothem:(imgs.length*70.588235),
        itemSeparation: 80, theta: (2 * Math.PI / imgs.length), currImg:0});
    const {viewerDistance, itemWidth, apothem, itemSeparation, theta, currImg} = state;

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

    return (<Fragment>
    <style>
        {`
        .carousel3d{
            perspective: ${viewerDistance}px;
            overflow: hidden;
            display: grid;
            place-items: center;
        }
        .carousel3d-fig{
            margin: 0px;
            max-width: ${itemWidth}px;
            width: 100vw;
            transform-style: preserve-3d;
            transition: transform 0.5s ease 0s;
            flex: 0 0 auto;
            transform-origin: 50% 50%;
            transform: translateZ(-${apothem}px) rotateY(${currImg * (-theta)}rad);
        }
        .carousel3d-item{
            width: 100%;
            box-sizing: border-box;
            padding: 0px ${itemSeparation / 2}px;
            opacity: 0.9;
            flex: 0 0 auto;
            position: absolute;
            left: 0px;
            top: 0px;
            transform-origin: 50% 50%;
        }
        .carousel3d-nav{
            display: flex;
            justify-content: center;
            margin: 20px 0px 0px;
            flex: 0 0 auto;
        }
        .carousel3d-nav .btn{
            flex: 0 0 auto;
            margin: 0px 5px;
            cursor: pointer;
        }
        ${imgs.map((v,i)=>`#car-img-${i} {
            transform: rotateY(${i*theta}rad) translateZ(-${apothem}px) scaleX(-1);
        } #car-img-${i}:hover{
            transition:2s ease;
            transform: rotateY(${i*theta}rad) translateZ(-${apothem}px) scaleX(-1) scale(1.1);
        }`).join('')}
        `}
    </style>
    <div className="w-100 h-100 carousel3d" onTouchStart={t.start} onTouchEnd={e=>moveTouch(t.end(e))}>
        <figure className="carousel3d-fig">
        {
            imgs.map((imgSrc,i)=>(<img alt="stam" id={`car-img-${i}`} key={i} src={imgSrc} className="carousel3d-item"
                style={{...imgStyle}}/>))
        }
        </figure>
        <nav className="txt-gry carousel3d-nav" onClick={move}>
            <button className="btn btn-dark fa fa-caret-left px-3" id="prev"></button>
            <button className="btn btn-dark fa fa-caret-right px-3" id="next"></button>
        </nav>
    </div>
    </Fragment>)
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