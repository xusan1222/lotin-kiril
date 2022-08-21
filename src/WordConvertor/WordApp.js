import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import KirilLotin from './KirilLotin'
import LotinKiril from './LotinKiril'

export default function WordApp() {
  return (
    <div>
        <Link to='/' >Lotin-Kiril</Link>
        <Link to='/Kiril-Lotin' >Kiril-Lotin</Link>
      
      <Routes>
      <Route path="/" element={
        <LotinKiril />
      }/>
      <Route path="/Kiril-Lotin" element={
        <KirilLotin />
      }/>

      </Routes>
    </div>
  )
}
