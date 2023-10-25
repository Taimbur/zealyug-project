import React from 'react'
import {Route, Routes } from "react-router-dom";
import Home from '../pages/Home'

const Layout = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    {/* <Route path="/" element={<List />} />
    <Route path="/update/:id" element={<Update />} /> */}
  </Routes>
 
  )
}

export default Layout