import React from 'react'
import "../index.css";
import Navbar from '../Components/Navbar'
import Home from './Home'
import Footer from '../Components/Footer'

const LoginSuccess = () => {
  return (
    <div className=' container-fluid dark:bg-[#0F262E] px-1 w-full'>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default LoginSuccess