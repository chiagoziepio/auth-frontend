import React, { useContext } from 'react'
import axios from "axios"
import { UserContext } from '../../context/UserContext'
import { Link } from "react-router-dom"

const register = () => {
 const {
  username,
  setEmail,
  setPassword,
  password,
  email,
  setUsername,
  errMsg, 
  setErrMsg
  } = useContext(UserContext);

  const handleAddUser =async (e)=>{
    e.preventDefault();
    try{

      const res = await axios.post("http://localhost:5050/api/user",{username,email,password});
      const data = await res.data;
      setErrMsg(data.msg);
      alert(data.msg)
      
    }catch(err){
      console.log(err);
      setErrMsg(err.response.data.msg);
      alert(err.msg)
    }
      setEmail("");
      setPassword("");
      setUsername("");
      setErrMsg("")
  }
  return (
    <div className='form'>

    <form onSubmit={handleAddUser}>
      <h3>Registration</h3>
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
        type="email"
        required
        value={email}
        onChange={e=>setEmail(e.target.value)}
        placeholder='email'
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
      <span>Already has account? <Link to= "/login">login</Link></span>
      { errMsg ?

      (<p className="feedback">{errMsg}</p>):(
        ""
      )
      }
      <button type="submit">submit</button>
      
    </form>
    </div>
  )
}

export default register