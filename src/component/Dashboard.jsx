import axios from 'axios'
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const {
        user, 
        setUser
        } = useContext(UserContext);
      const navigate = useNavigate()
    useEffect(()=>{
        const verifyUser = async()=>{
            try {
                const res= await axios.get("http://localhost:5050/api/user/verify");
                const data = await res.data
                const theUser = data.user
               
                console.log(theUser);
              
                setUser(theUser)
            } catch (error) {
                console.log(error);
                navigate("/")

                alert(error.response.msg)
            }
        }
        verifyUser()
        
    },[])
    console.log(user);
  return (
    <div>
       <h3>Dashboard</h3> 
       <div>

         {user.map(use=>(
            <div key={use.id}>
                <p>{use.username}</p>
                <span> {use.email}</span>

            </div>
        ))}
       </div>

    </div>
  )
}

export default Dashboard