import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Cards from '../pages/Cards';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Cards />} />
    </Routes>

  )
}

export default Layout