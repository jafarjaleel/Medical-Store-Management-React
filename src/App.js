import React from 'react';
import image from "./images/React_exam_medicalstore.jpg";
import "./App.css";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container-fluid'>
  <div>
    <Navbar/> 
  <h1 className="greetingStyle">Welcome to the Store</h1>
  <div className="image-container">
  <img src={image} alt="Medical Store Background" className="responsive-image"/>
  </div>
  </div>
  </div>
  );
}
export default App;




