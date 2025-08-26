import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OnOff from './ejemplos/OnOff.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OnOff />
  </StrictMode>,
)
