import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import  Arboles  from './components/Arboles/Arboles.tsx'
import  Bienvenidos  from './components/Bienvenidos/Bienvenidos.tsx'
import AdoptarArbolComponent from './components/AdoptarArbolComponent/AdoptarArbolComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdoptarArbolComponent />
  </StrictMode>,
)
