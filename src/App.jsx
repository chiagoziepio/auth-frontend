import { useState } from 'react'
import Home from "./component/home";
import Register from './component/register';
import Login from './component/Login';
import ForgotPwd from './component/forgotPwd';
import ResetPwd from './component/ResetPwd';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>welcome to the frontend</h1>
      <Home/>
      <Register/>
      <Login/>
      <ForgotPwd/>
      <ResetPwd/>
    </>
  )
}

export default App
