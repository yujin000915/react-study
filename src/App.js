import React from 'react';

// Style
import './css/reset.min.css';

// Component
import Header from './components/Header';
import Landing from './components/Landing';
import LandingSwiper from './components/LandingSwiper';

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <LandingSwiper />
    </div>
  );
}

export default App;
