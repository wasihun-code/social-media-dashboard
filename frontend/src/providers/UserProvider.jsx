import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext(null);

export const UserProvider = ({children}) => {

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/user/2");

        if (!res.ok) {
          throw new Error("Fetching User Information Failed");
        }

        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch {
        console.log("Error occured")
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
    
  }, [])
  
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext