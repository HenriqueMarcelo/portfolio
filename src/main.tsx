import React from 'react'
import ReactDOM from 'react-dom/client'
import { MenuContextProvider } from './contexts/MenuContext'
import Home from './Home'
import './index.css'

import './libs/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MenuContextProvider>
      <Home />
    </MenuContextProvider>
  </React.StrictMode>,
)
