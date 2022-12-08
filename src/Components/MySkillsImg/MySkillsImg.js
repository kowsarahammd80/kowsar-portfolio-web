import React from 'react';
import './MySkillsImg.css'

const MySkillsImg = ({skillData}) => {

  const {img, name} = skillData

  return (
    
        <img src={img} alt="" className='skills-img' />
    
  );
};

export default MySkillsImg;