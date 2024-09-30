import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {UserProvider} from './providers/UserProvider.jsx'
import {AccountsProvider} from './providers/AccountsProvider.jsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <AccountsProvider>
        <App />
      </AccountsProvider>
    </UserProvider>
  </StrictMode>,
)
