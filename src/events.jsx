import React, { useState, useEffect } from 'react';
import './events3.css';

function Events() {
    const [itemActive, setItemActive] = useState(0); // Track the active item
    const [intervalId, setIntervalId] = useState(null); // Store the interval for auto-slide

    const items = [
        { img: '/image/img1.png', title: 'Slider 01', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img2.jpg', title: 'Slider 02', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img3.jpg', title: 'Slider 03', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img4.jpg', title: 'Slider 04', content: 'Lorem ipsum dolor sit amet...' },
        { img: '/image/img5.jpg', title: 'Slider 05', content: 'Lorem ipsum dolor sit amet...' },
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

    useEffect(() => {
        if (window.innerWidth <= 800) { // Adjust for mobile view
            const activeThumbnail = document.querySelector('.thumbnail .item.active');
            if (activeThumbnail) {
                const container = document.querySelector('.thumbnail');
                const containerWidth = container.offsetWidth;
                const thumbnailWidth = activeThumbnail.offsetWidth;
    
                // Calculate the scroll position to center the active thumbnail
                const scrollPosition =
                    activeThumbnail.offsetLeft - (containerWidth / 2) + (thumbnailWidth / 2);
            

                // Smooth scroll logic
                let start = container.scrollLeft;
                let change = scrollPosition - start;
                let duration = 600; // Smoothness duration in milliseconds
                let currentTime = 0;
                const increment = 20;
    
                function animateScroll() {
                    currentTime += increment;
                    const val = easeInOutQuad(currentTime, start, change, duration);
                    container.scrollLeft = val;
                    if (currentTime < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                }
    
                // Easing function for smooth effect
                function easeInOutQuad(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
    
                animateScroll();
            }
        }
    }, [itemActive]);

    return (
        <div className="body">
            <header>
                <div className="logo">Impressions</div>
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
                    <button className="prev" onClick={handlePrevClick}>&lt;</button>
                    <button className="next" onClick={handleNextClick}>&gt;</button>
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
