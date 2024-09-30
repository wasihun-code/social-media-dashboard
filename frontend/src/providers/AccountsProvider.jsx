import React, { createContext, useEffect, useState } from 'react'
import UserContext from './UserProvider';

const AccountsContext = createContext(null);

export const AccountsProvider = ({children}) => {

  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await fetch("http://localhost:3000/accounts")
        const data = await res.json();

        setAccounts(data)
      } catch {
        console.log("Error Occured");
      } finally {
        setLoading(false);
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