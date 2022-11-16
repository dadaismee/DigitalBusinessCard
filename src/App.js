import React from "react";
import { Info, About, Footer, SketchImage } from "./components/index"
import "./App.css"

const App = () => { 
  return (
    <div className="App__container">
      <div className="App">
        <Info />
        <About />
        <Footer />
      </div>
      <div className="App__sketch">
        <SketchImage />
      </div>
    </div>
    ) 
  }

export default App
