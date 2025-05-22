import { motion } from "motion/react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import QuestionAndAnswer from "../../components/Question&Answer"
import { useEffect, useState } from "react"
import MenuNavbar from "../../components/MenuNavbar"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

interface UserState {
  name: string;
  email: string;
  token: string;
  // Add any other fields as needed
}


 const icons=["/airbnb_logo.svg","/expedia_group_logo.svg","/tiktok_logo.svg","/ey_logo.svg","/mckinsey__company_logo.svg","/pwc_logo.svg","/kpmg_logo.svg","/goldman_sachs_logo.svg","/tesla_logo.svg","stripe_logo.svg","/jp_morgan_logo.svg","/lockheed_martin_logo.svg","/airbnb_logo.svg","/expedia_group_logo.svg","/tiktok_logo.svg","/ey_logo.svg","/mckinsey__company_logo.svg","/pwc_logo.svg","/kpmg_logo.svg","/goldman_sachs_logo.svg","/tesla_logo.svg","stripe_logo.svg","/jp_morgan_logo.svg","/lockheed_martin_logo.svg",]


const AutoApply = () => {


    const [isHovered, setIsHovered] = useState(false);

   const [showNavbar, setShowNavbar] = useState(true)
      const [lastscrollY, setLastScrollY] = useState(0)
      const [sideBarOpen,setSideBarOpen]=useState(false)
      const[jobState,setJobState]=useState<string>("profile")

         const navigate= useNavigate()
   const user:UserState = useSelector((state: RootState) => state.user);
    
    
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
    <div  className="w-[100vw]   h-full min-h-[100vh] bg-gradient-to-r from-black via-gray-600 to-black">
       <div
    className={`fixed ${sideBarOpen===true?"hidden":""} top-0 w-full z-50 transition-transform duration-300 ${showNavbar?"translate-y-0":"-translate-y-full"}`}
    >
        <Navbar/>
      </div>

      <div
    className={`fixed ${sideBarOpen===false?"hidden":""} top-0 w-full z-50 transition-transform  duration-300 ${showNavbar===true?"translate-y-0":"-translate-y-full"}`}
    >
     <MenuNavbar/>
     </div>
        <div className="flex flex-col items-center gap-[80px] pt-[60px]">

        <div className={`${ sideBarOpen===false?"hidden":"flex flex-col"} w-[80%] py-[80px] gap-[20px]`}>
          <p className="text-3xl font-bold text-white">Auto Apply</p>
          <p className="text-[15px] text-gray-300">Tired of juggling multiple websites just to apply for jobs? Our one-click application feature streamlines the entire process,
             letting you apply with a single tap. Plus, we’ll recommend the best-fit opportunities based on your skills and expectations, 
            significantly increasing your chances of landing an interview.</p>
           
            <div className=" flex flex-col my-[30px] text-white bg-gray-600 rounded-lg p-5">
              {
                <div className="flex flex-col">
                 <div className="flex gap-[30px] py-3 font-bold text-lg"> 
                  <p 
                  onClick={()=>setJobState("profile")}
                  className={`${jobState==="profile"?"text-gray-300":"text-gray-500"} cursor-pointer`}>Profile</p> 
                  <p  onClick={()=>setJobState("matched")}
                  className={`${jobState==="matched"?"text-gray-300":"text-gray-500"} cursor-pointer`}>Matched Job</p>
                   <p  onClick={()=>setJobState("applications")}
                    className={`${jobState==="applications"?"text-gray-300":"text-gray-500"} cursor-pointer`}> Your Applications</p>
                 </div>

                  <hr/>
                  <form className=" p-4  text-gray-400 font-semibold ">
                    <p className="text-xl text-white p-2"> Resume </p>
                    <p>Choose your resume</p>
                    <input className=" p-2 text-white outline-1  rounded-lg outline-gray-500 my-2"/>
                    <p>Role</p>
                    <input  className=" p-2 text-white outline-1  rounded-lg outline-gray-500 my-2"/>
                    <p>Years of Experience</p>
                    <input  className=" p-2 text-white outline-1  rounded-lg outline-gray-500 my-2"/>
                    <p>Location</p>
                    <input  className=" p-2 text-white outline-1  rounded-lg outline-gray-500 my-2"/>

                    <p className="text-xl text-white p-2">Work Auuthorization</p>
                    <p>1. Are you legally authorized to work in your chosen country?</p>
                    <p className="flex"><input type="radio" name="countryAuth"/>Yes</p>
                    <p className="flex"><input type="radio" name="countryAuth"/>No</p>
                    <p>2.In order to obtain or maintain employment eligibility, will you now or in the future require the company's
                       sponsorship for an immigration-related employment benefit (i.e., a work visa, work permit, etc.)?</p>
                     <p className="flex"><input type="radio" name="workPermit"/>Yes</p>
                    <p className="flex"><input type="radio" name="workPermit"/>No</p>
                       
                    <p className="text-xl text-white p-2">Self Identification</p>
                    <p>Ethnicity/Race</p>
                    <input/>
                    <p>Gender</p>
                    <input/>
                    <p>Voluntary Self-Identification of Disability</p>
                    <input/>

                    <div className="bg-slate-900 text-white rounded-lg p-3 w-fit ">Submit</div>

                  </form>
                </div>


              }
              
            </div>

        </div>


            <div className="flex [@media(max-width:1100px)]:flex-col items-center gap-4 m-[100px] [@media(max-width:1100px)]:m-3">
                <div className="flex flex-col items-center [@media(max-width:1100px)]:items-center gap-4">
                    <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className="text-4xl text-white">Auto Apply helps you get 3x more interviews using AI</motion.p>
                    <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className="text-xl text-gray-500 text-center">No more endless applications, resume tweaks, or waiting for responses. Upload your CV. Select the type of job you want, 
                        and Final Round AI will find relevant positions and apply for you automatically.</motion.p>
                    <motion.p  
                     onClick={()=>{
              if(user.name===""){
                navigate('/sign-in')
                return
              }
               setSideBarOpen(true) ; 
                
            }}
                    initial={{scale: 1}}
           animate={{  scale: 1 }}
            transition={{ duration: 2.9}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            
            className="relative w-fit h-fit p-2 overflow-hidden rounded-xl bg-gray-300 text-black font-semibold flex items-center justify-center cursor-pointer"
       >
         <motion.div
        className={`absolute inset-y-0 left-0 bg-cyan-400 ${isHovered?"border-1":"border-0"} rounded-xl`}
        initial={{ width: "10%" }}
        animate={{ width:isHovered? "100%":0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
       <p className="z-100"> Get More Interviews Today</p>
                    </motion.p>
                </div>
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                >
                    <img  src="/auto-apply-image.png"/>

                </motion.div>

            </div>

          <div className="flex flex-col items-center gap-[30px]">
                <p className="text-4xl text-white w-[50%] [@media(max-width:1100px)]:w-full text-center">Join a community of 500k+ candidates who've landed jobs at top companies</p>
                 <div className="overflow-hidden w-screen  py-4">

        <motion.div 
        
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        className='w-full flex items-center justify-center gap-[40px] whitespace-nowrap py-[100px]'>
        {icons.map((icon, index) => (
        <p key={index} className="text-lg text-gray-800 mr-8 whitespace-nowrap">
            <img src={icon} alt="logo" className='min-w-[100px] max-w-[200px] min-h-[100px] max-h-[200px] [@media(max-width:1100px)]:w-[160px]'/>
            
        </p>
      ))}
        </motion.div>
        </div>
            </div>
         <div className=" flex [@media(max-width:1100px)]:flex-col items-center justify-center gap-5">
                <div className="w-[370px] h-[250px] bg-white"></div>
                 <div className="w-[370px] h-[250px] bg-white"></div>
                  <div className="w-[370px] h-[250px] bg-white"></div>
            </div>
        </div>

        <div className=" flex flex-col items-center  gap-8 my-[200px] w-full">
            <p className="text-4xl text-white text-center w-[60%] [@media(max-width:1100px)]:w-full">Stop Wasting Hours Applying—Let AI Do It for You</p>
            <p className="text-xl text-gray-400 text-center w-[80%]">Spending hours on job boards, rewriting your resume, and manually applying for jobs is frustrating—and
                 it's slowing you down. Auto Apply changes the game by automatically applying to jobs that match your skills, so you send more
                 applications in less time and land interviews faster—without the hassle.</p>
            <div className="w-[80%] flex [@media(max-width:1100px)]:flex-col  gap-4 items-center">
              <div className="flex flex-col gap-4 w-[25%] [@media(max-width:1100px)]:w-full  bg-white rounded-md  hover:shadow-2xl p-[30px]">
                <img src="/auto-apply-icon.svg"   className="w-10 h-10"/>
                <p  className="text-2xl">Let AI Find Your Dream Job—While You Sleep</p>
                <p  className="text-xl">No more endless scrolling. Auto Apply scans thousands of job postings to find the best-fit roles for you—so you wake up to real opportunities, not wasted time.</p>
              </div>
              <div className="flex flex-col gap-4 w-[25%] [@media(max-width:1100px)]:w-full  bg-white rounded-md hover:shadow-2xl p-[30px]">
                <img src="/auto-apply-icon.svg"   className="w-10 h-10"/>
                <p  className="text-2xl">Let AI Find Your Dream Job—While You Sleep</p>
                <p  className="text-xl">No more endless scrolling. Auto Apply scans thousands of job postings to find the best-fit roles for you—so you wake up to real opportunities, not wasted time.</p>
              </div>
              <div className="flex flex-col gap-4 w-[25%] [@media(max-width:1100px)]:w-full  bg-white rounded-md hover:shadow-2xl p-[30px]">
                <img src="/auto-apply-icon.svg"   className="w-10 h-10"/>
                <p  className="text-2xl">Let AI Find Your Dream Job—While You Sleep</p>
                <p  className="text-xl">No more endless scrolling. Auto Apply scans thousands of job postings to find the best-fit roles for you—so you wake up to real opportunities, not wasted time.</p>
              </div>
              <div className="flex flex-col gap-4 w-[25%] [@media(max-width:1100px)]:w-full  bg-white rounded-md hover:shadow-2xl p-[30px]">
                <img src="/auto-apply-icon.svg"   className="w-10 h-10"/>
                <p  className="text-2xl">Let AI Find Your Dream Job—While You Sleep</p>
                <p  className="text-xl">No more endless scrolling. Auto Apply scans thousands of job postings to find the best-fit roles for you—so you wake up to real opportunities, not wasted time.</p>
              </div>

            </div>
        </div>

        <div  className="py-[40px] flex flex-col gap-[25px] items-center">
          <p className="text-5xl text-white [@media(max-width:1100px)]:text-center [@media(max-width:1100px)]:text-3xl">How does the auto apply for jobs work?</p>
          <p  className="text-xl text-gray-400 w-[60%] [@media(max-width:1100px)]:w-full text-center">Applying for jobs shouldn’t feel like a full-time job. With Auto Apply, you set your preferences once—and we handle the rest.
             Our AI job finder scans thousands of job listings, automatically applies for jobs, and optimizes each application for applicant
              tracking systems (ATS)—so you stand out to recruiters. No stress, 
            no busywork—just real job opportunities delivered to you.</p>
          <div className="flex flex-col py-[40px] gap-[30px] items-center w-[80%]">
            <div className="flex [@media(max-width:1100px)]:flex-col items-center w-full">
              <img src="/auto-apply-upload.webp" className="w-full"/>

             <div className=" flex flex-col  gap-6 w-full  p-[30px]">
              <p className="text-4xl text-white">Upload Your Information</p>
              <p  className="text-xl text-gray-400">Upload your current resume and information, and our AI instantly analyzes your experience, skills,
                 and achievements to prepare for job applications. 
                Or simply build a new resume with our ATS-optimized AI Resume Builder.</p>
                <div className="flex gap-8">
                  <p className="bg-slate-600 text-white shadow-2xl p-3.5 rounded-md cursor-pointer">Build a fresh resume</p>
                 <p className="p-3.5  bg-slate-400 rounded-md cursor-pointer">Get started now</p>
                 </div>
             </div>
            </div>
             <div className="flex [@media(max-width:1100px)]:flex-col items-center w-full">
              <img src="/auto-apply-upload.webp" className="w-full"/>

              <div className=" flex flex-col  gap-6 w-full  p-[30px]">
              <p className="text-4xl text-white">Upload Your Information</p>
              <p  className="text-xl text-gray-400">Upload your current resume and information, and our AI instantly analyzes your experience, skills,
                 and achievements to prepare for job applications. 
                Or simply build a new resume with our ATS-optimized AI Resume Builder.</p>
                <div className="flex gap-8">
                  <p className="bg-slate-600 text-white shadow-2xl p-3.5 rounded-md cursor-pointer">Build a fresh resume</p>
                 <p className="p-3.5  bg-slate-400 rounded-md cursor-pointer">Get started now</p>
                 </div>
             </div>
            </div>
             <div className="flex [@media(max-width:1100px)]:flex-col items-center w-full">
              <img src="/auto-apply-upload.webp" className="w-full"/>

             <div className=" flex flex-col  gap-6 w-full  p-[30px]">
              <p className="text-4xl text-white">Upload Your Information</p>
              <p  className="text-xl text-gray-400">Upload your current resume and information, and our AI instantly analyzes your experience, skills,
                 and achievements to prepare for job applications. 
                Or simply build a new resume with our ATS-optimized AI Resume Builder.</p>
                <div className="flex gap-8">
                  <p className="bg-slate-600 text-white shadow-2xl p-3.5 rounded-md cursor-pointer">Build a fresh resume</p>
                 <p className="p-3.5  bg-slate-400 rounded-md cursor-pointer">Get started now</p>
                 </div>
             </div>
            </div>



          </div>

          <div className="flex [@media(max-width:1100px)]:flex-col items-center justify-center px-4 gap-5 w-[90%] py-[100px] my-3 text-white bg-gray-800 rounded-2xl">

        <div className="flex flex-col p-[100px] gap-2 [@media(max-width:1100px)]:p-[10px]">
          <p className="text-2xl ">Trustpilot</p>
          <p className="text-6xl  [@media(max-width:1100px)]:text-[30px]">Don't just take our word for it</p>

        </div>

        <div className="flex flex-col gap-5 items-center justify-center">

        <div className="flex  [@media(max-width:1100px)]:flex-col gap-4 items-center justify-center">
          <div className="flex flex-col gap-2 p-[20px] bg-slate-700 rounded-md min-w-[300px] h-[200px]">
            <p >Love the mock interview. Helps prepare with difficult technical questions and build confidence before a big interview</p>
            <p className="flex items-center gap-4"><img className="bg-amber-50 p-2 rounded-full" src="/user-3-fill (1).png"/>Kasun de Costa</p>
          </div>

            <div className="flex flex-col gap-2 p-[20px] bg-slate-700 rounded-md min-w-[300px] h-[200px]">
            <p>Love the mock interview. Helps prepare with difficult technical questions and build confidence before a big interview</p>
             <p className="flex items-center gap-4"><img className="bg-amber-50 p-2 rounded-full" src="/user-3-fill (1).png"/>Kasun de Costa</p>
          </div>


        </div>

        <div className="flex  [@media(max-width:1100px)]:flex-col gap-4 items-center justify-center ">
           <div className="flex flex-col gap-2 p-[20px] bg-slate-700 rounded-md min-w-[300px] h-[200px]">
            <p>Love the mock interview. Helps prepare with difficult technical questions and build confidence before a big interview</p>
             <p className="flex items-center gap-4"><img className="bg-amber-50 p-2 rounded-full" src="/user-3-fill (1).png"/>Kasun de Costa</p>
          </div>
            <div className="flex flex-col gap-2 p-[20px] bg-slate-700 rounded-md min-w-[300px] h-[200px]">
            <p>Love the mock interview. Helps prepare with difficult technical questions and build confidence before a big interview</p>
             <p className="flex items-center gap-4"><img className="bg-amber-50 p-2 rounded-full" src="/user-3-fill (1).png"/>Kasun de Costa</p>
          </div>

        </div>
        
        </div>

      </div>

        <QuestionAndAnswer/>
        
        <div className="flex flex-col items-center justify-center gap-5 w-[90%] p-[50px] my-6 bg-orange-500 text-white rounded-2xl">
        <p className="text-4xl font-bold">Your Next Move Starts Now</p>
        <p className="text-center">A strong resume gets you in the door, but landing the job requires confidence, preparation, and strategy. 
          Interview Copilot™ gives you the tools to master every question, navigate tricky conversations, and present yourself as the top candidate
           With real-time coaching, structured feedback, and AI-powered insights,
           you’ll be ready to impress recruiters and turn interviews into job offers. Don’t let hesitation hold you back.
           Your next opportunity is waiting—get started today.</p>
        <p className="bg-white p-4 cursor-pointer rounded-2xl text-black font-bold"> Get started for Free</p>
      </div>
       <Footer/>
        </div>

            
    </div>
  )
}

export default AutoApply