import React from 'react';
import './Nvebar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const navbar = <>
  
    <li className='font-semibold text-orange-300'>
      <Link to='/'>Home</Link>
    </li>
    <li className='font-semibold text-orange-300'>
      {/* <Link to='/about'>About Me</Link> */}
      <a href='#about'>About Me</a>
    </li>
    <li className='font-semibold text-orange-300'>
      <Link to='/skills'>My Skills</Link>
      {/* <a href='#skills'>My Skills</a> */}
    </li>
    <li className='font-semibold text-orange-300'>
      <Link to='/projects'>My Projects</Link>
    </li>

    <li className='font-semibold text-orange-300'>
      <Link to='/contact'>Contact Me</Link>
      {/* <a href='#contact'>Contact Me</a> */}
    </li>
  
  </>

  return (
    <div className="navbar bg-base-100 navbar-fixed">
      <div className="navbar-start">
        <div className="dropdown text-white">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            {navbar}

          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl text-white"><span className='text-orange-400'>P</span>ortfolio</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          
          {navbar}
          
        </ul>
      </div>
      <div className="navbar-end text-white">
        <a href="https://drive.google.com/uc?export=download&id=1U-l2d0GwEvI9VN7jn-hv9scwfPPh1RwL" download='MD.Kowsar Ahammed Resume' className="btn bg-teal-600 text-white font-semibold">My Resume</a>
      </div>
    </div>
  );
};

export default Navbar;