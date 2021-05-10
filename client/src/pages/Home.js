import React from 'react';
import Banner from "../components/Banner";
import Bgroup from "../components/Bloodgroup.js";
import Recentrequestlist from "../components/Recentrequest.js";
import Donorslist from "../components/Recentdonors.js";
import Condition from "../components/Condition.js";

const Home = () => {

    return(
        <>
              <Banner/>
              <Bgroup/>
              <Recentrequestlist/>
              <Condition/>
              <Donorslist/>
        </>
    );
}


export default Home;