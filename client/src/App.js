import React, { useEffect, useState } from 'react'
import Login from './Component/Login'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import "./App.css"
import Home from './Component/Home'
import Teach from './Component/Teach'
import Student from './Component/Student'

function App() {
  const [user, setUser] = useState();
  // console.log(user.tagname);
 
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  

  return (
    <div>
    <Navbar/>
    <div className="cc">
    { user ?(user.tagname==="Teacher"?<Teach/>:<Student/>): <Login /> }
    
    {/* {user.tagname==="Teacher"?<Teach/>:<Student/>    } */}
    </div>
    <Footer/>
    </div>
  )
}

export default App