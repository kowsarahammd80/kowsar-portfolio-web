import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded ">
      <div className="grid grid-flow-col gap-4 text-white">
        <a className="link link-hover" href='#about'>About us</a>
        <a className="link link-hover" href='#contact'>Contact</a>
        <a className="link link-hover" href='#skill'>My Skills</a>
        {/* <a className="link link-hover" >My Projects</a> */}
        <Link className="link link-hover" to='/projects'>My Projects</Link>
      </div>

      <div>
        <div className="grid grid-flow-col gap-4 text-white">
          <a href='https://www.linkedin.com/in/md-kowsar-ahammed-b425a2257/'><i class="fa-brands social fa-linkedin"></i></a>
          <a href='https://www.facebook.com/KawsarAhamedShuvo1/'><i class="fa-brands social fa-facebook"></i></a>
          <a href='https://www.instagram.com/loading_shuvo/'><i class="fa-brands social fa-instagram"></i></a>
          <a href='https://github.com/kowsarahammd80'><i class="fa-brands social fa-github"></i></a>
        </div>
      </div>

      <div className='text-white'>
        <p>Copyright © 2022 - All right reserved by MD.Kowsar Ahammed</p>
      </div>
    </footer>
  );
};

export default Footer;