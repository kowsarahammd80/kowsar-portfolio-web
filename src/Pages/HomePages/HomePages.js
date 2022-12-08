import React from 'react';
import Home from '../../Components/Home/Home';
import AboutPages from '../AboutPages/AboutPages';
import ContactMePages from '../ContactMePages/ContactMePages';
import MyProgectsPages from '../MyProgectsPages/MyProgectsPages';
import MySkillPages from '../MySkillPages/MySkillPages';

const HomePages = () => {
  return (
    <div>
       <Home></Home>
       <AboutPages></AboutPages>
       <MySkillPages></MySkillPages>
       <MyProgectsPages></MyProgectsPages>
       <ContactMePages></ContactMePages>
    </div>
  );
};

export default HomePages;