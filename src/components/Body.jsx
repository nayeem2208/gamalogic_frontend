import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Body() {
  return (
    <div className='w-full h-screen overflow-y-auto pb-12'>
      <Outlet/>
    </div>
  )
}

export default Body
