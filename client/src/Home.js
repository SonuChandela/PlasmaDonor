import React from 'react';
import Head from './Header';
import Banner from "./Banner.js";
import Bgroup from "./Bloodgroup.js";
import Recentrequestlist from "./Recentrequest.js";
import Donorslist from "./Recentdonors.js";
import Condition from "./Condition.js";
import Footer from "./Footer.js"

const Home = () => {
    return(
        <>
            <Head/>
              <Banner/>
              <Bgroup/>
              <Recentrequestlist/>
              <Condition/>
              <Donorslist/>
              <Footer/>
        </>
    );
}


export default Home;