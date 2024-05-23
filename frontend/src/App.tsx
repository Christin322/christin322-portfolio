import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pages from './Pages';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
