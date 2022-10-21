import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import NavTab from './NavTab/NavTab';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import AboutProject from './AboutProject/AboutProject';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main >
  )
}

export default Main;