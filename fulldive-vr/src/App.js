// React
import React, { useState } from 'react';
import logo from './logo.svg';

// Styles
import './App.css';

// Components
import About from './components/About';
import Home from './components/Home';
import Store from './components/Store';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [store, setStore] = useState(false);

  if (home === true) {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    )
  } else if (about === true) {
    return (
      <>
        <Header />
        <About />
        <Footer />
      </>
    )
  } else if (store === true) {
    return (
      <>
        <Header />
        <Store />
        <Footer />
      </>
    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
