import React, { useEffect, useState } from 'react';
import MySkillsImg from '../MySkillsImg/MySkillsImg';

const MySkills = () => {
   
  const [skills, setSkills] = useState([])

  useEffect(() => {
    fetch('skills.json')
    .then(res => res.json())
    .then(data => setSkills(data))
  },[])

  return (
    <div className='text-white bg-base-200 mb-5'>
      <h3 className='text-center text-2xl mt-5 text-cyan-300'>Let Me Intro My Skills</h3>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-start lg:text-left sm:text-start w-full lg:w-1/3">
            <h1 className="text-2xl text-cyan-300 font-semibold">My Skills</h1>
            <p className="py-3 text-lg"> I have experiences in HTML, CSS, JavaScript, Bootstrap, Tailwinds CSS, React JS, Node JS, MongoDB and Firebase. Passionate about coding. Love to learn new technology and implement it in real life. I would like to shear my ideas and experiences in a creative ways.</p>

            <a href="https://www.linkedin.com/in/md-kowsar-ahammed-b425a2257/" className='mr-5'>
              <button className='btn bg-teal-600 text-white'>Hire Me</button>
            </a>

          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl">
            <div className="card-body grid grid-cols-3">

              {
                skills.map(skill => <MySkillsImg
                 key={skill.id}
                 skillData={skill}
                >
                </MySkillsImg>)
              }

              {/* range */}
              {/* <label>React JS</label>
              <div className='flex items-center'>
                <input type="range" min="0" max="100" value="85" className="range range-xs" /> <span className='ml-2'>85%</span>
              </div>
              <label>JavaScript</label>
              <div className='flex items-center'>
                <input type="range" min="0" max="100" value="80" className="range range-xs" /> <span className='ml-2'>80%</span>
              </div>
              <label>Node JS</label>
              <div className='flex items-center'>
                <input type="range" min="0" max="100" value="75" className="range range-xs" /> <span className='ml-2'>75%</span>
              </div>
              <label>HTML</label>
              <div className='flex items-center'>
                <input type="range" min="0" max="100" value="99" className="range range-xs" /> <span className='ml-2'>99%</span>
              </div>
              <label>Vanilla CSS</label>
              <div className='flex items-center'>
                <input type="range" min="0" max="100" value="75" className="range range-xs" /> <span className='ml-2'>80%</span>
              </div>

              <label>Bootstrap</label>
              <div className='flex items-center'>
                <input type="range" min="0" max="100" value="95" className="range range-xs" /> <span className='ml-2'>95%</span>
              </div>

              <label>Tailwind CSS</label>
              <div className='flex items-center'>
                <input type="range" min="0" max="100" value="75" className="range range-xs" /> <span className='ml-2'>75%</span>
              </div> */}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;