import React from 'react'
import './App.css';
import Home from './pages/Home';
import Head from './components/Header';
import Foot from "./components/Footer";
import List from './pages/List';
import Enrol from './components/Register';
import { BrowserRouter,Route, Switch   } from "react-router-dom";

function App() {

  return (
          <>
            <div className="bg-body">
              <BrowserRouter>
                <Head/> 
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/list/:rquesttype" component={List}/>
                    <Route exact path="/Register" component={Enrol}/>
                  </Switch>
                <Foot/>
              </BrowserRouter>
            </div>
         </>
  );
}

export default App;
