import React from "react";
import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'
import PhotoGallery from './components/PhotoGallery'
import Hero from './components/Hero'


function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Hero/>
      <div className = 'container'>
        <PhotoGallery/>
      </div>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
