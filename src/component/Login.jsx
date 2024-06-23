import React, { useContext } from 'react'
import axios from "axios"
import { UserContext } from '../../context/UserContext'
import { Link, useNavigate } from  "react-router-dom"

const Login = () => {
 const {
  username,
  
  setPassword,
  password,
  
  setUsername,
  errMsg, 
  setErrMsg
  } = useContext(UserContext);

  axios.defaults.withCredentials = true;

  const navigate = useNavigate()
  const handleLogin =async (e)=>{
    e.preventDefault();
    try{

      const res = await axios.post("http://localhost:5050/api/user/login",{username,password});
      const data = await res.data;
      setErrMsg(data.msg);
      alert(data.msg)
      navigate("/")
    }catch(err){
      console.log(err);
      setErrMsg(err.response.data.msg);
      alert(err.response.data.msg)
    }
      
      setPassword("");
      setUsername("");
      setErrMsg("")
  }
  return (
    <div className='form'>

    <form onSubmit={handleLogin}>
      <h3>Login</h3>
      <div className="input-control">
        <input 
        type="text"
        required
        value={username}
        onChange={e=>setUsername(e.target.value)}
        placeholder='username'
        />
      </div>
      <div className="input-control">
        <input 
        type="password"
        required
        value={password}
        onChange={e=>setPassword(e.target.value)}
        placeholder='password'
        />
      </div>
      <div className="more_info">
        <span>Have no account? <Link to= "/register">register</Link></span>
          <Link to = "/forgotpassword" className='forgotLink'>forgot password?</Link>
      </div>
      { errMsg ?

      (<p className="feedback">{errMsg}</p>):(
        ""
      )
      }
      <button type="submit">Login</button>
      
    </form>
    </div>
  )
}

export default Login