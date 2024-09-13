import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import  Arboles  from './components/Arboles/Arboles.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Arboles />
  </StrictMode>,
)
