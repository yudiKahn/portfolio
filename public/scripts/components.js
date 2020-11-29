Array.prototype.mix = function(){
    let res=this;
    for(let i=0;i<this.length;i++){
        let rnd=Math.floor(Math.random()*this.length);
        let tmp = this[i];
        this[i]=this[rnd];
        this[rnd]=tmp;
    } 
    return res; 
}
class Home extends React.Component{
    render(){
        return(
            <span className="w-100 h-100">
                <HomeOne/>  
                <HomeTwo/>
                <HomeThr/>
            </span>)
    }
}
class HomeOne extends React.Component{
  constructor(props){super(props);}
  getTxt(){
      let now=new Date().getHours();
      if(now >=12&& now <18) now = "צהריים טובים";
      if(now >=18&& now <23) now = "ערב טוב";
      if(now ==23|| (now>=0&&now<=3)) now = "לילה טוב";
      if(now > 4 && now< 12) now = "בוקר טוב";
      return [`My name is Yudi Kahn `,` I am a full-stack web developer and this is my portfolio page. it's a SPA
      (single page application) used with React and other front-end libraries such as Bootstrap and jquery.
      While in the back-end I used node.js with express & mongoDB with mongoose. My main specialization is in C#
      language & Asp.Net. Hope u find this site helpful`,`${now}`]
  }
  render(){
      let h5Style=(t)=>{return {position:'relative',width:'90vw',maxWidth:'300px',top:t,left:'50%',transform:'translate(-50%, -50%)',fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}
      let imgStyle={height:'90vw',width:'90vw',maxHeight:'300px',maxWidth:'300px',borderRadius:'50% 20px',border:'6px solid #343a40',marginTop:'30px'}
      return(
          <div className="w-100" style={{backgroundColor:'#f5efef', minHeight:'150%',textAlign:'center',position:'relative'}}>
             <img style={imgStyle} src="imgs/me.jpg" alt="Yudi Kahn"></img>
             <br></br>
             <div class="carousel">
                <div id="h1carousel" class="carousel slide" data-interval="false">
                     <div class="carousel-inner">
                         <div class="carousel-item active"> 
                            <h5 style={h5Style('230px')}>
                            {<a style={{fontSize:'3em'}}>{this.getTxt()[0][0]}</a>}
                            {this.getTxt()[0].substring(1, this.getTxt()[0].length)}
                            <br></br>{this.getTxt()[1]}   
                            <p className="text-left py-4">-Yudi</p>
                            </h5>
                         </div>
                         <div class="carousel-item">
                            <h5 style={h5Style('150px')}>
                            ! {<a style={{fontSize:'3em'}}>{this.getTxt()[2][0]}</a>}
                            {this.getTxt()[2].substring(1, this.getTxt()[2].length)}
                            <br></br>
                             שלום וברוכים הבאים לאתר שלי. שמי יודי כהן ואני מפתח אתרים הן בצד שרת והן בצד לקוח. 
                             למדתי הנדסת תוכנה בקמפוס שטראוס בירושלים, שם הכירו לנו את שפת סי שארפ לעומק.  ה
                            <p className="text-right py-4">יודי -</p>
                            </h5>
                         </div>
                     </div>
                    <a className="carousel-control-prev" href="#h1carousel" role="button" data-slide="prev">
                        <span aria-hidden="true" style={{transform:'rotate(-90deg)'}}><i className="fa fa-sort-up text-dark"></i></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#h1carousel" role="button" data-slide="next">
                       <span aria-hidden="true" style={{transform:'rotate(90deg)'}}><i className="fa fa-sort-up text-dark"></i></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
             </div>
              <br></br>
              <div className="row justify-content-center py-4">
              <a href="tel:055-999-1015"><button className="btn btn-primary mr-2"><i className="fa fa-phone"></i></button></a>
              <button className="btn btn-primary mx-2"><i className="fa fa-thumbs-up"></i></button>
              <a href="mailto:yudikahn8@gmail.com"><button className="btn btn-primary ml-2"><i className="fa fa-paper-plane"></i></button></a>
              </div>
          </div>
      )
  }
}
class HomeTwo extends React.Component{
    constructor(props){
        super(props);
        this.state={  }
    }
    componentDidMount(){
    }
    render(){
        let skills=['csharp','react','html5','css3','js','node.js','angular','sql'];
        return(<div id="aboutme" style={{minHeight:'100%',position:'relative'}} className="m-0 py-5 w-100 bg-dark">
                <div id="h1carousel2" class="carousel slide px-2" data-ride="carousel" data-interval="6000">
                     <div class="carousel-inner">
                         <div class="carousel-item active about text-center text-white"> 
                            <h2>About Me</h2>
                            <p style={{maxWidth:800}} className="mx-auto px-2">
                                Hello There !!<br></br>
                                I first started to learn programin in
                                <a href="http://www.strausscampus.co.il/" target="_blank"> <em>&quot;Lomda&quot;</em> </a>,
                                there I was taught C# language &amp; .Net framework in depth and full-stack
                                development with ASP.net MVC pattern.<br></br>
                                While I had some time to myself I also learnd JavaScript full-stack
                                development in <a href="http://freecodecamp.org/" target="_blank"> <em>FCC</em> </a>
                                with Node.js, there I also learnd ECMAScript and some extra libraries and frameworks
                            </p>
                         </div>
                         <div class="carousel-item about text-center text-white">
                            <h2>My Skills</h2>
                            <div className="w-100 py-5">
                                {
                                    skills.map(d=><img className="col m-2 p-1 skill-img" src={`imgs/${d}.png`} alt={`${d} icon`}></img>)
                                }
                            </div>
                         </div>
                         <div class="carousel-item">
                             <div className="w-100">
                                {
                                    [{i:'fa-code',t:'My Code',c:<Code/>},{i:'fa-gamepad',t:'My Games',c:<Games/>},{i:'fa-certificate',t:'My Certificates',c:<Certificate/>}].map(d=>
                                    <div className="text-center">
                                    <i onClick={()=>ReactDOM.render(d.c, document.getElementById('root'))} className={`fa-2x fa ${d.i} col-h1 mx-4 col`}></i>
                                    <p style={{color:'#f5efef'}}>{d.t}</p>
                                    </div>)

                                }
                            </div>
                         </div>
                     </div>
                     
                </div>
                <div className="row py-5 w-100" style={{position:'absolute',bottom:10}}>
                    <a className="col-6 text-center" href="#h1carousel2" role="button" data-slide="prev">
                        <span aria-hidden="true"><i style={{transform:'rotate(-90deg)'}} className="fa fa-2x fa-sort-up text-white"></i></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="col-6 text-center" href="#h1carousel2" role="button" data-slide="next">
                    <span aria-hidden="true"><i style={{transform:'rotate(90deg)'}} className="fa fa-2x fa-sort-up text-white"></i></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
      </div>)
    }
}
class HomeThr extends React.Component{
    constructor(props){
        super(props);
        this.state={
            p: ['Pizza Store - blablab','Chabad House - blablab','Travel Agency - blablab'],
            width: window.innerWidth
        }
    }
    componentDidMount(){
        window.addEventListener('resize',()=>{
            this.setState({width: window.innerWidth})
        })
    }
    render(){
        let getInfo = (txt, i) => {
            let imgs=['pizza','chabad','travel-agency'];
            let flag=(i+2)%2;
            let res = <div onClick={()=>ReactDOM.render(<Projects/>, document.getElementById('root'))}  style={{textAlign:flag?'left':'right'}} className="p-row">
                <div className={flag?'to-r':'to-l'} style={{position:'absolute',height:150,width:150,backgroundColor:'#343a40',borderRadius:'50%',right:flag?0:'calc(100% - 150px)',border:'2px solid #f5efef'}}>
                      <img src={`/imgs/${imgs[i]}.jpg`} className="w-100 h-100" style={{borderRadius:'50%'}}></img>
                </div>
                <p className="pt-3" style={{transform:`translate(${flag?'':'-'}20px, 10px)`}}>{txt.substring(0, txt.indexOf('-'))}</p>
                <p className="" style={{fontSize:20}}>{txt.substring(txt.indexOf('-')+1, txt.length)}</p>
            </div>
            return res; 
        };
        return(<div className={`w-100 text-center text-dark about ${this.state.width>470?'p-4':'py-4 px-1'}`} style={{minHeight:'100%',backgroundColor:'#f5efef'}}>
            <h1 className="text-gred">- Portfolio -</h1>
           {
               this.state.p.map((d,i)=><div className={`row ${this.state.width>470?'p-4':'py-4'}`} style={{maxWidth:800,marginRight:'auto',marginLeft:'auto'}}>{getInfo(d,i)}</div>)
           }
        </div>)
    }
}
class Comment extends React.Component{
    reload(){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            let res = [...JSON.parse(this.responseText)];
            if(document.getElementById("comment-table")){
                document.getElementById("comment-table").innerHTML="";
                res.map(d=>{
                let ln = d.lastname ? d.lastname : '';
                document.getElementById("comment-table").innerHTML+="<div class='single-comment p-1'>"
                +d.comment+"<br/><em style='font-size:12px'>-"+d.firstname+" "+ln+"</em></div>";
                })
            }
          }
        };
        xhttp.open("GET", '/getAllComments', true);
        xhttp.send();
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let json = new XMLHttpRequest();
        json.open('post', '/comment');
        json.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        let ln = document.querySelector('#last').value ? '&lastname='+document.querySelector('#last').value:'';
        json.send('firstname='+document.querySelector('#first').value + ln+
                  '&comment='+document.querySelector('#comment').value);
        document.querySelector('.reset').click();
        this.reload();
    }
    render(){
        return(
           <div className="w-100 h-100 text-center text-white p-3" id="comment-div" style={{backgroundColor:'#f5efef'}}>
              <h1 style={{borderBottom:'solid 2px',padding:'10px'}}>~ Post a Comment ~</h1>
              <form className="p-5 comment" onSubmit={this.handleSubmit} method="post" action="/comment">
               <span className="row row-2">
               <input type="text" placeholder="First Name*" required className="form-control col" id="first"></input>
               <input type="text" placeholder="Last Name" className="form-control col ml-1" id="last"></input>
               </span>
              <textarea className="form-control my-2 txtarea" rows="10" maxlength="300" placeholder="Comment*" id="comment"></textarea>         
               <button type="submit" className="btn btn-outline-light">Submit</button>
               <button type="reset" className="btn btn-outline-danger reset">Reset</button>
              </form>
              <div id="commentContainer" className="comment big p-5" style={{maxHeight:'500px',overflow:'auto', textAlign:'left'}}>
                <div id="comment-table"></div>
                {this.reload()}
              </div>
            </div> 
        )
    }
}
class Certificate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clas0:``, clas1:``, clas2:``
        }
    }
    componentDidMount(){
        let w =800;
        let state = {clas0:`${window.innerWidth < w ? '':'row'} w-100`,
         clas1:`${window.innerWidth < w ? 'row p-5':'col-3 py-5'}`,
         clas2:`${window.innerWidth < w ? 'row m-4':'col-8 ml-4'}`}
        this.setState(state);
        window.addEventListener('resize',()=> {
            state = {clas0:`${window.innerWidth < w ? '':'row'} w-100 h-100`,
            clas1:`${window.innerWidth < w ? 'row p-5':'col-3 py-5'}`,
            clas2:`${window.innerWidth < w ? 'row m-4':'col-8 ml-4'}`}
            this.setState(state);
        });
    }
    renderImg(imgNum){
       let imgs=['imgs/certificate(1).png','imgs/certificate(2).png','imgs/certificate(3).png','imgs/certificate(4).png'];
       let img=<img className="w-100 h-100 p-0 m-0" src={imgs[imgNum]} alt="Certificate Image"></img>
       ReactDOM.render(img, document.getElementById('cert-img'))
    }
    render(){
        return(<div className={this.state.clas0} style={{minHeight:'100%',backgroundColor:'#f5efef'}}>
            <span className={this.state.clas1}>
                <select className="form-control ml-4" onChange={(e)=>this.renderImg(e.target.value)}>
                    <option selected={true} disabled={true}>Certificates</option>
                    {'Responsive Web Design-JavaScript Algorithms-Front End Libraries-Data Visualization'.split('-').map((d,i)=>
                    <option value={i}>{d}</option>)
                    }
                </select>
            </span>
            <span id="cert-img" className={this.state.clas2} style={{textAlign:'center',color:'#dedad9',border:'solid 1px #dedad9'}}>
               <h3 style={{marginTop:'20px'}}>Choose a Certificate</h3>
            </span>
        </div>)
    }
}
class Projects extends React.Component{
   render(){
       return(<div>

       </div>)
   }
}
class Code extends React.Component{
    constructor(props){ super(props);
       this.state={
         jokesCat:[], joke:'Press The Button',
         weatherObj: false, isCel:true, errTxt: 'Please Enter a Valid City Name'
       }
    }
    getTxt(){
        return([
            `מה שעומד בבסיס רעיון זה הוא שהורשה לא צריכה להיות הפתרון הקבוע למימוש קוד זהה,
            שהרי נניח שלפנינו מחלקת בסיס של מכונית ולה תכונה המתפקדת על הנסיעה. רוב הסיכויים שהמחלקות
            השונות שיורשות יממשו את התכונות באופן שונה. ולכן הפתרון הוא להעלות את הקוד ברמת האבסטרקציה
           ! וליצור ממשק שמתפקד על הנהיגה ואותו יממשו בדרכים האפשרויות. ואז מחלקת הבסיס תכיל ממשק זה`
        ])
    }
    async componentDidMount(){
         let c = await fetch('https://api.chucknorris.io/jokes/categories');
         let j = await c.json();
         this.setState({jokesCat: j});
    }
    //#region API
    apiJoke(){
        let categories = this.state.jokesCat;
        categories.push('random');
        let selecCat='';
        return(<div>
            <select className="form-control" onChange={e=> selecCat = e.target.value}>
              <option disabled={true} selected={true}>Choose Category</option>
              {categories.map(d=> <option value={d=='random'?'':d}>{d}</option>)}
            </select>
            <div className="jumbotron mt-3 joke-out" style={{position:'relative'}}>
                {this.state.joke}
                <p style={{position:'absolute',bottom:3,left:10,fontSize:11}}>from api.chucknorris.io</p>
            </div>
            <button className="btn btn-primary" onClick={()=>{
                let url = selecCat=='' ? 'https://api.chucknorris.io/jokes/random':`https://api.chucknorris.io/jokes/random?category=${selecCat}`;
                fetch(url).then(r=>r.json()).then(d=>this.setState({joke: d.value}));
            }}>Get Random</button>
        </div>)
    }
    apiWeather(){
        let getWeather = (e) =>{
            e.preventDefault();
            let city = document.getElementById('city-weather').value;
            let apiKey = 'fab14b78f1b8e2984277771c6a6dbc01';
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            fetch(url).then(r => r.json())
            .then(d => this.setState({weatherObj: d}))
            .catch(err=>{});
        }
        return(<div>
            <form onSubmit={getWeather}>
                <input type="text" className="form-control" id="city-weather" required={true} placeholder="City"></input>
                <button type="submit" className="btn btn-dark my-2">click</button>
            </form>
            <div className="jumbotron">
                {
                    this.state.weatherObj.weather ?
                    <span className="w-100 h-100 text-center py-2">
                       <h3>{this.state.weatherObj.name}</h3>
                       <img src={`http://openweathermap.org/img/wn/${this.state.weatherObj.weather[0].icon}@2x.png`}></img>
                       &nbsp;<em>{this.state.weatherObj.weather[0].description}</em><br></br>
                       <em style={{fontWeight:this.state.isCel ? 'bolder':'lighter'}} onClick={()=>this.setState({isCel:true})}>&deg;C</em>&nbsp;&nbsp;
                       <em style={{fontWeight:this.state.isCel ? 'lighter':'bolder'}} onClick={()=>this.setState({isCel:false})}>&deg;F</em>
                       <p>tmp :{this.state.isCel ? (this.state.weatherObj.main.temp-273).toFixed(2) : ((this.state.weatherObj.main.temp-273.15) * 9/5 + 32).toFixed(2)}</p>
                       <p>feels like :{this.state.isCel ? (this.state.weatherObj.main.feels_like-273).toFixed(2) : ((this.state.weatherObj.main.feels_like-273) * 9/5 + 32).toFixed(2)}</p>
                    </span> : this.state.errTxt
                }
            </div>
        </div>)
    }
    //#endregion
    render(){
        return(
            <div className="w-100 text-center" id="code-bg">
                <table className="table table-hover">
                        <tr data-toggle="collapse" data-target="#accordion1" className="bg-dark">
                            <th className="text-white">~ Design Patterns ~</th>
                        </tr>
                        <tr className="collapse" id="accordion1">
                            <td className="border w-100">
                            <table className="code-table">
                                <tr><th data-toggle="collapse" data-target="#code0">Singleton</th></tr>
                                <tr><td className="collapse" id="code0">blabla</td></tr>

                                <tr><th data-toggle="collapse" data-target="#code1">Strategy</th></tr>
                                <tr><td className="collapse" id="code1">
                                {this.getTxt()[0]}
                                <Gist url='https://gist.github.com/yudiKahn/302abfef409c23fc93f09c2c99c576f1'/>
                                </td></tr>

                                <tr><th data-toggle="collapse" data-target="#code2">Observer</th></tr>
                                <tr><td className="collapse" id="code2">blabla</td></tr>
                            </table>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion2" className="bg-dark">
                            <th className="text-white">~ D3.js ~</th>
                        </tr>
                        <tr className="p-3 collapse" id="accordion2">
                            <td className="border">
                                <iframe height="550" style={{width:'100%'}} scrolling="yes" title="FCC:ChoroplethMap" src="https://codepen.io/yudiK/embed/XWmmpeO?height=550&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
                                See the Pen <a href='https://codepen.io/yudiK/pen/XWmmpeO'target="_blank">FCC:ChoroplethMap</a> by yudi
                                (<a href='https://codepen.io/yudiK'target="_blank">@yudiK</a>) on <a href='https://codepen.io'target="_blank">CodePen</a>.
                                </iframe>

                                <iframe height="550" style={{width: '100%'}} scrolling="no" title="FCC:TreemapDiagram" src="https://codepen.io/yudiK/embed/MWaypaq?height=550&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
                                See the Pen <a href='https://codepen.io/yudiK/pen/MWaypaq' target="_blank">FCC:TreemapDiagram</a> by yudi
                                (<a href='https://codepen.io/yudiK' target="_blank">@yudiK</a>) on <a href='https://codepen.io' target="_blank">CodePen</a>.
                                </iframe>
                            </td>
                        </tr>
                        <tr data-toggle="collapse" data-target="#accordion3" className="bg-dark">
                            <th className="text-white">~ API's ~</th>
                        </tr>
                        <tr className="p-3 collapse" id="accordion3">
                        <td className="border w-100">
                            <table className="code-table">
                                 <tr><th data-toggle="collapse" data-target="#joke-tar">Get a Joke</th></tr>
                                 <tr><td className="collapse" id="joke-tar">{this.apiJoke()}</td></tr>
                                 <tr><th data-toggle="collapse" data-target="#weather-tar">Get a Weather</th></tr>
                                 <tr><td className="collapse" id="weather-tar">{this.apiWeather()}</td></tr>
                            </table>
                            </td>
                        </tr>
                </table>
            </div>
        )
    }
}
class Game extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.bg}} className="col flip-box p-0" onClick={this.props.click}>               
                <div className="flip-box-inner">
                    <div className="flip-box-front mt-1"> {this.props.data} </div>
                    <div className="flip-box-back bg-dark">
                        <img src="imgs/games-icon.png" alt="game icon" style={{width:'100%', height:'100%'}}></img>
                    </div>
               </div>
            </div>
        )
    }
}
class Games extends React.Component{
    constructor(props){
     super(props);
     this.state={
          myGames:['Speed Reading','Memory Cards','Snake','Memory Speed','State & Capital','TicTacToe'],        
          bg:['d9ed72','edd972','9b7df0','f0ad7d','fcc735','d86fed']
      }
    }
    handleClick(game){
      const comp=[<SpeedRead/>,<MemoryGame/>,<Snake/>,'',<StateCapital/>,<TicTacToe/>]
      const frame = document.querySelector('#gameframe');
      let i = this.state.myGames.indexOf(game);
      let src = comp[i];     
      ReactDOM.render(src,frame)
    }
    render(){
    return(
    <div className="w-100 p-5 row" id="games" style={{backgroundColor:'#f5efef'}}>
        <div id="gameframe"></div>
        <div className="r-games">
            {this.state.myGames.map((element,i)=> {
                return(<Game key={element} data={element} bg={'#'+this.state.bg[i]} 
                click={()=>this.handleClick(element)}/>)
            })}
        </div>
    </div>
    )}
}
//#region Games
class SpeedRead extends React.Component{
    constructor(props){
        super(props);
        this.state={
            txt:'Lorem ipsum dolor sit amet, conses, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
            ,seconds:0,
            cmd: 'Start',
            rnd: 'Center'
        }
    }
    uploadFile=()=>{
        document.getElementById('fileinput').click();
        document.getElementById('fileinput').addEventListener("change",()=>{
            if(document.getElementById('fileinput').files[0].type=='text/plain'){
                const reader = new FileReader();
                reader.onload = ()=> {
                    this.setState({txt: reader.result}) 
                };
                reader.readAsText(document.getElementById('fileinput').files[0]);
            }else
                alert('Please select a .txt file')          
        }, false);
    }
    change = async(event)=>{
        await this.setState({seconds: event.target.value});    
    }
    start=()=>{
        if(this.state.seconds==0||this.state.seconds=='NaN'){alert('Plaese Chosse Speed');return;}
        this.myInterval(this.state.cmd)
        this.setState({cmd: this.state.cmd=='Start'?'Stop':'Start'});
    }
    Interval=0;
    index=0;
    myInterval(cmd){
        let txt = this.state.txt.split(' ');
        if(cmd=='Start'){
          this.Interval=setInterval(()=>{                   
            document.getElementById('word').innerHTML=txt[this.index]
            document.getElementById('txt').innerHTML=txt.slice(0,this.index).join(' ')+'<a style="color:red;"> '+txt[this.index]+' </a>'+txt.slice(this.index+1,txt.length).join(' ');
            this.index=(this.index>txt.length-1)?0:this.index+1;
            if(this.state.rnd=='Random'){
                let w=document.getElementById('word');
                w.style.position="relative";
                w.style.display="inline";
                w.style.left = (Math.random()*(word.parentElement.offsetWidth-200)).toString()+'px';
                w.style.top = (Math.random()*(word.parentElement.offsetHeight-100)).toString()+'px';
            }
          },this.state.seconds)
        }else{
           clearInterval(this.Interval);
        }
    }
    render(){
        return(
            <div className="w-100 h-100">
             <div className="navbar navbar-expand-lg bg-dark  navbar-dark game-nav">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button> 
             <div className="collapse navbar-collapse" id="navbarContent">
             <input type="file" style={{display:'none'}} id="fileinput" accept=".txt"></input>
                <button className="btn btn-outline-info mx-5" onClick={this.uploadFile}>Upload File</button>
                <select onChange={this.change} className="form-control w-25" style={{display:'inline-block'}}>
                    <option value="NaN">Choose Speed :</option>
                    <option value="2000">2000ms</option>
                    <option value="1500">1500ms</option>
                    <option value="1000">1000ms</option>
                    <option value="800">800ms</option>
                    <option value="600">600ms</option>
                    <option value="400">400ms</option>
                    <option value="200">200ms</option>
                 </select>
                 <button onClick={this.start} className="btn btn-outline-info mx-5">{this.state.cmd}</button>
                 <button id="rnd" className="btn btn-outline-info"
                 onClick={()=>this.setState({rnd: this.state.rnd=='Random'?'Center':'Random'})}>{this.state.rnd}</button>
             </div>
             </div>
              <div className="text-center readiv rd-r"><h2>~ Text ~</h2><p id="txt">{this.state.txt}</p></div>                     
              <div className="readiv rd-l" style={{overflow: 'hidden'}}><h3 id="word"></h3></div>
            </div>
        )
    }
}
class MemoryGame extends React.Component{
  constructor(props){
      super(props);
      this.state={
          cards: 16,
          imgs:this.getImgs()
      }
  }
  getImgs(){
     let pre='https://cdn4.iconfinder.com/data/icons/programming-developer/512/programing-developer-programming-';
     let res=[ pre+"php-code-coding-language-512.png", pre+"B_logo-tools-512.png",
     pre+"sources-code-source-512.png",  pre+"A_logo-tools-512.png", 
     pre+"code-coding-programer-512.png", pre+"html-html5-logo-code-512.png",
     pre+"css-css3-logo-website-512.png", pre+"fire-program-software-512.png"];
     res.push(...res);
     return res.mix();
  }
  handleGameDone(){
     let cards = [...document.getElementsByClassName('memory-card')];
     let count=0;
     cards.map(d=> d.style.visibility=='hidden' ? ++count: 0 );
     if(count==this.state.cards){
        this.setState({imgs: this.getImgs()})
        ReactDOM.render(this.show() ,document.getElementById('mg-board'))
     }
  }
  handleClick(e, img){
     if(e.target.nodeName.toString() == "IMG")
       return;
     e.target.classList.add('mg-flipped');
     e.target.innerHTML=`<img src='${img}' style='max-width:99%;max-height:99%; margin-left:auto;margin-right:auto;'/>`;
     if(document.getElementsByClassName('mg-flipped').length==2){
        let flipped = [...document.getElementsByClassName('mg-flipped')];
        if(flipped[0].innerHTML==flipped[1].innerHTML) flipped.map(d=> setTimeout(()=>d.style.visibility='hidden',600));
        else  flipped.map(d=> setTimeout(()=>d.innerHTML='', 600));
        flipped.map(d=>d.classList.remove('mg-flipped'));    
     }  
     setTimeout(()=>this.handleGameDone(), 1000); 
  }
  show=()=>{
     let res=[];
     for(let i=0;i<this.state.cards;i++)
       res.push(<div className="memory-card" onClick={(e)=>this.handleClick(e,this.state.imgs[i])}></div>)
     return res.map(d=>d);
  }
  render(){
      return(<div className="bg-dark w-100 h-100" id="mg-board" style={{ overflowY:'auto'}}>
         <this.show/>
      </div>)
  }
}
class StateCapital extends React.Component{
    constructor(props){
        super(props);
        this.state={
            difficulty:[
                {ARGENTINA:'BUENOS AIRES',AUSTRIA:'VIENNA',BULGARIA:'SOFIA',CYPRUS:'NICOSIA',EGYPT:'CAIRO',LATVIA:'RIGA',JAPAN:'TOKYO',POLAND:'WARSAW',SWITZERLAND:'BERN',UKRAINE:'KIEV'},
                {ARMENIA:'YEREVAN',BELARUS:'MINSK',CHILE:'SANTIAGO',CUBA:'HAVANA',DENMARK:'COPENHAGEN',JAMAICA:'KINGSTON',KENYA:'NAIROBI',PERU:'LIMA',SOUTH_KOREA:'SEOUL',THAILAND:'BANGKOK'},
                {FIJI:'SUVA',GHANA:'ACCRA',AFGHANISTAN:'KABUL',BOTSWANA:'GABORONE',COSTA_RICA:'SAN JOSE',ECUADOR:'QUITO',MADAGASCAR:'ANTANANARIVO',PAKISTAN:'ISLAMABAD',TANZANIA:'DODOMA',UZBEKISTAN:'TASHKENT'}
            ], currentDiff:{}, phase:0, points:0
        }
    }
    
    write(txt) {
        document.getElementById('console').innerHTML+=`<p>${txt}</p>`;
    }
    unWrite(id){
        if(document.getElementById(id))
         document.getElementById(id).style.display='none';
    }
    getQuestions(difficulty){ 
        let res=[];    
        let q = this.state.difficulty[difficulty-1];
        let cap=Object.values(q); 
        let sta=Object.keys(q);
        let rndNums=[];
        cap.map((d,i)=>rndNums.push(i));
        rndNums = rndNums.mix();
        for(let i=0;i<rndNums.length;i++){
            let rndQ1=-1, rndQ2=-1;
            while((rndQ1==rndQ2) || (rndQ1==rndNums[i]) || (rndQ2==rndNums[i])){
                rndQ1=Math.floor(Math.random()*rndNums.length);
                rndQ2=Math.floor(Math.random()*rndNums.length);
            }
            let a = [cap[rndNums[i]], cap[rndQ1], cap[rndQ2]].mix();
            let c = a[a.indexOf(cap[rndNums[i]])];
            res.push({sta: sta[rndNums[i]], ans: a, cor: c });
        }
        return res;
    }
    componentDidMount(){
        document.onkeydown=this.handleKey;
        this.write('Hello. press enter to continue, c to clear & r to restart.')
        this.setState({phase: ++this.state.phase});//1
    }
    componentWillUnmount(){
        this.setState({points:0, currentDiff:{}, phase:0});
    }
    handleKey=(e)=>{
        if(e.key=='Enter' && this.state.phase==1){
            this.write('Select difficulty. (1, 2 or 3)')
            this.setState({phase: ++this.state.phase});//2
        }
        if(e.keyCode==67){
            let html=document.getElementById('console').innerText.split(/\r?\n/)
            document.getElementById('console').innerHTML=`${html[html.length-2]?html[html.length-2]:''}
            ${html[html.length-2]===""?'':'<br/>'}${html[html.length-1]}`;
        }
        if(e.keyCode==82){
            document.getElementById('console').innerHTML='Hello. press enter to continue, c to clear & r to restart.';
            this.setState({currentDiff:{}, phase:1, points:0});
        }
        if((e.key==1||e.key==2||e.key==3) && this.state.phase==2){
            this.write(`you chosen level ${e.key}.`);
            this.setState({phase: ++this.state.phase, currentDiff: this.getQuestions(e.key)});//3 
            return;
        }  
        let el = ( this.state.phase > 2 && this.state.phase < 13) ? `<span id='q${this.state.phase-3}'>
        ${this.state.currentDiff[this.state.phase-3].sta}<br/>
        ${this.state.currentDiff[this.state.phase-3].ans.map((d,i)=>`${i+1}. ${d}`)}</span>`:'';     
        if(this.state.phase==3){
            this.write(el);
            this.setState({phase: ++this.state.phase});
            return;
        }
        let start=3;
        let end=this.state.currentDiff.length-1 + 3;
        for(end; end>start; end--){
            if((e.key==1||e.key==2||e.key==3) && this.state.phase==end){
                this.unWrite(`q${this.state.phase-4}`);
                this.write(el);
                if(this.state.currentDiff[this.state.phase-4].ans.indexOf(this.state.currentDiff[this.state.phase-4].cor)==(e.key-1)){
                    this.setState({points: ++this.state.points})
                }
                this.setState({phase: ++this.state.phase});
                return;
            }
        }
        if((e.key==1||e.key==2||e.key==3) && this.state.phase==13){
            this.unWrite(`q${this.state.phase-4}`);
            if(this.state.currentDiff[this.state.phase-4].ans.indexOf(this.state.currentDiff[this.state.phase-4].cor)==(e.key-1)){
                this.setState({points: ++this.state.points})
            }
            this.write(`<h4 style='color:${this.state.points>5?'green':'red'}'>
            You Ansswerd ${this.state.points} out  Of ${this.state.currentDiff.length} Correct.</h4>`);         
            this.setState({phase: ++this.state.phase});
            return;
        }
        
    }
    render(){
        return( 
           <span style={{position:'relative'}}>
             <div className="w-100 text-left m-0 pl-2" style={{backgroundColor:'#ededd8', height:'25px'}}>Memory_Game.exe</div>
             <div id="console" className="w-100 bg-dark text-white p-3" style={{fontFamily:'Lucida Console', overflowY:'auto', maxHeight:'500px',position:'relative',height:'97%'}}> 
             </div>
           </span>
        );
    }
}
class TicTacToe extends React.Component{
  constructor(props){
      super(props);
      this.state={
          xIsNext: true,
          sumOfClicks:0
      }
  }
  isTheSame(one,two,thr){
      if(one.innerHTML==two.innerHTML && two.innerHTML==thr.innerHTML && !(one.innerHTML==''))
        return true;
      return false;
  }
  winner='';
  won(){
     let idArr=['a1','a2','a3','b1','b2','b3','c1','c2','c3'];
     let obj=[];
     idArr.map(d=>obj.push(document.querySelector('#'+d)));
     let check=[[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]];
     let count=0;
     check.map(d=>{
        (this.isTheSame(obj[d[0]], obj[d[1]], obj[d[2]]))? this.winner=obj[d[0]].innerHTML : ++count;
     })
     return count!==check.length;
  }
  board() {
    return(<div className="h-100 w-100">
    <div className="row w-75 h-25 m-auto">
        <button className="col m-1 btn btn-dark" id="a1" style={{fontWeight:'bold'}} onClick={this.fill}></button>
        <button className="col m-1 btn btn-dark" id="a2" style={{fontWeight:'bold'}} onClick={this.fill}></button>
        <button className="col m-1 btn btn-dark" id="a3" style={{fontWeight:'bold'}} onClick={this.fill}></button>
    </div>  
    <div className="row w-75 h-25 m-auto">
        <button className="col m-1 btn btn-dark" id="b1" style={{fontWeight:'bold'}} onClick={this.fill}></button>
        <button className="col m-1 btn btn-dark" id="b2" style={{fontWeight:'bold'}} onClick={this.fill}></button>
        <button className="col m-1 btn btn-dark" id="b3" style={{fontWeight:'bold'}} onClick={this.fill}></button>
    </div>
    <div className="row w-75 h-25 m-auto">
        <button className="col m-1 btn btn-dark" id="c1" style={{fontWeight:'bold'}} onClick={this.fill}></button>
        <button className="col m-1 btn btn-dark" id="c2" style={{fontWeight:'bold'}} onClick={this.fill}></button>
        <button className="col m-1 btn btn-dark" id="c3" style={{fontWeight:'bold'}} onClick={this.fill}></button>
    </div></div>)
    }
  fill=(x)=>{
    this.setState({sumOfClicks: ++this.state.sumOfClicks});
    if(x.target.innerHTML==''){
        x.target.innerHTML= this.state.xIsNext ? 'X' : 'O';
        this.setState({xIsNext: this.state.xIsNext ? false : true})
    }
    if(this.won() || this.state.sumOfClicks==9){
    ReactDOM.render(
    <span><h2>{this.state.sumOfClicks==9 ? `No Winner.` : `${this.winner} Won !`}</h2><br></br><button className="btn btn-dark" onClick={()=>{
            this.setState({xIsNext: true})
            ReactDOM.render(this.board(), document.querySelector('#ticTac'))}} >Go Back</button></span>
    ,document.querySelector('#ticTac'))
    }  
  }
  render(){
      return(<div className="w-100 h-100 py-5 text-center" id="ticTac">
        {this.board()}
      </div>)
  }
}
class Snake extends React.Component{
  constructor(props){
      super(props);
      this.state={  
          cellsPos:[[0,0],[20,0]],
          fooPos: this.getRndPos(),
          dir:'',  speed: 500
      }
  }
  getRndPos=()=>{
       let maxX = window.innerWidth > 1010 ? 680 : 480;
       let maxY = window.innerWidth >  500 ? 280 : 460;
       let posx=[];
       for(let i=0;i<maxX;i+=20){posx.push(i)}
       let posy=[];
       for(let i=0;i<maxY;i+=20){posy.push(i)}
       let x = posx[Math.floor(Math.random()*posx.length)];
       let y = posy[Math.floor(Math.random()*posy.length)];
       return [x,y];
  }
  fillFood=()=>{
      return <div className="snake-food" style={{left:`${this.state.fooPos[0]}px`,top:`${this.state.fooPos[1]}px`}}></div>
  }
  fillSnake(){
      let res = [];
      this.state.cellsPos.map(d=>res.unshift(<div className="snake-cell" style={{left:`${d[0]}px`, top:`${d[1]}px`}}></div>))      
      let head = res[0];
      head.props.className+=' snake-head';
      return res.map(d=>d);
  }
  componentDidMount=()=>{
     this.setState({fooPos:this.getRndPos()})
     document.onkeydown=this.onKeyPress;
     window.addEventListener('resize',()=>this.setState({fooPos:this.getRndPos()}))
  }
  componentWillUnmount(){
    document.onkeydown=()=>{}  
    clearInterval(this.int); clearInterval(this.int-1);
  }
  int=0;
  componentDidUpdate=()=>{
      this.int = setInterval(this.move, this.state.speed);
      clearInterval(this.int-1);
      this.onOutOfBorder();
      this.onEatSelf();
      this.onEatFood();
  }
  onKeyPress=(e)=>{
    if(e.keyCode)
      e.preventDefault();
    if(e.keyCode==37 || e=='l') this.setState({dir: 'left'});
    if(e.keyCode==38 || e=='u') this.setState({dir:  'up' });
    if(e.keyCode==39 || e=='r') this.setState({dir:'right'});
    if(e.keyCode==40 || e=='d') this.setState({dir: 'down'});
  }
  move=()=>{
      let cells=[...this.state.cellsPos];
      let head=cells[cells.length-1];
      if(this.state.dir=='right') head=[head[0]+20, head[1]];
      if(this.state.dir=='up')    head=[head[0], head[1]-20];
      if(this.state.dir=='left')  head=[head[0]-20, head[1]];
      if(this.state.dir=='down')  head=[head[0], head[1]+20];
      if(this.state.dir=='') return;
      cells.push(head);
      cells.shift();
      this.setState({cellsPos:cells});
  }
  onGameOver=()=>{     
    this.setState({cellsPos:[[0,0],[20,0]], fooPos:this.getRndPos(), dir:'', speed: 500});
    clearInterval(this.int);clearInterval(this.int-1);
  }
  onOutOfBorder=()=>{
      let head=this.state.cellsPos[this.state.cellsPos.length-1];
      const w = window.innerWidth > 1010 ? 680 : 480;
      const h = window.innerWidth >  500 ? 280 : 460;
      if(head[0] >  w || head[0]<0 || head[1]<0 || head[1] > h)
       this.onGameOver();
  }
  onEatSelf(){
      let cells=[...this.state.cellsPos];
      let head=cells[cells.length-1];
      cells.pop();
      cells.map(d=>{
          if(head[0]==d[0] && head[1]==d[1])
            this.onGameOver();
      })
  }
  onEatFood=()=>{
    let head=this.state.cellsPos[this.state.cellsPos.length-1];
    let food=this.state.fooPos;
    if(head[0]==food[0] && head[1]==food[1]){
        this.setState({fooPos:this.getRndPos()})
        let tmpCells = [...this.state.cellsPos];
        tmpCells.unshift([this.state.cellsPos[0][0], this.state.cellsPos[0][1]]);
        this.setState({cellsPos: tmpCells});
        let tmpSpeed = this.state.speed;
        tmpSpeed-=tmpSpeed<50?0:1;
        this.setState({speed: tmpSpeed});
    }
  }
  getBtn=()=>{
      return(
          <span className="w-100 h-100 m-0 p-0">
             <span><i style={{left:'40%',top:'46%'}} onClick={()=>this.onKeyPress('l')} className="fa fa-arrow-left snake-a"></i></span>
             <span><i style={{top:'40%'}} onClick={()=>this.onKeyPress('u')} className="fa fa-arrow-up snake-a"></i></span>
             <span><i style={{right:'35%',top:'46%'}} onClick={()=>this.onKeyPress('r')} className="fa fa-arrow-right snake-a"></i></span>
             <span><i style={{bottom:'40%'}} onClick={()=>this.onKeyPress('d')} className="fa fa-arrow-down snake-a"></i></span>
          </span>
      )
  }
  render(){ 
      return (<div className="bg-success" id="snake-bg" style={{position:'relative',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
         <h4 style={{position:'absolute',top:0,right:0, padding:'5px'}}>{this.state.cellsPos.length-2}</h4>
         <this.fillFood/>
         {this.fillSnake()}
         <this.getBtn/>
      </div>)
  }
}
//#endregion 
//init
(()=>{
if(document.getElementById('root').childElementCount==0){
    ReactDOM.render(<Home/>, document.getElementById('root'));
}
document.querySelector('.navbar-brand').addEventListener('click',()=>{
    ReactDOM.render(<Home/>, document.getElementById('root'))
})
document.getElementById('nav-comment').addEventListener('click',()=>{
    ReactDOM.render(<Comment/>, document.getElementById('root'))
})
document.getElementById('nav-cert').addEventListener('click',()=>{
    ReactDOM.render(<Certificate/>, document.getElementById('root'))
})
document.getElementById('nav-project').addEventListener('click',()=>{
    ReactDOM.render(<Projects/>, document.getElementById('root'))
}) })();

/*function HomeThr(){
   let projects = ['Pizza Store','Chabad House','Travel Agent'];
   let imgs=['https://hackernoon.com/hn-images/1*NqOyGKInDPoX4O0W_GmACw.jpeg',
   'http://i.cdn.travel.cnn.com/sites/default/files/styles/article_large/public/article-images/large/2009_12_02-bangkok-thailandcby-richard_s_ehrlich-IMG_7405PScp.jpg?itok=QUUIF2W5',
   'https://wishesandwandstravel.com/wp-content/uploads/2019/08/BD18-DM-03-Travel-Agent-Month-KCACYTA-Facebook-ABD-1-1024x1024.jpg']
   let getInfo = (txt, i) => {
      let flag=(i+2)%2;
      let res = [<div className="col">{txt}</div>,<a href="/views/construction.html" target="_blank"><img className="col project-img" src={imgs[i]} alt={txt}></img></a>]
      res = flag? res : res.reverse();
      return res.map(d=>d);
   };
   return(<div id="projects" className="w-100 text-center text-dark p-4 about" style={{backgroundColor:'#f5efef'}}>
       <h1>- Portfolio -</h1>
        {
            projects.map((d,i)=><div className="row p-3" style={{borderTop:'0.7px solid #dcdedc'}}>
                { getInfo(d,i) }
            </div>)
        }
   </div>)
}
function HomeFor(){
    return( <div className="carousel p-4">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-item active w-100 h-100">
            <h2 className="h2-c" style={{color: 'black'}} onClick={()=> ReactDOM.render(<Games/>, document.getElementById('root'))}>
                    My <img style={{width:'80px',transform:'scaleX(-1)'}} src="imgs/chess-icon.svg"></img>Games
            </h2>
            <img src="imgs/chess-board.png" className="img-c" alt="chess board"></img>
            </div>
            <div className="carousel-item w-100 h-100">
            <h2 className="h2-c" onClick={()=> ReactDOM.render(<Code/>, document.getElementById('root'))}> &lt; My Code /&gt;  </h2>
                <img src="imgs/macbook.jpg" className="img-c" alt="Third slide"></img>
            </div>
        </div>
   </div>);
}*/
