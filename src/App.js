import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SecureMessaging from './components/SecureMessaging';
import Keybase from './components/Keybase';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/secure-messaging" component={SecureMessaging}/>
        <Route exact path="/keybase.txt" component={Keybase}/>
      </Router>
    </>
  );
}

export default App;
