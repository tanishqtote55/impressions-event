import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [data, setData] = useState([]);
  const [itemActive, setItemActive] = useState(0);
  const [refreshInterval, setRefreshInterval] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading JSON data:', error));
  }, []);

  useEffect(() => {
    if (refreshInterval) {
      clearInterval(refreshInterval);
    }

    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);
    setRefreshInterval(interval);

    return () => clearInterval(interval);
  }, [itemActive]);

  const handleNextClick = () => {
    setItemActive((prevItemActive) => (prevItemActive + 1) % data.length);
  };

  const handlePrevClick = () => {
    setItemActive((prevItemActive) => (prevItemActive - 1 + data.length) % data.length);
  };

  const handleThumbnailClick = (index) => {
    setItemActive(index);
  };

  return (
    <div className="slider relative">
      <div className="list flex overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`item w-full flex-shrink-0 transition-all duration-500 ease-in-out ${
              index === itemActive ? 'active' : ''
            }`}
          >
            <img src={item.image} alt={item.title} className="w-full h-auto" />
            <div className="content p-4">
              <p>{item.category}</p>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={handlePrevClick}
          className="text-white bg-gray-800 rounded-full p-2"
        >
          &#60;
        </button>
      </div>
      <div className="arrows absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={handleNextClick}
          className="text-white bg-gray-800 rounded-full p-2"
        >
          &#62;
        </button>
      </div>

      <div className="thumbnail mt-4 flex justify-center space-x-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`item cursor-pointer transition-all duration-300 ${
              index === itemActive ? 'active' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
            <div className="content text-center">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
