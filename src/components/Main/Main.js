import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import AboutProject from './AboutProject/AboutProject';

function Main() {
  return (
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main >
  )
}

export default Main;