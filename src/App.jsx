// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProductDetail from './pages/productDetail';



function App() {
  

  return (
    <>
    <BrowserRouter>

    <Routes>
      
      <Route path="/" element={<LoginForm/>}  />
      <Route path="/dashboard" element={<Dashboard/>}  />
      <Route path="/productDetail/:id" element={<ProductDetail/>}></Route>
       
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
