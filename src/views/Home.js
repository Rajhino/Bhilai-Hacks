import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Dashbord from '../components/layout/Dashbord';

import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Dashbord/>
      <FeaturesTiles />
      <Cta split />
      
    </>
  );
}

export default Home;