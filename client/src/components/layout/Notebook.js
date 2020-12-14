import React from 'react';

function Notebook() {
    const sub = ['Design patterns','Architecture patterns','Object oriented programming','Functional oriented programming'];
    return (<div style={{minHeight:'100vh',display:'grid',placeContent:'center'}}>
        <ul className="notebook-ul">
            <li></li>
        {
            sub.map((v,i)=><li key={i}><p className="m-0 p">{v}{v?` ..... ${(i+1)*2}`:''}</p></li>)
        }
            <li><p className="m-0 anim"><small>In progress...</small></p></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>)
}

export default Notebook;