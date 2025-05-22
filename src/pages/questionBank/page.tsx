import { useEffect, useState } from "react"
import Navbar from "../../components/navbar"




const QuestionBank = () => {

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
      <div className="w-[100vw]   h-full min-h-[100vh] bg-gradient-to-r from-black via-gray-600 to-black">
         <div
    className={`flxed  top-0 w-full z-50 transition-transform duration-300 ${showNavbar?"translate-y-0":"-translate-y-full"}`}
    >
        <Navbar/>
        </div>

     <div className="flex flex-col items-center">

      <p className="text-4xl p-[30px] text-white">Question Bank</p>
      <hr/>

      <div className="w-[80%] text-gray-200 px-[40px]">
        <div className="w-full py-4 flex items-center gap-[40px]">
        <div className="px-3 py-1 border-1 rounded-md flex items-center justify-between gap-[30px] bg-gray-500 cursor-pointer">Category  <img src="/unfold.png" className="w-3"/></div>
        <div className="px-3 py-1 border-1 rounded-md flex items-center justify-between gap-[30px] bg-gray-500 cursor-pointer">Company  <img src="/unfold.png" className="w-3"/></div>
        <div className="px-3 py-1 border-1 rounded-md flex items-center justify-between gap-[30px] bg-gray-500 cursor-pointer">Difficulty Level  <img src="/unfold.png" className="w-3"/></div>
        <div className="px-1 py-1 border-1 border-gray-400 rounded-md flex items-center justify-between gap-[30px] bg-gray-500 ">
          <input placeholder="Search" className="outline-none p-1"/><img src="/search-icon.png" className="w-9 bg-gray-500 rounded-lg cursor-pointer hover:bg-gray-400"/>
        </div>

        </div>

        <div>

        </div>
      </div>

      <div className="w-[80%] border-1 rounded-lg p-[20px] bg-gray-800 my-2">

        <div className="flex items-center justify-between text-gray-400">
          <p>284.7K views</p> <p>28 minutes ago</p>
        </div>
       <p className="text-xl font-bold text-white">Tell me about yourself.</p>
        <div className="flex items-center gap-3 text-white">
          <p>Algorithms</p><p>|</p>
          <p>Asked at Meta</p><p>|</p>
          <p>Difficulty:Medium</p>
        </div>
        <div className="flex items-center justify-between my-3 p-2 rounded-lg border-1 text-white">
          <p>580 Users Practiced</p>
          <p className="cursor-pointer bg-cyan-400 px-4 rounded-lg text-black font-semibold">Practice with This Question</p>
        </div>

      </div>
      <div className="w-[80%] border-1 rounded-lg p-[20px] bg-gray-800 my-2">

        <div className="flex items-center justify-between text-gray-400">
          <p>284.7K views</p> <p>28 minutes ago</p>
        </div>
       <p className="text-xl font-bold text-white">Tell me about yourself.</p>
        <div className="flex items-center gap-3 text-white">
          <p>Algorithms</p><p>|</p>
          <p>Asked at Meta</p><p>|</p>
          <p>Difficulty:Medium</p>
        </div>
        <div className="flex items-center justify-between my-3 p-2 rounded-lg border-1 text-white">
          <p>580 Users Practiced</p>
          <p className="cursor-pointer bg-cyan-400 px-4 rounded-lg text-black font-semibold">Practice with This Question</p>
        </div>

      </div>
      <div className="w-[80%] border-1 rounded-lg p-[20px] bg-gray-800 my-2">

        <div className="flex items-center justify-between text-gray-400">
          <p>284.7K views</p> <p>28 minutes ago</p>
        </div>
       <p className="text-xl font-bold text-white">Tell me about yourself.</p>
        <div className="flex items-center gap-3 text-white">
          <p>Algorithms</p><p>|</p>
          <p>Asked at Meta</p><p>|</p>
          <p>Difficulty:Medium</p>
        </div>
        <div className="flex items-center justify-between my-3 p-2 rounded-lg border-1 text-white">
          <p>580 Users Practiced</p>
          <p className="cursor-pointer bg-cyan-400 px-4 rounded-lg text-black font-semibold">Practice with This Question</p>
        </div>

      </div>


     </div>

    </div>
  )
}

export default QuestionBank