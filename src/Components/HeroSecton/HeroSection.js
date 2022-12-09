import React from 'react';
import './HeroSection.css'
import banner from '../../assets/banne-2.png'
import TypeWriterEffect from 'react-typewriter-effect';

const HeroSection = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen text-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-start lg:text-left lg:w-1/2">
            <h1 className="text-2xl font-bold"><span className='text-orange-400'>Hi</span>, Myself</h1>
            <h1 className="text-4xl font-semibold">Md.Kowsar Ahammed</h1>

            <div className='text-2xl flex items-center lg:items-center'>

              
                <h1 className="text-2xl text-orange-200 font-bold mt-2">
                  I am a
                </h1>
              
              
                <h1 className='font-semibold mt-3 ml-2'>

                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: 'Red Hat Display',
                      color: '#FED7AA',
                      fontWeight: 500,
                      fontSize: '1em',
                    }}
                    startDelay={2000}
                    cursorColor="#FFFFFF"
                    multiText={[
                      'Web developer.',
                      'React JS Developer.',
                    ]}
                    multiTextDelay={1500}
                    typeSpeed={65}
                    multiTextLoop
                  />

                </h1>
              

            </div>



            <p className="py-3 text-lg">Passionate about coding.
              Love to learn new technology and implement it in real
              life. I would like to share my ideas and experiences in a
              creative ways.</p>
            <div className='flex justify-start lg:justify-start md:justify-center justify-center'>
              <a href="https://www.linkedin.com/in/md-kowsar-ahammed-b425a2257/" className='mr-5'>
                <button className='btn bg-teal-600 text-white'>Contact Me</button>
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1U-l2d0GwEvI9VN7jn-hv9scwfPPh1RwL">
                <button className='btn bg-teal-600 text-white'>My Resume</button>
              </a>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">

              <img src={banner} className="max-w-sm rounded-lg shadow-2xl hero-image-size" alt='' />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;