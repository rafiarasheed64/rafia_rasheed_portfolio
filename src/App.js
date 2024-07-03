import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Works from './Components/Works';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Navbar from './Navbar';
import LoaderComponent from './Components/LoaderComponent';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5200);
  }, []);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Works />
          <Blog />
          <Contact />
        </>
      )}
    </>
  )
}



export default App;



