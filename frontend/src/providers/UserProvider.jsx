import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext(null);

export const UserProvider = ({children}) => {

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        
        const res = await fetch("http://localhost:3000/users/1");
        const data = await res.json();
       
        setUser(data);
      } catch {
        console.log("Error occured")
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
    
  }, [])
  console.log(user)
  
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext