import React, {useState} from 'react';
const gameJSX = (title,src) => 
    (<iframe style={{width: '100%',height:'100%'}} scrolling="no" title={title} src={`https://codepen.io/yudiK/embed/preview/${src}?theme-id=light&default-tab=result`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href={`https://codepen.io/yudiK/pen/${src}`}>{title}</a> by yudi
        (<a href='https://codepen.io/yudiK'>@yudiK</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>);

function Games() {
    const [selectedGame, setSelectedGame] = useState(null);
    const gamesNames = [
        {title:'Star Wars',txt:'compatible with computer only, Made with jQuery.', src:"PoGGaaw"},
        {title:'TicTacToe',txt:'A Simple Tic Tac Toe Game With option of playing against AI.',src:"jOMVVgB"}
    ];

    return (<div style={{width:'100%',minHeight:'100vh'}} className="container py-3">
        <div className="game-h1">
            <div className="bg py-3">
                <h1 className="text-center text-white">
                    <i className="mx-2 px-2" style={{color:'black',backgroundColor:'yellow',fontWeight:'bold',borderRadius:'50%'}}>JS</i>
                    JavaScript Games
                </h1>
            </div>
        </div>
        {selectedGame ? (<div className="game-window">
            <i className="fa fa-close fa-2x text-danger" onClick={()=>setSelectedGame(false)} style={{zIndex:10}}></i>
            {selectedGame}
        </div>)
        :''}
        <div className="row mx-0 justify-content-center">
        {
            gamesNames.map((val, i)=>(<div key={i} className="card mx-1 my-3 col" style={{maxWidth:'18rem',minWidth:'18rem'}}>
                <div className="card-body" style={{display:'grid',placeContent:'center'}}>
                    <h5 className="card-title" style={{textTransform:'uppercase'}}>{val.title}</h5>
                    <p className="card-text">{val.txt}</p>
                    <button className="btn btn-primary" onClick={()=>setSelectedGame(gameJSX(val.title, val.src))}>Play</button>
                </div>
            </div>))
        }
        </div>
    </div>)
}

export default Games;