// React
import React, { useState } from 'react';

// Components
import About from './components/About';
import Home from './components/Home';
import Store from './components/Store';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  // States
  const [home, setHome] = useState();
  const [about, setAbout] = useState();
  const [store, setStore] = useState();

  // Handle Navigation

  if (home === true) {
    return (
      <>
        <Header 
          handleHome={() => {
            setHome(true);
            setAbout(false);
            setStore(false);
            }} 
            
          handleAbout={() => {
            setHome(false);
            setAbout(true);
            setStore(false);
          }}

          handleStore={() => {
            setHome(false);
            setAbout(false);
            setStore(true);
          }}
            />
            
        <Home handleStore={() => {
          setHome(false);
          setAbout(false);
          setStore(true);
        }} />

        <Footer />
      </>
    )
  } else if (about === true) {
    return (
      <>
        <Header 
          handleHome={() => {
            setHome(true);
            setAbout(false);
            setStore(false);
            }} 
            
          handleAbout={() => {
            setHome(false);
            setAbout(true);
            setStore(false);
          }}

          handleStore={() => {
            setHome(false);
            setAbout(false);
            setStore(true);
          }}
            />

        <About />

        <Footer />
      </>
    )
  } else if (store === true) {
    return (
      <>
        <Header 
          handleHome={() => {
            setHome(true);
            setAbout(false);
            setStore(false);
            }} 
            
          handleAbout={() => {
            setHome(false);
            setAbout(true);
            setStore(false);
          }}

          handleStore={() => {
            setHome(false);
            setAbout(false);
            setStore(true);
          }}
            />

        <Store />

        <Footer />
      </>
    )
  } else {
    return (
      <>
        <Header 
          handleHome={() => {
            setHome(true);
            setAbout(false);
            setStore(false);
            }} 
            
          handleAbout={() => {
            setHome(false);
            setAbout(true);
            setStore(false);
          }}

          handleStore={() => {
            setHome(false);
            setAbout(false);
            setStore(true);
          }}
            />

        <Home 
          handleStore={() => {
            setHome(false);
            setAbout(false);
            setStore(true);
          }}
          />

        <Footer />
    </>
    )
  }
}

export default App;
