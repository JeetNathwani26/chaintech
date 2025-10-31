import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../component/Login'
import Register from '../component/Register'
import Dashboard from '../component/View'
import Update from '../component/update'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='chaintech/' element={<Login />} />
          <Route path='chaintech/register' element={<Register />} />
          <Route path='chaintech/dashboard' element={<Dashboard/>} />
          <Route path='chaintech/update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
