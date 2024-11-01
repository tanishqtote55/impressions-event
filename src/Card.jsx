import React from 'react';

function Card({ title, description, image, logo }) {
  return (
    <div className="card-container flex items-center justify-center w-[250px] h-[300px] m-2 opacity-0 transform translate-y-5 animate-fadeInCard delay-[500ms]">
      <div className="card w-full h-full border border-gray-300 rounded-lg shadow-lg relative overflow-hidden group">
        <div
          className="card-image w-full h-full bg-cover bg-center transition-filter duration-300 group-hover:filter-blur"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Logo that appears from the top on hover */}
        <div className="card-logo absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-20">
          <img src={logo} alt="logo" className="w-12 h-12" />
        </div>

        <h2 className="card-title font-sans text-white text-xl absolute bottom-[100px] left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-transform duration-300 group-hover:transform group-hover:-translate-y-[30px] z-10">
          {title}
        </h2>

        <div className="card-overlay absolute bottom-0 w-full text-center bg-red-300/80 text-black text-lg opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
