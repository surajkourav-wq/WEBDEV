import React from 'react'
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='bg-blue-500 flex justify-between items-center'>
      <div className='flex items-center gap-2 p-3'>
        <span className='text-2xl'>FakeApp Store</span> <FaStore className='text-2xl text-white'/>
      </div>

      <div className='flex gap-5'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/contactUs"}>ContactUs</Link>
      </div>

    </div>
  )
}

export default Header
