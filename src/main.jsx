import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoginContext } from './context/loginContaxt.jsx'
import { CategoryProvider } from './context/cotegoryContaxt.jsx'
import { CarProvider } from './context/carContaxt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoginContext>
        <CategoryProvider>
          <CarProvider>
            <App />
          </CarProvider>
        </CategoryProvider>
      </LoginContext>
    </BrowserRouter>
  </StrictMode>,
)
