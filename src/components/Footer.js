// src/components/Footer.js
import React from 'react';

const Footer = () => {
    const navigate = (url) => {
        window.location.href = url;
    };

    return (
        <footer className="bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 text-white p-8 text-center mt-4 rounded-lg">
            <p>&copy; {new Date().getFullYear()} Alumni Association</p>
            <br></br>
            <nav>
                <ul className="flex justify-center space-x-4">
                    <li><a href="./about-us" onClick={() => navigate('/home')} className="hover:underline">Home</a></li>
                    <li><a href="http://localhost:3000/" onClick={() => navigate('/about')} className="hover:underline">About Us</a></li>
                    <li><a href="/events" onClick={() => navigate('/events')} className="hover:underline">Events</a></li>
                    <li><a href="http://localhost:7000/" onClick={() => navigate('/contact')} className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;