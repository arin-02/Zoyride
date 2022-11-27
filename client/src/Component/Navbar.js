import React,{useNavigate} from 'react'

export default function Navbar() {
  // const navigate=useNavigate();
  // const handleclickteach=()=>{
      
  //   navigate('/teacher')

  // }
  return (

    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"  href="/teacher">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active"   aria-current="page" href="/teacher">Teacher</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/student">Student</a>
        </li>
        
      </ul>
      
    </div>
  </div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
        
      </ul>
      
    </div>
</nav>
    
  )
}
