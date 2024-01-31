import { useState } from 'react'
import './App.css'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'

// layout import

import Outline from './Outline'
// pages import
import Home from './pages/Home'
import About from './pages/About'
import Play from './pages/Play'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Outline/>}>
     <Route index element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='play' element={<Play/>}/>

    </Route>
  )
)

function App() {
  

  return (
    <div >  

<RouterProvider router={router} />

    </div>
  )
}

export default App
