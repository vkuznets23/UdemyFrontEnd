import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <ToastContainer />
      <App />
    </AppProvider>
  </StrictMode>
)
