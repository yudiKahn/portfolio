import React from 'react';
import { Link } from 'react-router-dom';

const P = (title, txt, img, links) => ({
    title, img, txt, links
});

function Projects({lang}) {
    const arr = [P('Portfolio','A React.js App That use node As A Server.','',[{txt:'HERE',here:true, a:'/'}]),
        P('SukkotMe','A MERN Stack App + Redux. For Selling All Your Sukkot Needs.','',[{txt:'VISIT',a:'https://sukkotme-tmp.herokuapp.com/'},{txt:'GITHUB',a:'https://github.com/yudiKahn/SukkotMe'}]),
        P('Chabad Beer Sheva','MERN Stack App For Chabad House In Beer Sheva, Israel.','',[{txt:'VISIT',a:'https://chabad-beer-sheva.herokuapp.com/'}]),
        P('SukkotMe~old version','HTML5, css3, JavaScript, Jquery & Bootstrap In Frontend, And Node For Backend API','',[{txt:'GITHUB',a:'https://github.com/yudiKahn/SukkotMeOld'}]),
        P('Games', 'Games made With vanilla JavaScript, HTML5 and CSS3','',[{txt:'GO',here:true, a:'/Games'}]),
        P('Chabbad Cyprus', 'Ssr React app build with next.js framework for chabbad house of aya napa','',[{txt:'VIST',a:'https://chabbad-cyprus.herokuapp.com/'}])];
    return (<div style={{width:'100%',minHeight:'100vh'}} className="p-3 row mx-0 justify-content-center">
        {
            arr.map((v,i)=><div key={i} className="project-container col my-3">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt={v.title}/>
                <div className="info">
                    <h1 className="text-center">
                        {v.title.split('~')[0]}
                        {v.title.split('~')[1]&&<small><br/>{v.title.split('~')[1]}</small>}
                    </h1>
                    <div className="info-p">
                        <p className="px-3">{v.txt}</p>
                        {
                            v.links.map((btn,i2)=>btn.here?(<Link key={i2} className="btn btn-dark mx-1" to={btn.a}>
                                {btn.txt}
                            </Link>):
                            (<a key={i2} className="btn btn-dark mx-1" href={btn.a} target="_blank" rel="noreferrer">
                                {btn.txt}
                            </a>))
                        }
                    </div>              
                </div>
            </div>)
        }
    </div>)
}

export default Projects;