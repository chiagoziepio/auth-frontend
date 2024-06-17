import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const register = () => {
 const {
  username,
  setEmail,
  setPassword,
  password,
  email,
  setUsername} = useContext(UserContext)
  return (
    <form>
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
      
    </form>
  )
}

export default register