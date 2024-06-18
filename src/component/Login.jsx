import React, { useContext } from 'react'
import axios from "axios"
import { UserContext } from '../../context/UserContext'
import { Link } from  "react-router-dom"

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
  const handleLogin =async (e)=>{
    e.preventDefault();
    try{

      const res = await axios.post("http://localhost:5050/api/user/login",{username,password});
      const data = await res.data;
      setErrMsg(data.msg);
      alert(data.msg)
      
    }catch(err){
      console.log(err);
      setErrMsg(err.response.data.msg);
      alert(err.msg)
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
      <span>Have no account? <Link to= "/register">register</Link></span>
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