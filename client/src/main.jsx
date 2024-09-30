import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema
import 'primereact/resources/primereact.min.css';           // Componentes
import 'primeicons/primeicons.css';                         // Ícones
import 'primeflex/primeflex.css';                           // PrimeFlex (opcional para layout)
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
