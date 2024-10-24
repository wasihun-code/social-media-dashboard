import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {UserProvider} from './providers/UserProvider.jsx'
import {AccountsProvider} from './providers/AccountsProvider.jsx'
import {PlatformsProvider} from './providers/PlatformsProvider.jsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <AccountsProvider>
        <PlatformsProvider>
          <App />
        </PlatformsProvider>
      </AccountsProvider>
    </UserProvider>
  </StrictMode>,
)
