import React,{useState} from 'react'
import axios from 'axios'
function Login() {

  const [userinfo, setUserinfo] = useState({
    tagname:'',
    nameofuser: '',
    email: '',
    password: '',
    cpassword: '',
    subject: '',
    phoneNum: '',
    address: '',
    class_standard: ''
  });
  const [loginuserinfo, setLoginuserinfo] = useState({
    tagname:'',
    email:'',
    password: ''

  });
  console.log(userinfo);

  const handleloginchange=(e)=>{
    // localStorage.setItem('email', loginuserinfo.email);
    // localStorage.setItem('password', loginuserinfo.password);
    setLoginuserinfo((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

// console.log(loginuserinfo)

  const handlechange=(e)=>{
    setUserinfo((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleclick= async (e)=>{
    e.preventDefault();
    try {
      const rsp = await axios.post("http://localhost:5001/register",{ userinfo })
      console.log(rsp)
    } catch (err) {
      console.log(err)
    }
    
  }

  const handlelogin= async(e)=>{
    e.preventDefault();
    try {
      const rsp = await axios.post("http://localhost:5001/login",{ loginuserinfo })
      console.log(rsp)
      localStorage.setItem("user",JSON.stringify(rsp.data))
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  

  return (
    
    <div className="main">  	
      <input className='inpp' type="checkbox" id="chk" aria-hidden="true"/>
  
        <div className="signup">
          <form>
            <label className='labb' htmlFor="chk" aria-hidden="true">Sign up</label>
            <input className='inpp' value={userinfo.tagname} type="text" name="tagname" onChange={handlechange}  placeholder="Teacher/Student" required=""/>
            <input className='inpp' value={userinfo.nameofuser} type="text" name="nameofuser" onChange={handlechange}  placeholder="Name" required=""/>
            <input className='inpp' value={userinfo.email} type="email" name="email" onChange={handlechange}  placeholder="Email" required=""/>
            <input className='inpp' value={userinfo.password} type="password" name="password" onChange={handlechange}  placeholder="Password" required=""/>
            <input className='inpp' value={userinfo.cpassword} type="password" name="cpassword" onChange={handlechange}  placeholder="Confirm Password" required=""/>
            <input className='inpp' value={userinfo.subject} type="text" name="subject" onChange={handlechange}  placeholder="Subjext" required=""/>
            <input className='inpp' value={userinfo.phoneNum} type="Number" name="phoneNum" onChange={handlechange}  placeholder="phoneNum" required=""/>
            <input className='inpp' value={userinfo.address} type="text" name="address" onChange={handlechange}  placeholder="Address" required=""/>
            <input className='inpp' value={userinfo.class_standard} type="Number" onChange={handlechange}  name="class_standard" placeholder="Class Standard" required=""/>
            <button className='btnn' onClick={handleclick}>Sign up</button>
          </form>
        </div>
  
        <div className="login">
          <form>
            <label className='labb' htmlFor="chk" aria-hidden="true">Login</label>
            <input className='inpp' onChange={handleloginchange} value={loginuserinfo.tagname} type="tagname" name="tagname" placeholder="Teacher/Student" required=""/>
            <input className='inpp' onChange={handleloginchange} value={loginuserinfo.email} type="email" name="email" placeholder="Email" required=""/>
            <input className='inpp' onChange={handleloginchange} value={loginuserinfo.password} type="password" name="password" placeholder="Password" required=""/>
            <button className='btnn' onClick={handlelogin}>Login</button>
            </form>
        </div>
    </div>
  
  )
}

export default Login