import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
// import Navbar from './components/Main/Navbar.jsx'
import Hero from './components/Main/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    {/* <Signup/>  */}
    <Hero/>
  </StrictMode>,
)
