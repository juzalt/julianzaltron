import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SecureMessaging from './components/SecureMessaging';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/secure-messaging" component={SecureMessaging}/>
      </Router>
    </>
  );
}

export default App;
