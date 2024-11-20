// src/App.js or your parent component
import React from 'react';
import Header from './components/Header';
import EventCarousel from './components/EventCarousel';
import Footer from './components/Footer';

const events = [
  {
    id: 1,
    title: "Alumni Meet 2024",
    date: "December 15, 2024",
    description: "Join us to interact with the alumni and share your experiences.",
    image: "https://media.licdn.com/dms/image/v2/C4D12AQG3K4UOCMWApQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1646113091635?e=2147483647&v=beta&t=R2jEd69PLOYRbjs00kb6DBYC7uOQCKUry5kfny20N7s", // Image URL
  },
  {
    id: 2,
    title: "Vishwanath Sports Meet 2025",
    date: "March 10, 2025",
    description: "Get ready for a thrilling sports tournament with amazing prizes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-wtd1lMdroaCNbB1qGeebe5I4G3LQ4FLpw&s", // Image URL
  },
  {
    id: 3,
    title: "Persona Fest 2025",
    date: "February 10, 2024",
    description: "Biggest techno-cultural event of MIT ADT University. The fest is a celebration of creativity and innovation",
    image: "https://www.mitpersonafest.mituniversity.ac.in/wp-content/uploads/2024/02/1.webp", // Image URL
  },
  {
    id: 4,
    title: "Meraki Expo 2024",
    date: "November 21, 2024",
    description: "Meraki Expo is a platform for students to showcase their talent and creativity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnrIOF9-9HDY-7UBsHoK5Yc-qrklL9vpzRg&s", // Image URL
  }
  // Add more events as needed
];

function App() {
  const appStyle = {
    backgroundColor: '#FDBA74', // Change this to your desired background color
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div style={appStyle}>
      <Header />
      <EventCarousel events={events} />
      <Footer />
    </div>
  );
}

export default App;
