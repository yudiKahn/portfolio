import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
/*Custom Components*/
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Sidebar from './components/layout/Sidebar';
import Certificates from './components/layout/Certificates';
import Spinner from './components/layout/Spinner';

function App() {
  const [lang, setLang] = useState('he');
  const [ready, setReady] = useState(false);

  useEffect(()=>{
    setTimeout(() => setReady(true), 1000);
  }, [ready]);
  
  return (<Router>
      <Spinner ready={ready}/>
      <Navbar lang={lang}/>
      <Sidebar setLang={setLang} lang={lang}/>
      <Route path="/" exact render={()=><Home lang={lang}/>}/>
      <Switch>
          <Route path="/Certificates" exact render={()=><Certificates/>}/>
      </Switch>
      <Footer/>
  </Router>);
}

export default App;
