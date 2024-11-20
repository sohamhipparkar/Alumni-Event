// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className=" bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]   text-white p-8 text-center shadow-2xl mb-8 rounded-lg transform transition duration-500 hover:scale-125 animate-gradient-x flex flex-col justify-center h-64">
            <div className="flex items-center justify-between"></div>
            <h1 className="text-5xl font-extrabold tracking-wider drop-shadow-2xl text-white-300">Upcoming Events</h1>
            <p className="mt-4 text-xl italic pt-2 text-white-300"></p>
        </header>
    );
};

export default Header;
