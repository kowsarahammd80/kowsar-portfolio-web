import React from 'react';
import { Link } from 'react-router-dom';
import MyProjects from '../../Components/MyProjects/MyProjects';

const MyProgectsPages = ({len}) => {
  return (
    <div className=''>
      
        <MyProjects len={3}></MyProjects>
      
        
        <div className='flex justify-center mb-5'>
           <Link to='/projects' className=''>
             <button className='btn bg-teal-600  text-white text-semibold'>See All Projects</button>
           </Link>
        </div>

    </div>
  );
};

export default MyProgectsPages;