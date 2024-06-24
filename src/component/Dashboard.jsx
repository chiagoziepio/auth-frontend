import axios from 'axios'
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext'
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  let theUser;
    const {
        user, 
        setUser
        } = useContext(UserContext);
      const navigate = useNavigate()
    useEffect(()=>{
        const verifyUser = async()=>{
            try {
                const res= await axios.get("http://localhost:5050/api/user/verify")
                const data = await res.data
                theUser = data.user
               
                console.log(theUser);
                setUser(theUser)
                
            } catch (error) {
                
                console.log(error);
                navigate("/")
                alert(error.response.data.msg)
            }
        }
        verifyUser()
        
    },[])
    
    console.log(user);
    axios.defaults.withCredentials = true;
    const handleLogout = async()=>{
      try {
        const res = await axios.get("http://localhost:5050/api/user/logout");
        if(res.status){
          navigate("/")
        }
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className='dashboard'>
       <h3>Dashboard</h3> 
       
        {user && 
        <div>
          
         {user.map(use=>(
            <div key={use.id}>
                <p>{use.username}</p>
                <span> {use.email}</span>

            </div>
        ))}
          </div>}
       
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard