import React, { useContext } from 'react'
import axios from "axios"
import { UserContext } from '../../context/UserContext'
import { Link, useNavigate } from "react-router-dom"

const forgotPwd = () => {
 const {
  setEmail,
  email,
  errMsg, 
  setErrMsg
  } = useContext(UserContext);
const navigate = useNavigate()
  const handleforgotPwd =async (e)=>{
    e.preventDefault();
    try{

      const res = await axios.post("http://localhost:5050/api/user/forgotpassword",{email});
      const data = await res.data;
      setErrMsg(data.msg);
      alert(data.msg)
    }catch(err){
      console.log(err);
      setErrMsg(err.response.data.msg);
      alert(err.response.data.msg)
    }
      setEmail("");
      
  }
  return (
    <div className='form'>

    <form onSubmit={handleforgotPwd}>
      <h3>Forgot Password</h3>
      
      <div className="input-control">
        <input 
        type="email"
        required
        value={email}
        onChange={e=>setEmail(e.target.value)}
        placeholder='email'
        />
      </div>
      
      
      { errMsg ?

      (<p className="feedback">{errMsg}</p>):(
        ""
      )
      }
      <button type="submit">Submit</button>
      
    </form>
    </div>
  )
}

export default forgotPwd