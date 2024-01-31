import React from 'react'
import NavItem from '../components/NavItem'
import { NavLink } from 'react-router-dom'
function Leftpannel() {
  const navitem = 'hover:bg-slate-700  p-1  pl-9  transition ease delay-150'
  return (
    <div className='flex flex-col w-1/6 bg-black text-white h-screen justify-between  sticky top-0 overflow-auto'>

      <div className='flex flex-col gap-10'>

        <div className="logo text-2xl font-black text-center mt-4 mx-0">Checkmate <span className='text-green-600'> Saga </span></div>
        <div className='flex flex-col text-base font-bold  gap-5'>
          <NavLink to='/' className={navitem} > <NavItem name="Home" icon="fa-solid fa-house" /></NavLink>
          <NavLink to='/about' className={navitem} ><NavItem name="Overview" icon='fas fa-yin-yang' /> </NavLink>
          <NavLink to='/play' className={navitem} > <NavItem name="Play" icon='fas fa-play' /></NavLink>
          <NavLink to='/' className={navitem} ><NavItem name='Research' icon="fas fa-clipboard-list" /> </NavLink>
          <NavLink to='/' className={navitem} > <NavItem name='Leadership' icon='fas fa-clipboard-list' /></NavLink>
          <NavLink to='/' className={navitem} ><NavItem name='offers' icon='fas fa-user-circle' /></NavLink>
          <NavLink to='/' className={navitem} > <NavItem name='Rewards' icon='fas fa-dollar-sign' /></NavLink>
          <NavLink to='/' className={navitem} ><NavItem name="Shops" icon='fas fa-store' /></NavLink>
        </div>

      </div>

      <div className='flex  gap-4 items-center pl-9 mb-1 mt-40'>
        <div className='bg-green-700  rounded-full flex justify-center items-center min-h-10 min-w-10 shadow-lg'> <span className='text-2xl'>< i class="fa-solid fa-power-off"></i> </span></div>
        <div className='font-black'>Log <span className='text-green-600'> Out</span></div>
      </div>

    </div>
  )
}

export default Leftpannel