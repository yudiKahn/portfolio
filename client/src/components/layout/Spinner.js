import React, { useEffect, useState } from 'react';

const style = {
    txt: {
        font: '26px Monaco, MonoSpace',
        height: 100,
        position: 'absolute',
        width: 20,
        right: '47%',
        top: "16%",
        transformOrigin: 'bottom center'
    }
}

const Spinner = ({ready}) => {
    const [done, setDone] = useState(false);
    useEffect(()=>{
        if(ready)
            setTimeout(()=>setDone(true), 3000)
    }, [ready, done])
    return (<div className={`spinner ${ready}`} style={{display:done?'none':'block'}}>
        <div>
        {
            "| YUDI KAHN | PORTFOLIO".split("").map((t,i)=>(<span key={i} style={{...style.txt, transform: `rotate(${(-90)+(i*15)}deg)`}}>
                {t}
            </span>))
        }
        </div>
    </div>)
}


export default Spinner;