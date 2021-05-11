import React from 'react';
import '../globcss/App.css';
import Home from '../pages/Home';
import Head from './Common/Header';
import Foot from './Common/Footer';
import List from '../pages/List';
import Enrol from './Register/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="bg-body">
        <BrowserRouter>
          <Head />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list/:rquesttype" component={List} />
            <Route exact path="/Register" component={Enrol} />
          </Switch>
          <Foot />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
