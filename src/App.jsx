import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/notfound/NotFound'
import Login from './pages/login/login'
import MainPage from './pages/main/MainPage'
import SignUp from './pages/signup/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/main/*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App