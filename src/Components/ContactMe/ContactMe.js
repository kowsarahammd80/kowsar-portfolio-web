import React from 'react';

const ContactMe = () => {
  return (
    <div>
      <h1 className='text-2xl text-cyan-400 text-center font-semibold'>Get In Touch</h1>
      <div className="hero bg-base-200 mb-5">
        <div className="hero-content flex-col lg:flex-row-reverse text-white">
          <div className="text-center lg:text-left">
            <div className=' text-center mt-1 mb-2'>
              <h1 className="text-2xl font-bold">
              <span><i class="fa-solid fa-envelope"></i></span>
                 kowsarahammed80@gmail.com</h1>
            </div>
            <div className=' text-center mt-1 mb-2'>
              <h1 className="text-2xl font-bold p-2 "> <span><i class="fa-solid fa-phone"></i></span> +880176-0075031</h1>
            </div>
            <div className=' text-center mt-1 mb-2'>
              <h1 className="text-2xl font-bold p-2"> <i class="fa-solid fa-location-dot"></i> Dokkhin Ananda Nagar Badda, Dahak-1212 </h1>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl ">
            <div className="card-body">
              <form action="">
                <div className="form-control text-white">
                  <label className="label">
                    <span className="label-text text-white">Your Name</span>
                  </label>
                  <input type="text" placeholder="Your Name" className="input input-bordered" />
                </div>
                <div className="form-control text-white">
                  <label className="label">
                    <span className="label-text text-white">Your Email</span>
                  </label>
                  <input type="text" placeholder="Your Email" className="input input-bordered" />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-white">Your Message</span>
                  </label>
                  <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white font-semibold">Send Me</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;