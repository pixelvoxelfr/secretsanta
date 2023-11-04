import React from 'react';
import Snowfall from 'react-snowfall';

import Header from './components/Header/Header';
import Randomizer from './components/Randomizer/Randomizer';
import Footer from './components/Footer/Footer';
import Divider from './components/UI/Divider';

function App() {
  return (
    <div className="App">
      <Header />
      <Divider random="0"/>
      <Randomizer />
      <Divider random="385"/>
      <Footer />
      <Snowfall />
    </div>
  );
}

export default App;
