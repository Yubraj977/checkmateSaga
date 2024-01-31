import React from 'react'

function NavItem({name,icon}) {
  return (
    <div><span className='text-green-600 text-2xl'><i class={icon}></i></span> <span className='ml-3'>{name}</span> </div>
  )
}

export default NavItem
