import React from 'react'
import { Link } from "react-router-dom"
const home = () => {
  return (
    <div className='home'>
      <h2>Welcome</h2>
      <Link to = "/login">Login</Link>
      <Link to = "/dashboard">Dashboard</Link>
    </div>
  )
}

export default home