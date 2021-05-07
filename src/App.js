import React from 'react'
import './App.css';
import Home from './Home';
import List from './List';
import Enrol from './Register';
import { BrowserRouter,Route, Switch   } from "react-router-dom";

function App() {

  return (
          <>
            <div className="bg-body">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/list/:user" component={List}/>
                  <Route exact path="/Register" component={Enrol}/>
                </Switch>
              </BrowserRouter>
            </div>
         </>
  );
}

export default App;
