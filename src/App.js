import React, { useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Login from './Login';

function App() {
  const [user, setUser] = useState(null)

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />  
            <Switch>
              {/* /:roomId - its a wildcard, can be anything */}
              <Route path="/rooms/:roomId"> 
                <Chat />
              </Route>

              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
      </div>
      )}
    </div>
  );
}

export default App;
