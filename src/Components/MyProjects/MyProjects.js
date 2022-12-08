import React, { useEffect, useState } from 'react';
import MyprojectsDisplay from '../MyProjectsDisplay/MyprojectsDisplay';

const MyProjects = ({ len }) => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('myProjects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  let length = 0;
  !len ? length = projects.length : length = len;

  return (
    <div>
      
      <h1 className='text-xl text-center mt-5 text-cyan-300 mb-8'>My Projects</h1>

      <div className='mx-3 lg:mx-0 mt-5 mb-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
        {
          projects.slice(0, length).map(project => <MyprojectsDisplay
            key={project.id}
            projectData={project}
          ></MyprojectsDisplay>)
        }

      </div>

    </div>
  );
};

export default MyProjects;