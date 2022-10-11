import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import NavTab from './NavTab/NavTab';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import AboutProject from './AboutProject/AboutProject';
import Header from './Header/Header';

function Main() {
  // function cardLikeClick(cardInfo) {
  //   onCardLike(cardInfo);
  // }
  // function cardDelete(cardInfo) {
  //   onCardDelete(cardInfo);
  // }
  return (
    <main>
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main >
  )
}

export default Main;