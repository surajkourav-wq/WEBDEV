import React from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ContactUs from './pages/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
