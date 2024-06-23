import React, { useContext } from 'react'
import axios from "axios"
import { UserContext } from '../../context/UserContext'
import { Link, useNavigate, useParams } from  "react-router-dom"

const ResetPwd = () => {
 const {
  setPassword,
  password,
  errMsg, 
  setErrMsg
  } = useContext(UserContext);

  const {resetToken} = useParams()

  

  const navigate = useNavigate()
  const handleResetPassword =async (e)=>{
    e.preventDefault();
    try{

      const res = await axios.post(`http://localhost:5050/api/user/resetpassword/${resetToken}`,{password});
      const data = await res.data;
      setErrMsg(data.msg);
      alert(data.msg)
      navigate("/login")
    }catch(err){
      console.log(err);
      setErrMsg(err.response.data.msg);
      alert(err.response.data.msg)
    }
      
      setPassword("");
  }
  return (
    <div className='form'>

    <form onSubmit={handleResetPassword}>
      <h3>New Password</h3>
      <div className="input-control">
        <input 
        type="password"
        required
        value={password}
        onChange={e=>setPassword(e.target.value)}
        placeholder='new password'
        />
      </div>
      { errMsg ?

      (<p className="feedback">{errMsg}</p>):(
        ""
      )
      }
      <button type="submit">Reset</button>
      
    </form>
    </div>
  )
}

export default ResetPwd