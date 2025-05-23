import { useEffect, useState } from "react"
import Navbar from "../../components/navbar"
import { useParams } from "react-router-dom"


const Subcription = () => {
    const {id}=useParams()
    const numId=Number(id)

   const [showNavbar, setShowNavbar] = useState(true)
      const [lastscrollY, setLastScrollY] = useState(0)

      const[subcription,setSubcription]=useState("")



  useEffect(()=>{
 numId%2==0?setSubcription("copilote"):setSubcription("autoapply")

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

        <div className="flex flex-col items-center [@media(max-width:1100px)]:max-w-screen">
            <p className="text-4xl p-[30px] text-white">Subcription</p>
            <div className=" flex items-center gap-[20px]">
                <p onClick={()=>setSubcription("copilote")}
                className={`text-lg font-bold p-2 rounded-lg flex flex-col ${subcription==='copilote'?" border-1 border-orange-500 text-white  ":"bg-orange-200 text-gray-500 cursor-pointer "} `}>Interview Copilote
              
                </p>
                <p onClick={()=>setSubcription("autoapply")}
                 className={`text-lg font-bold p-2 rounded-lg ${subcription==='autoapply'?" border-1  border-yellow-500 text-white ":"bg-yellow-200 text-gray-500 cursor-pointer "}`}>Auto Apply
             
                 </p>
            </div>

            <div>

            {subcription==="copilote"?
            <div className="w-[80%]">
                copilote
            </div>
            :
            <div>
                auto apply
            </div>}
            </div>
        </div>
   </div>
  )
}

export default Subcription