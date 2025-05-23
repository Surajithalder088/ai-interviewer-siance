
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import FirstSection from './components/first_section'
import SecondSection from './components/second_section'
import ThirdSection from './components/ThirdSection'

function App() {

  const [showNavbar, setShowNavbar] = useState(true)
  const [lastscrollY, setLastScrollY] = useState(0)


  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY<lastscrollY){
        setShowNavbar(true)
      }else{
        setShowNavbar(false)
      }
      setLastScrollY(window.scrollY)
        
    }

    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[lastscrollY])
 

  return (
   <>
   <div className=' relative w-screen [@media(max-width:1100px)]:max-w-screen  h-full min-h-[100vh] bg-gradient-to-r from-black via-gray-600 to-black'>
   
    <div
    className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showNavbar?"translate-y-0":"-translate-y-full"}`}
    >
      <Navbar/>
    </div>
    <div className='flex flex-col pt-[80px] items-center '>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  
  </div>
   </>
  )
}

export default App
