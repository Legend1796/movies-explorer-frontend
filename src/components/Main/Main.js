import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import NavTab from './NavTab/NavTab';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import AboutProject from './AboutProject/AboutProject';

function Main() {
  // function cardLikeClick(cardInfo) {
  //   onCardLike(cardInfo);
  // }
  // function cardDelete(cardInfo) {
  //   onCardDelete(cardInfo);
  // }
  return (
    <main>
      <Promo />
      <NavTab />
      <Techs />
      <AboutProject />
      <AboutMe />
      <Portfolio />
    </main >
  )
}

export default Main;