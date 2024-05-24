import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pages from './Pages';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Projects />
      {/* <Footer /> */}
      <AboutMe />
    </>
  );
}

export default HomePage;
