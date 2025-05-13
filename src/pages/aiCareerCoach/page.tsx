import { useEffect, useState } from "react"

import MenuNavbar from "../../components/MenuNavbar"


const AiCareerCoach = () => {


const [showNavbar, setShowNavbar] = useState(true)
    const [lastscrollY, setLastScrollY] = useState(0)
       const [chatMode,setChatMode]=useState(false)
  
  
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
    className={`flxed   top-0 w-full z-50 transition-transform  duration-300 ${showNavbar===true?"translate-y-0":"-translate-y-full"}`}
    >
     <MenuNavbar/>
     </div>

      <div className={`flex flex-col gap-6 items-center justify-center px-[50px]  [@media(max-width:1100px)]:my-[60px] h-fit max-h-[100vh] py-[40px] w-[100%]`}>
       <p className="text-white text-4xl font-bold w-full">AI Career Coach</p>
       <p className="text-gray-200 font-semibold text-md ">Think of it as your own personal career coach—someone you can talk to like a friend who truly understands your professional goals. 
        You’ll get tailored job search strategies, career advice, and growth tips, all in one conversation.</p>

       <div className="flex flex-col items-center border-1 border-gray-500 w-full bg-gray-400 rounded-lg justify-center">

      {/* this is chat section  */}
        <div className="flex items-center flex-col justify-around my-[40px] mx-[20px] gap-[50px]">
           
         {
            chatMode===false?(
            <>
          <p className="text-2xl font-bold text-white">Ask me any questions about recruiting, interviews, and careers development</p>

          <div className="flex items-center [@media(max-width:1100px)]:flex-col max-h-[200px] overflow-y-scroll gap-4">
            <p className=" bg-gray-100 p-2 rounded-lg">How do I transition from my current career to a new field without taking a step back in salary?</p>
            <p className=" bg-gray-100 p-2 rounded-lg">How do I transition from my current career to a new field without taking a step back in salary?</p>
            <p className=" bg-gray-100 p-2 rounded-lg">What are some strategies for negotiating a higher salary during a job offer?</p>
          </div>
          </>  ):

          (<>
          <div className="flex flex-col  gap-2 max-h-[250px] overflow-y-scroll">
            <p className="bg-gray-500 p-2 rounded-xl w-fit max-w-[70%] ml-[30%] h-fit ">How do I transition from my current career to a new field without taking a step back in salary?</p>
            <p className="bg-gray-200 p-2 rounded-xl w-fit max-w-[70%]">Customize your resume for each job application by including keywords from the job description.
                 Highlight relevant experience and skills that align with what the employer is seeking.</p>
                  <p className="bg-gray-500 p-2 rounded-xl w-fit max-w-[70%] ml-[30%] h-fit ">How do I transition from my current career to a new field without taking a step back in salary?</p>
            <p className="bg-gray-200 p-2 rounded-xl w-fit max-w-[70%]">Customize your resume for each job application by including keywords from the job description.
                 Highlight relevant experience and skills that align with what the employer is seeking.</p>
                  <p className="bg-gray-500 p-2 rounded-xl w-fit max-w-[70%] ml-[30%] h-fit ">How do I transition from my current career to a new field without taking a step back in salary?</p>
            <p className="bg-gray-200 p-2 rounded-xl w-fit max-w-[70%]">Customize your resume for each job application by including keywords from the job description.
                 Highlight relevant experience and skills that align with what the employer is seeking.</p>
          </div>
          
          </>)
          }
         

          <div className="w-full flex items-center justify-between border-1 border-gray-600 rounded-2xl p-[20px]">
            <input type="text" className="outline-none min-w-fit w-[95%] " placeholder="Send a message  to AI Career Coach"/>

            <div 
            
            onClick={()=>setChatMode(true)}
            className="w-[25px] cursor-pointer hover:rotate-270 hover:w-[27px]"><img src="/send-ai.png"/></div>
          </div>

          
        </div>

       

       </div>
      </div>

     </div>
  )
}

export default AiCareerCoach