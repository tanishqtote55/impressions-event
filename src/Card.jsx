import React from 'react';

function Card({ title, description, image }) {
  return (
    <div className="card-container flex items-center justify-center w-[250px] h-[300px] m-2 opacity-0 transform translate-y-5 animate-fadeInCard delay-[500ms]">
      <div className="card w-full h-full border border-gray-300 rounded-lg shadow-lg relative overflow-hidden group">
        <div
          className="card-image w-full h-full bg-cover bg-center transition-filter duration-300 group-hover:filter-blur"
          style={{ backgroundImage: `url(${image})` }}
        />
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
