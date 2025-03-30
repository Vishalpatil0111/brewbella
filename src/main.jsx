import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AnimationProvider } from './context/AnimationProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AnimationProvider>
      <App />
    </AnimationProvider>
  </BrowserRouter>


)
