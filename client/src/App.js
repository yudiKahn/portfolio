import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
/*Custom Components*/
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Sidebar from './components/layout/Sidebar';

function App() {
  const [lang, setLang] = useState('he');

  return (<Router>
      <Navbar lang={lang}/>
      <Sidebar setLang={setLang} lang={lang}/>
      <Route path="/" exact render={()=><Home lang={lang}/>}/>
      <Switch>

      </Switch>
      <Footer/>
  </Router>);
}

export default App;
