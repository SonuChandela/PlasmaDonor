import React, { useState, useEffect } from 'react';
// import '../globcss/App.css';
import Home from '../pages/Home';
import Head from './Common/Header';
import Foot from './Common/Footer';
import List from '../pages/List';
import Enrol from './Register/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from "axios";

function App() {
  let [users, setUsers] = useState('');
  let [request, setRequest] = useState('');
  let [donor, setDonor] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => {
        let list = res.data.Users;
        setUsers(users => list);
        return list;
      }).then(users => {
        let filterRequest = [];
        let filterDonor = [];
        for (let filterUser of users) {
          let userUndefined = (filterUser.usertype === undefined || filterUser.usertype === "") ? null : "define"
          if (userUndefined === "define" && filterUser.usertype.toLowerCase().includes("request")) {
            filterRequest.push(filterUser);
            setRequest(request => filterRequest);
          } else if (userUndefined === "define" && filterUser.usertype.toLowerCase().includes("donate")) {
            filterDonor.push(filterUser);
            setDonor(donor => filterDonor);
          }
        }
      })
  }, []);
  return (
    <>
      <div className="bg-body">
        <BrowserRouter>
          <Head />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list/:rquesttype" render={() => <List userData={users} requestData={request} donorData={donor} />} />
            <Route exact path="/Register" component={Enrol} />
          </Switch>
          <Foot />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
