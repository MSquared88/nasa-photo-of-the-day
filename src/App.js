import React from "react";
import "./App.scss";
import HeaderComponent from './components/Header'
import Footer from './components/Footer'
import PhotoGallery from './components/PhotoGallery'
import MenuEx from "./components/MenuEx";


function App() {
  return (
    <div className="App">
      <MenuEx/>
      <div className = 'container'>
        <HeaderComponent/>
        <h1>The Past 3 Pics Ot The Day</h1>
        <PhotoGallery/>
      </div>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
