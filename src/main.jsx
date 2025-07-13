import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CalculosPesados } from './Components/CalculosPesados'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculosPesados/>
  </StrictMode>,
)
