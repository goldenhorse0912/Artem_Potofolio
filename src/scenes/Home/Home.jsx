import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';
import SectionBG from '../../components/UIElements/SectionBG/SectionBG';
import React, { useEffect } from 'react';
const Home = () => {

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("You've reached the bottom of the page!");
      // Place your event handler code here
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);

  return (
    
    <HomeLayout>
      <SectionBG>
        <MainSection />
      <IntroSection />
      </SectionBG>

    </HomeLayout>
  );
};

export default Home;
