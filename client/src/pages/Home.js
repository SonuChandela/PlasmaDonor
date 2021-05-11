import React from 'react';
import Banner from '../components/Banner/Banner';
import Bgroup from '../components/BloodGroup/Bloodgroup.js';
import Recentrequestlist from '../components/RecentRequest/Recentrequest.js';
import Donorslist from '../components/RecentDonors/Recentdonors.js';
import Condition from '../components/TermAndCondition/Condition.js';

const Home = () => {
  return (
    <>
      <Banner />
      <Bgroup />
      <Recentrequestlist />
      <Condition />
      <Donorslist />
    </>
  );
};

export default Home;
