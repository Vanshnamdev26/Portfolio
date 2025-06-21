import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Toaster
        position="bottom-right"
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
