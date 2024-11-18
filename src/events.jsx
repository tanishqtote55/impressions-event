// import React, { useEffect, useRef, useState} from 'react';
// import './events.css';

// function events() {
//     // State to track the active item
//     const [itemActive, setItemActive] = useState(0);
    
//     // Refs for slider items, next and prev buttons, and thumbnails
//     const sliderRef = useRef(null);
//     const nextRef = useRef(null);
//     const prevRef = useRef(null);
//     const thumbnailRef = useRef(null);
    
//     // Get all items and thumbnails (using refs)
//     const items = sliderRef.current ? sliderRef.current.querySelectorAll('.slider .list .item') : [];
//     const thumbnails = thumbnailRef.current ? thumbnailRef.current.querySelectorAll('.thumbnail .item') : [];
    
//     const countItem = items.length; // Number of items in the slider

//     // Effect to setup the interval and button click handlers
//     useEffect(() => {
//         if (!sliderRef.current || !thumbnailRef.current || !nextRef.current || !prevRef.current) return;

//         // Function to show the slider and set active classes
//         const showSlider = () => {
//             const itemActiveOld = document.querySelector('.slider .list .item.active');
//             const thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
//             if (itemActiveOld) itemActiveOld.classList.remove('active');
//             if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');
            
//             // Set the new active item
//             items[itemActive].classList.add('active');
//             thumbnails[itemActive].classList.add('active');
//             setPositionThumbnail();
            
//             // Clear and reset the interval for auto-slide
//             clearInterval(refreshInterval);
//             setRefreshInterval(setInterval(() => {
//                 nextRef.current.click();
//             }, 5000));
//         };

//         // Function to set the thumbnail position
//         const setPositionThumbnail = () => {
//             const thumbnailActive = document.querySelector('.thumbnail .item.active');
//             const rect = thumbnailActive.getBoundingClientRect();
//             if (rect.left < 0 || rect.right > window.innerWidth) {
//                 thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
//             }
//         };

//         // Click event for next button
//         const nextClick = () => {
//             setItemActive((prevActive) => {
//                 const newActive = prevActive + 1;
//                 return newActive >= countItem ? 0 : newActive;
//             });
//             showSlider();
//         };

//         // Click event for prev button
//         const prevClick = () => {
//             setItemActive((prevActive) => {
//                 const newActive = prevActive - 1;
//                 return newActive < 0 ? countItem - 1 : newActive;
//             });
//             showSlider();
//         };

//         // Auto-run slider with setInterval
//         let refreshInterval = setInterval(() => {
//             nextClick();
//         }, 5000);

//         // Attach event listeners to buttons
//         if (nextRef.current && prevRef.current) {
//             nextRef.current.addEventListener('click', nextClick);
//             prevRef.current.addEventListener('click', prevClick);
//         }

//         // Cleanup event listeners and interval
//         return () => {
//             clearInterval(refreshInterval);
//             if (nextRef.current && prevRef.current) {
//                 nextRef.current.removeEventListener('click', nextClick);
//                 prevRef.current.removeEventListener('click', prevClick);
//             }
//         };
//     }, [itemActive, countItem]);

//     // Effect to handle the thumbnail click event
//     useEffect(() => {
//         thumbnails.forEach((thumbnail, index) => {
//             thumbnail.addEventListener('click', () => {
//                 setItemActive(index);
//                 showSlider();
//             });
//         });

//         // Cleanup event listeners
//         return () => {
//             thumbnails.forEach((thumbnail) => {
//                 thumbnail.removeEventListener('click', () => {});
//             });
//         };
//     }, [thumbnails]);
//     return (
//         <div className="body">
//             <header>
//                 <div className="logo">Lundev</div>
//                 <ul className="menu">
//                     <li>Home</li>
//                     <li>Blog</li>
//                     <li>Info</li>
//                 </ul>
//                 <div className="search">
//                     <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                     </svg>
//                 </div>
//             </header>

//             <div className="slider">
//                 <div className="list">
//                     <div className="item active">
//                         <img src="/image/img1.png" />
//                         <div className="content">
//                             <p>design</p>
//                             <h2>Slider 01</h2>
//                             <p>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img src="/image/img2.jpg" />
//                         <div className="content">
//                             <p>design</p>
//                             <h2>Slider 02</h2>
//                             <p>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img src="/image/img3.jpg" />
//                         <div className="content">
//                             <p>design</p>
//                             <h2>Slider 03</h2>
//                             <p>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img src="/image/img4.jpg" />
//                         <div className="content">
//                             <p>design</p>
//                             <h2>Slider 04</h2>
//                             <p>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img src="/image/img5.jpg" />
//                         <div className="content">
//                             <p>design</p>
//                             <h2>Slider 05</h2>
//                             <p>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="arrows">
//                     <button id="prev">&lt;</button>
//                     <button id="next">&gt;</button>
//                 </div>

//                 <div className="thumbnail">
//                     <div className="item active">
//                         <img src="/image/img1.png" />
//                         <div className="content">
//                             Name Slider
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img src="/image/img2.jpg" />
//                         <div className="content">
//                             Name Slider
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img src="/image/img3.jpg" />
//                         <div className="content">
//                             Name Slider
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img src="/image/img4.jpg" />
//                         <div className="content">
//                             Name Slider
//                         </div>
//                     </div>
//                     <div className="item">
//                         <img src="/image/img5.jpg" />
//                         <div className="content">
//                             Name Slider
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default events;

import React, { useState, useEffect } from 'react';
import './events.css';

function Events() {
    const [itemActive, setItemActive] = useState(0); // Track the active item
    const [intervalId, setIntervalId] = useState(null); // Store the interval for auto-slide

    const items = [
        { img: '/image/img1.png', title: 'Slider 01', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img2.jpg', title: 'Slider 02', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img3.jpg', title: 'Slider 03', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img4.jpg', title: 'Slider 04', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img5.jpg', title: 'Slider 05', content: 'Lorem ipsum dolor sit amet...' },
    ];

    const thumbnails = items.map((item, index) => ({
        ...item,
        active: index === itemActive,
    }));

    // Effect to start auto-sliding
    useEffect(() => {
        const id = setInterval(() => {
            setItemActive((prevActive) => (prevActive + 1) % items.length);
        }, 5000);

        setIntervalId(id);

        return () => clearInterval(id); // Cleanup interval on component unmount
    }, [itemActive]);

    // Click handler for next button
    const handleNextClick = () => {
        setItemActive((prevActive) => (prevActive + 1) % items.length);
    };

    // Click handler for prev button
    const handlePrevClick = () => {
        setItemActive((prevActive) => (prevActive - 1 + items.length) % items.length);
    };

    // Click handler for thumbnails
    const handleThumbnailClick = (index) => {
        setItemActive(index);
    };

    return (
        <div className="body">
            <header>
                <div className="logo">Lundev</div>
                <ul className="menu">
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Info</li>
                </ul>
                <div className="search">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
            </header>

            <div className="slider">
                <div className="list">
                    {items.map((item, index) => (
                        <div className={`item ${index === itemActive ? 'active' : ''}`} key={index}>
                            <img src={item.img} alt={item.title} />
                            <div className="content">
                                <p>design</p>
                                <h2>{item.title}</h2>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="arrows">
                    <button onClick={handlePrevClick}>&lt;</button>
                    <button onClick={handleNextClick}>&gt;</button>
                </div>

                <div className="thumbnail">
                    {thumbnails.map((thumbnail, index) => (
                        <div
                            className={`item ${thumbnail.active ? 'active' : ''}`}
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                        >
                            <img src={thumbnail.img} alt={thumbnail.title} />
                            <div className="content">Name Slider</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;
