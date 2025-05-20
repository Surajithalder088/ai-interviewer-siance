

import { motion } from "motion/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const MenuNavbar = () => {
 const [isHover,setIsHover] = useState(0)
const [navOpen,setNavOpen] = useState(false)
const navigate=useNavigate()

const [open,setOpen]=useState(false)
const[userOpen,setUserOpen]=useState(false)

  return (
   <>
   <div className={`[@media(max-width:1100px)]:hidden  ${open?"max-w-fit rounded-r-md ":"max-w-screen"}   flex justify-center items-center gap-4 h-[80px] bg-transparent backdrop-blur-md top-0 ${open?"bg-white":"bg-gradient-to-r from-gray-800 via-black to-gray-500 "}  `}>
   <Link to='/'>
   <div className="p-6  w-[180px] h-[80px] flex items-center justify-center">
                  <img className="w-9" src="/new_logo_siance.png"/>  <img className="h-7" src="/siaṇce.png"/>
                </div></Link>

   <div className={`flex w-[80%] ${open?"hidden":""}`}>
    <div className="flex gap-4 text-white font-bold text-[12px] items-center justify-around  w-[86%]">

       <Link className="no-underline !text-white !font-bold" to='/interview-copilot'
       > <p 
        className="flex hover:bg-gray-200 hover:text-gray-600 p-2 rounded-md cursor-pointer">Live Interview 
      
        </p></Link>

        
        <p 
        onClick={(e) => {
        e.stopPropagation();
        navigate("/mock-interview");
        console.log("Clicked inside");
      }} 
        className="flex hover:bg-gray-200 hover:text-gray-600 p-2 rounded-md cursor-pointer items-center">AI Mock interview 

        </p>

        <p
         onClick={(e) => {
        e.stopPropagation();
        navigate("/auto-apply");
        console.log("Clicked inside");
      }} 
        className="flex hover:bg-gray-200 hover:text-gray-600 p-2 rounded-md cursor-pointer items-center"
        >Auto Apply</p>

        <p
         onClick={(e) => {
        e.stopPropagation();
        navigate("/ai-resume-builder");
        console.log("Clicked inside");
      }} 
        className="flex hover:bg-gray-200 hover:text-gray-600 p-2 rounded-md cursor-pointer items-center"
        >Document Center</p>

         <p 
        onClick={(e) => {
        e.stopPropagation();
        navigate("/interview-coach");
        console.log("Clicked inside");
      }} 
        className="flex hover:bg-gray-200 hover:text-gray-600 p-2 rounded-md cursor-pointer items-center">AI Career Coach 

        </p>
       
        

        <div  onMouseEnter={() => setIsHover(4)} onMouseLeave={() => setIsHover(0)} 
        className="flex hover:bg-gray-200 hover:text-gray-600 p-2 rounded-md cursor-pointer items-center gap-2">
          <p className="flex items-center gap-2">Question Bank <img className="h-4 w-4 hover:rotate-x-180" src={isHover===4?"/up-arrow.svg":"/down-arrow.png"}/>
        </p>
       { isHover===4 &&<div onMouseEnter={() => setIsHover(4)} onMouseLeave={() => setIsHover(0)} 
       className={ `absolute mt-[200px] mr-[30px] border-gray-500 bg-white text-white shadow-lg rounded-md  `}>
           <div className="font-medium  text-gray-500  text-[15px] p-2">Interview Questions for Popular Roles</div>
           <div className="flex gap-4 items-center justify-between  px-4 ">
            <div className="p-1">
              <p className="cursor-pointer text-black hover:text-gray-600" >Product Strategy</p>
              <p className="cursor-pointer text-black hover:text-gray-600">Behavioral</p>
              <p className="cursor-pointer text-black hover:text-gray-600">Coding</p>
              <p className="cursor-pointer text-black hover:text-gray-600">System Design</p>
            </div>
            <div className="p-1">
              <p className="cursor-pointer text-black hover:text-gray-600">Algorithms</p>
              <p className="cursor-pointer text-black hover:text-gray-600">Analytical</p>
               <p  className="cursor-pointer text-black hover:text-gray-600">Estamition</p>
               <p className="cursor-pointer text-black hover:text-gray-600">SQL</p>
            </div>
           </div>
           <div 
           onClick={(e) => {
        e.stopPropagation();
        navigate("/question-bank");
        console.log("Clicked inside");
      }} 
           className="bg-gray-200 flex items-center justify-center text-orange-400 p-4">Browse All Questions {">"}</div>
         </div>}
        </div>
    </div>

    <div
    
    className="flex gap-4 bg-gray-300 rounded-full p-1 border-1">
      <img onClick={()=>setUserOpen(!userOpen)} src="/user-pro.svg" className="w-[20px]"/>
      { userOpen===true?<div 
       className={ `absolute mt-[60px]  border-gray-500 bg-white shadow-lg rounded-md text-black p-5 `}>
           <div className=" flex justify-between items-center font-medium  text-gray-500  text-[15px] p-2 cursor-pointer">
          
             Hey User123

            <p onClick={()=>setUserOpen(false)
            }
            className="hover:text-red-500 hover:bg-gray-500 px-2 py-1 rounded-full"
            >X</p>

           </div>
           <p>user123@gmail.com</p>
           <p> User123 Roy</p>
           <p className="bg-gray-200 p-2 rounded-lg">Account Settings</p>

           <p className="bg-white px-2 rounded-lg"> Logout</p>
             
          
         </div>:""}

        </div>
        
    </div>

    <div 
    onClick={()=>setOpen(!open)}
    className={` p-2    rounded cursor-pointer ${open?"mr-2":"mr-3.5 pr-[100px]"}`}>
        <img src={open?"/right-arrow.png":`/back.png`} className="bg-white rounded-full w-[40px]"/>
      
        
    </div>
   </div>
   {!navOpen && isHover===0 &&!open &&<div className="absolute left-0 bottom-0 w-full mt-0 h-0.5 overflow-hidden">
        <motion.div
          className="h-full w-1/2 bg-gradient-to-r from-gray-800 via-gray-400 to-white"
          initial={{ x: "-50%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </div>}



{/*  below is for mobnile screen*/ }

   <div className={`hidden [@media(max-width:1100px)]:flex items-center ${navOpen?"bg-white":"bg-transparent backdrop-blur-3xl"}  justify-between`}>

   <Link to='/'>
   <div className="p-6 flex items-center my-3 w-[160px] h-[80px]">
                    <img className="h-6" src="/new_logo_siance.png"/>
                    <img className="h-5" src="/siaṇce.png"/>
                </div>
      </Link>
        <div className="flex gap-4 mr-6 items-center">
          <div className="bg-orange-500 rounded-md px-4 py-2 text-white">Sign Up</div>
          <div onClick={() => setNavOpen(!navOpen)} 
          className="w-fit h-fit bg-white p-1 rounded-lg">
           { !navOpen?<img src="/navbar-menu.svg"/>:
            <img src="/navbar-close.svg"/>}
          </div>
        </div>
   </div>

   <div className={`absolute  w-full h-fit bg-white  ${navOpen?"flex  ":"hidden"} rounded-b-xl flex-col items-center justify-center gap-4`}>
  
   <div className="flex flex-col gap-4 text-black font-bold text-[12px] items-center justify-around py-4 w-[80%]">

<Link className="no-underline !text-black !font-bold" to='/interview-copilot'> <p 
 className="flex hover:bg-orange-100 hover:text-orange-400 p-2 rounded-md cursor-pointer">Interview Copilot <span className="!text-[10px] top-0">TM</span>

 </p></Link>

 <div onClick={()=>{isHover===1?setIsHover(0):setIsHover(1)}}
 className=" relative flex flex-col hover:bg-orange-100 hover:text-orange-400 p-2 rounded-md  cursor-pointer items-center gap-2">
   <p className="flex items-center gap-2">AI Application <img className="h-4 w-4 hover:rotate-x-180" src={isHover===1?"/up-arrow.svg":"/down-arrow.png"}/>
  </p>
{isHover===1 &&  <div onMouseEnter={() => setIsHover(1)} onMouseLeave={() => setIsHover(0)}    
 onClick={(e) => {
      e.stopPropagation();
      console.log("Dropdown clicked");
    }}

 className={ `absolute z-100 pointer-events-auto mr-[30px] border-gray-500 bg-white text-black shadow-lg rounded-md p-5 `}>
    
     <p 
      onClick={(e) => {
        e.stopPropagation();
        navigate("/ai-resume-builder");
        console.log("Clicked inside");
      }}
     className="p-2 cursor-pointer hover:text-orange-500">
      AI resume builder
      </p>
     
     <p 
        onClick={(e) => {
        e.stopPropagation();
        navigate("/auto-apply");
        console.log("Clicked inside");
      }}
     className="p-2 cursor-pointer hover:text-orange-500">Auto apply</p>
  </div>}
  </div>
 <p  
 className="flex hover:bg-orange-100 hover:text-orange-400 p-2 rounded-md cursor-pointer items-center">
  <Link className="no-underline !text-black !font-bold" to='/mock-interview'>AI Mock interview </Link>

 </p>

 <div  onClick={()=>{isHover===2?setIsHover(0):setIsHover(2)}}
 className="flex flex-col hover:bg-orange-100 hover:text-orange-400 p-2 rounded-md cursor-pointe items-center gap-2">
   <p className="flex items-center gap-2">Pricing <img className="h-4 w-4 hover:rotate-x-180"src={isHover===2?"/up-arrow.svg":"/down-arrow.png"}/>
 </p>
{ isHover===2&&<div onMouseEnter={() => setIsHover(2)} onMouseLeave={() => setIsHover(0)} 
 className={ ` mr-[30px] border-gray-500 bg-white text-black shadow-lg rounded-md p-5 `}>
     <p className="p-2 cursor-pointer hover:text-orange-500">Interview Copilot</p>
     <p className="p-2 cursor-pointer hover:text-orange-500">Auto apply</p>
  </div>}
 </div>

 <div onClick={()=>{isHover===3?setIsHover(0):setIsHover(3)}} 
 className=" relative flex flex-col hover:bg-orange-100 hover:text-orange-400 p-2 rounded-md cursor-pointer items-center gap-2">
   <p className="flex items-center gap-2">Resources <img className="h-4 w-4 hover:rotate-x-180" src={isHover===3?"/up-arrow.svg":"/down-arrow.png"}/>
 </p>

{isHover===3 ? 
 <div   
 className={ ` w-fit h-full pt-[20px] px-10   border-gray-500 bg-white text-black flex items-center justify-around  gap-[12rem] shadow-lg rounded-md  p-5 `}>
   <div className="flex flex-col gap-[2rem]   justify-between">
    <div className="flex flex-col gap-4 text-[10px]">
     <p className="text-[12px]">Resume Creation tools</p>
     <p className="cursor-pointer hover:text-orange-500">Recruiters Hotline</p>
     <p className="cursor-pointer hover:text-orange-500">Resume Checker</p>
     <p className="cursor-pointer hover:text-orange-500">Cover Letter Generator</p>
    </div>

    <div className="flex flex-col gap-8 bg-white">
     <div className="flex flex-col gap-4 text-[10px]">
       <p className="text-[12px]">Career Guidance Tools</p>
       <p className="cursor-pointer hover:text-orange-500">AI Career Coach</p>
       <p className="cursor-pointer hover:text-orange-500">LinkedIn Profile Optimizer</p>
       <p className="cursor-pointer hover:text-orange-500">LinkedIn Resume Builder</p>
     </div>
     <div  className="flex flex-col gap-4 text-[10px]">
       <p className="text-[12px]">Support</p>
       <p className="cursor-pointer hover:text-orange-500"> Guides</p>
       <p className="cursor-pointer hover:text-orange-500">Blog</p>
     </div>
    </div>
    </div>

  
  </div> :""}
 </div>

 <div  onClick={()=>{isHover===4?setIsHover(0):setIsHover(4)}} 
 className="flex flex-col hover:bg-orange-100 hover:text-orange-400 p-2 rounded-md cursor-pointer items-center gap-0">
   <p className="flex items-center gap-2">Question Bank <img className="h-4 w-4 hover:rotate-x-180" src={isHover===4?"/up-arrow.svg":"/down-arrow.png"}/>
 </p>
{ isHover===4 &&<div  
className={ ` mr-[30px] border-gray-500 bg-white text-black shadow-lg rounded-md  `}>
    <div className="font-medium text-gray-500  text-[15px] p-2">Interview Questions for Popular Roles</div>
    <div className="flex gap-4 items-center justify-between  px-4 ">
     <div className="p-1">
       <p className="cursor-pointer hover:text-orange-500" >Product Strategy</p>
       <p className="cursor-pointer hover:text-orange-500">Behavioral</p>
       <p className="cursor-pointer hover:text-orange-500">Coding</p>
       <p className="cursor-pointer hover:text-orange-500">System Design</p>
     </div>
     <div className="p-1">
       <p className="cursor-pointer hover:text-orange-500">Algorithms</p>
       <p className="cursor-pointer hover:text-orange-500">Analytical</p>
        <p  className="cursor-pointer hover:text-orange-500">Estamition</p>
        <p className="cursor-pointer hover:text-orange-500">SQL</p>
     </div>
    </div>
    <div className="bg-gray-200 flex items-center justify-center text-orange-400 p-4">Browse All Questions {">"}</div>
  </div>}
 </div>
</div>
   </div>
   </>
  )
}

export default MenuNavbar