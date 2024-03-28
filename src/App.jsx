import './App.css'
import Router from './Routers/Router'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className='lg:flex h-screen' style={{fontFamily:'Raleway,sans-serif;'}}>
      <SideBar/>
      <Header/>
        <Router/>
    </div>
  )
}

export default App
