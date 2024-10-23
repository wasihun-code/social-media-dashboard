import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext(null);

export const UserProvider = ({children}) => {

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const realAPIURL = 'http://127.0.0.1:9000/api/users/1'
        const res = await fetch(realAPIURL);

        if (!res.ok) {
          throw new Error("Fetching User Information Failed");
        }
        
        const data = await res.json();

        setUser(data);
        setLoading(false);
      } catch {
        console.log("Error occured while fetching user")
      } 
    }

    fetchUser()
    
  }, [])
  
  return (
    <UserContext.Provider value={[user, loading]}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext