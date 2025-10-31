import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from '../component/Login'
import Register from '../component/Register'
import Dashboard from '../component/View'
import Update from '../component/update'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
