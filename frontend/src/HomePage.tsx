import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pages from './Pages';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function HomePage() {
  return (
    <>
      <LandingPage />
      <Projects />
      <AboutMe />
    </>
  );
}

export default HomePage;
