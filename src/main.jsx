import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoginContext } from './context/loginContaxt.jsx'
import { CategoryProvider } from './context/cotegoryContaxt.jsx'
import { CarProvider } from './context/carContaxt.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoginContext>
        <CategoryProvider>
          <AuthProvider>
            <CarProvider>
              <App />     
            </CarProvider>
          </AuthProvider>
        </CategoryProvider>
      </LoginContext>
    </BrowserRouter>
  </StrictMode>,
)

