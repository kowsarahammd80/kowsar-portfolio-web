import React from 'react';

const MyprojectsDisplay = ({ projectData }) => {

  const { img, name, codeLink,liveLink } = projectData

  return (

    <div className="card w-96 shadow-xl image-full mt-5 mb-5">
      <figure><img src={img} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <a href={codeLink}>
            <button className="btn btn-primary btn-sm">Source Code</button></a>
          <a href={liveLink}>
            <button className="btn btn-warning btn-sm">Live Preview</button>
          </a>
        </div>

      </div>
    </div>



  );
};

export default MyprojectsDisplay;