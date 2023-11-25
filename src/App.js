import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, HomeOpen, Login } from './components/index';
const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
           <Route element={<HomeOpen/>} path='/' />
           <Route element={<Login/>} path='/sign_' />
           <Route element={<Dashboard/>} path='/landingpage' />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App