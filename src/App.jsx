import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./component/home";
import Register from './component/register';
import Login from './component/Login';
import ForgotPwd from './component/forgotPwd';
import ResetPwd from './component/ResetPwd';
import UserContextProvider from '../context/UserContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
          <UserContextProvider>

                <Routes>
                  
                  <Route path='/' element={<Home/>}/>
                  <Route path='/register' element = {<Register/>}/>
                  <Route path='/login' element = {<Login/>}/>
                  <Route path='/forgotpassword' element = {<ForgotPwd/>}/>
                  <Route path='/resetpassword' element = {<ResetPwd/>}/>
                  
                </Routes>
          </UserContextProvider>
    </div>
    
  )
}

export default App
