import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

function Authentication() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <GoogleOAuthProvider clientId="<your_client_id>">
    <div className='bg-bgblue w-full h-screen text-white overflow-y-auto'>
      <div className="px-12 py-4 flex justify-between items-center underlineLi h-20 fixed top-0 left-0 right-0 z-10 bg-bgblue ">
       <Link to='/'><p className="font-semibold text-2xl text-center">GAMALOGIC</p></Link> 
      </div>
     
      <div className='flex justify-center items-center h-screen' ><Outlet/></div>
    </div>
    </GoogleOAuthProvider>
  )
}

export default Authentication
