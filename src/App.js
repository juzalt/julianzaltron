import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SecureMessaging from './components/SecureMessaging';
import Meliadr from './components/Meliadr';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/secure-messaging" component={SecureMessaging}/>
        <Route exact path="/meliadr" component={Meliadr}/>
      </Router>
    </>
  );
}

export default App;
