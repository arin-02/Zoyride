import React from 'react';
import Navbar from './Component/Navbar';
import './App.css'
import Login from './Component/Login';
import Register from './Component/Register';
import Dummy from './Component/Dummy';
import Footer from './Component/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      
      <div className="container-fluid  p-5">
      <Dummy/>
      {/* <Login/> */}
      <Register/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
