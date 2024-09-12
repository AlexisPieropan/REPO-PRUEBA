import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import  Beneficios  from './components/Beneficios/Beneficios.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Beneficios />
  </StrictMode>,
)
