import React, { createContext, useEffect, useState } from 'react'
import UserContext from './UserProvider';

const PlatformsContext = createContext(null);

export const PlatformsProvider = ({children}) => {

  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true)


  

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const res = await fetch("http://127.0.0.1:9000/api/platforms")
        
        if (!res.ok) {
          throw new Error ("Fetching Platforms failed.")
        }

        const data = await res.json();

        setPlatforms(data);
        setLoading(false);
      } catch {
        console.log("Error Occured while fetching platforms");
      }
    }
    fetchPlatforms();
  }, [])

  return (
    <PlatformsContext.Provider value={[platforms, loading]}>
      {children}
    </PlatformsContext.Provider>
  )

}

export default PlatformsContext;