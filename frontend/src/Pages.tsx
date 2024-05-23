// import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './HomePage';
// import NavBar from './NavBar';
// import Dashboard from './Dashboard';
// // import Maths from './Maths';
// // import Connect from './Connect';
// import MessagePage from './components/msger/MessagePage';
// import Whiteboard from './components/whiteboard/Whiteboard';
// import WhiteboardPage from './components/whiteboard/WhiteboardPage';
// import Landing from './Landing';
// import { ThemeContext } from './ThemeContext';

// import DarkBackground from './assets/DarkBackground.png';
// import LightBackground from './assets/LightBackground.png';
// import { useTheme } from './ThemeContext';

const Pages = () => {
  //   const { mode } = useTheme();

  return (
    <>
      {/* <NavBar /> */}
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <footer className="position-fixed w-100 text-center p-3 b-0">
          &copy; 2024 Cool Website. All rights reserved.
        </footer> */}
    </>
  );
};

export default Pages;
