import { useEffect, useState } from "react"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import QuestionAndAnswer from "../../components/Question&Answer"
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


const AiResumeBuilder = () => {

    const [showNavbar, setShowNavbar] = useState(true)
    const [lastscrollY, setLastScrollY] = useState(0)
       const [sideBarOpen,setSideBarOpen]=useState(false)

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
    
   <div className="w-[100vw]   h-full min-h-[100vh] bg-gradient-to-r from-black via-gray-600 to-black">
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

        <div className="flex flex-col items-center">

      <div className={`${sideBarOpen===false?"hidden":"flex flex-col gap-6"}  h-fit max-h-[100vh] py-[80px] w-[80%]`}>
       <p className="text-white text-4xl font-bold w-full">Document Center</p>
       <p className="text-gray-200 font-semibold text-md ">Upload your resume, cover letter, or any other job application materials,
         and let our AI turn them into polished, standout documents. From refining structure to highlighting your unique strengths,
          we ensure you shine in every hiring process.</p>

       <div className="flex flex-col items-center justify-center">

        <div className="flex items-center [@media(max-width:1100px)]:flex-col justify-around gap-[50px]">

           {/* below one is  mock interview based on specific job role */}
          <div className="flex flex-col hover:bg-gray-300 w-[280px] hover:text-black cursor-pointer items-center py-3 px-6 border-1 border-gray-400 rounded-md bg-gray-500 text-white">
            <img src="/upload.png" className="w-[20px]"/>
            <p className="text-[15px] font-bold">Upload</p>
          </div>

          {/* below one is normal mock interview based on yourt profile */}
          <div 
          onClick={()=>navigate('/ai-resume-editor')}
          className="flex flex-col hover:bg-gray-300 w-[250px] hover:text-black cursor-pointer items-center py-3 px-6 border-1 border-gray-300 rounded-md bg-gray-300 text-black">
            <img src="/ai-resume.png" className="w-[20px]"/>
            <p className="text-[15px] font-bold">Create</p>
            <p className="text-[10px] text-gray-500">by AI Resume Builder</p>
          </div>
          <div className="flex flex-col hover:bg-gray-300 w-[250px] hover:text-black cursor-pointer items-center py-3 px-6 border-1 border-gray-400 rounded-md bg-gray-500 text-white">
            <img src="/plus.png" className="w-[20px]"/>
            <p className="text-[15px] font-bold">Add Linkedin Profile</p>
          </div>
          

        </div>

        <div className="flex flex-col bg-gray-400 rounded-lg w-full min-h-[200px] mt-[50px]">
         
         <table>
          
         </table>
        </div>

       </div>
      </div>
            <div className="flex [@media(max-width:1100px)]:flex-col items-center justify-center p-[30px]">
                <div className="flex flex-col gap-4 w-[50%] [@media(max-width:1100px)]:w-full [@media(max-width:1100px)]:items-center text-white">
                    <p className="text-4xl font-bold w-full p-4">AI Resume Builder Create a Job-Winning Resume in Minutes—100% Free</p>
                    <p className="text-2xl w-full p-4">Create tailored, ATS-optimized resumes that turn applications into offers</p>
                    <p
                    onClick={()=>{
              if(user.name===""){
                navigate('/sign-in')
                return
              }
               setSideBarOpen(true) ; 
                
               
               

            }}
                    className="font-semibold py-3 px-5 bg-gray-500 cursor-pointer rounded-md w-fit text-white m-3">Get Started Now</p>
                </div>
                <div className="w-[50%] [@media(max-width:1100px)]:w-full"> <img src="/ai-image-builder.png"/></div>
            </div>
            <div className="flex flex-col items-center gap-[100px] w-[80%]">
                <div className="flex flex-col items-center gap-6">
                    <p className="text-4xl font-semibold text-white text-center">Most Resumes Get Rejected—Here's How to Fix Yours in Minutes.</p>
                    <p className="text-md text-gray-400 text-center">Generic resumes no longer cut it—AI-driven resume builders ensure yours is tailored,
                         ATS-compliant, and interview-ready. Employers use Applicant Tracking Systems (ATS) to filter candidates, 
                         and our AI resume maker helps you beat the bots with real-time feedback, 
                         keyword optimization, and professional templates. Customize layouts, enhance content with AI-powered recommendations, 
                        and seamlessly create a resume that gets noticed.</p>

                </div>
                <div className="flex [@media(max-width:1100px)]:flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-4 p-4 rounded-md bg-white">
                        <img src="/resume-page-icon.svg"/>
                        <p className="text-xl text-cenetr text-black">Your job search just got smarter</p>
                        <p> Before the interview comes the application—make it count.
                             Our AI-powered resume builder crafts tailored, ATS-friendly resumes 
                             designed to pass scanning software and get you noticed.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-4 rounded-md bg-white">
                        <img src="/resume-page-icon.svg"/>
                        <p className="text-xl text-cenetr text-black">Your job search just got smarter</p>
                        <p> Before the interview comes the application—make it count.
                             Our AI-powered resume builder crafts tailored, ATS-friendly resumes 
                             designed to pass scanning software and get you noticed.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-4 rounded-md bg-white">
                        <img src="/resume-page-icon.svg"/>
                        <p className="text-xl text-cenetr text-black">Your job search just got smarter</p>
                        <p> Before the interview comes the application—make it count.
                             Our AI-powered resume builder crafts tailored, ATS-friendly resumes 
                             designed to pass scanning software and get you noticed.</p>
                    </div>

                </div>
                <div>
                    <p className="bg-gray-500 text-white rounded-md py-3 px-6">Get Started Now</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-[100px] my-[200px] w-[80%]">
                {/* new tab will be here */}
                <p className="text-4xl text-white text-center">Real Success Stories</p>
                <p className="text-xl text-gray-400 text-center">Thousands of job seekers have secured their dream roles using our AI-powered resume builder.
                     Designed to optimize for Applicant Tracking Systems (ATS) and tailor resumes to top industry standards, 
                     our smart AI-driven tool has helped professionals across tech, engineering, finance, and more stand out from the competition. 
                     Whether you're applying for leadership roles or switching industries, our AI resume builder ensures your resume gets noticed,
                     increasing interview callbacks and job offers.</p>
                <div className="flex [@media(max-width:1100px)]:flex-col [@media(max-width:1100px)]:w-full items-center gap-4 w-full ">
                    <div className="w-[400px] h-[300px] [@media(max-width:1100px)]:w-[80%] bg-white"></div>
                    <div className="w-[400px] h-[300px] [@media(max-width:1100px)]:w-[80%] bg-white"></div>
                    <div className="w-[400px] h-[300px] [@media(max-width:1100px)]:w-[80%] bg-white"></div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[80px] py-[100px]  w-[80%]">
                <p className="text-center text-5xl [@media(max-width:1100px)]:text-3xl [@media(max-width:1100px)]:w-full font-semibold text-white w-[90%]">Built with Recruiters, Optimized for Hiring—AI-Powered Resumes That Get Results.</p>
                <p className="text-center text-gray-400 text-xl">A power suite of specialized AI tools designed to make you stand out</p>
                <div className="flex flex-col items-center gap-4 w-full">
                    <div className="flex [@media(max-width:1100px)]:flex-col items-center gap-4 w-full">
                    <div className="flex flex-col  gap-4 p-4 rounded-md bg-white hover:shadow-lg">
                        <p className="text-2xl text-black">AI Resume Checker</p>
                        <p className="text-xl">Improve your resume with AI-driven checks. Get detailed analysis, fill information gaps,
                             fix errors and formatting—it's all at your fingertips.</p>
                    </div>
                    <div  className="flex flex-col  gap-4 p-4 rounded-md bg-white hover:shadow-lg">
                        <p className="text-2xl text-black">AI Resume Checker</p>
                        <p className="text-xl">Improve your resume with AI-driven checks. Get detailed analysis, fill information gaps,
                             fix errors and formatting—it's all at your fingertips.</p>
                    </div>
                    </div>
                     <div className="flex [@media(max-width:1100px)]:flex-col items-center gap-4 w-full">
                     <div  className="flex flex-col  gap-4 p-4 rounded-md bg-white hover:shadow-lg">
                        <p className="text-2xl text-black">AI Resume Checker</p>
                        <p className="text-xl">Improve your resume with AI-driven checks. Get detailed analysis, fill information gaps,
                             fix errors and formatting—it's all at your fingertips.</p>
                    </div>
                     <div  className="flex flex-col  gap-4 p-4 rounded-md bg-white hover:shadow-lg">
                        <p className="text-2xl text-black">AI Resume Checker</p>
                        <p  className="text-xl">Improve your resume with AI-driven checks. Get detailed analysis, fill information gaps,
                             fix errors and formatting—it's all at your fingertips.</p>
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
        
        <div className="flex flex-col items-center justify-center gap-5 w-[90%] p-[50px] my-6 bg-gray-500 text-white rounded-2xl">
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

export default AiResumeBuilder