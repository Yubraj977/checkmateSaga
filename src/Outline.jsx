import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Leftpannel from './pages/Leftpannel'
import Rightpannel from './pages/Rightpannel'


function Outline() {
  return (
    <div className='flex'> 

    
   <Leftpannel/>

    <div className='w-4/6'>
      <Outlet/>
    </div>
    
    <Rightpannel/>

    
    </div>
    
    
  )
}

export default Outline