import React from 'react'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='w-full h-screen overflow-y-auto'>
      <Outlet/>
    </div>
  )
}

export default Body
