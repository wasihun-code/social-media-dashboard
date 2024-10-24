import React, { createContext, useEffect, useState } from 'react'
import UserContext from './UserProvider';

const AccountsContext = createContext(null);

export const AccountsProvider = ({children}) => {

  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true)


  

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await fetch("http://127.0.0.1:9000/api/accounts?user=1")
        
        if (!res.ok) {
          throw new Error ("Fetching accounts failed.")
        }

        const data = await res.json();

        setAccounts(data);
        console.log(data)
        setLoading(false);
      } catch {
        console.log("Error Occured while fetching user account");
      }
    }
    fetchAccounts();
  }, [])

  return (
    <AccountsContext.Provider value={[accounts, loading]}>
      {children}
    </AccountsContext.Provider>
  )

}

export default AccountsContext;