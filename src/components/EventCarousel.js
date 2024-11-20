// src/components/EventCarousel.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const EventCarousel = ({ events }) => {
    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            className="mb-8"
        >
            {events.map((event) => (
                <div key={event.id} className="bg-orange-100 shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105 flex flex-col items-center text-center">
                    {event.image ? (
                        <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
                    ) : (
                        <div className="w-full h-48 bg-gray-300 rounded-t-lg flex items-center justify-center">
                            <span className="text-gray-600">No Image Available</span>
                        </div>
                    )}
                    <h2 className="text-2xl font-bold text-gray-800 mt-4">{event.title}</h2>
                    <p className="text-gray-600">{event.date}</p>
                    <p className="text-gray-500 mt-2">{event.description}</p>
                    <button className="mt-4 bg-teal-600 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200">Register</button>
                </div>
            ))}
        </Carousel>
    );
};

export default EventCarousel;
