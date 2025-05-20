import { useEffect, useRef, useState } from "react";
import Footer from "../../components/footer";
import MenuNavbar from "../../components/MenuNavbar";
import Navbar from "../../components/navbar";
import QuestionAndAnswer from "../../components/Question&Answer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setInterview } from "../../store/interviewSlice";



const data = [
  { name: "Surajit", email: "surajit@example.com", role: "Developer", location: "Kolkata" },
  { name: "Alex", email: "alex@example.com", role: "Designer", location: "Bangalore" },
  { name: "Rina", email: "rina@example.com", role: "Manager", location: "Hyderabad" },
  { name: "Rina", email: "rina@example.com", role: "Manager", location: "Hyderabad" },
  { name: "Rina", email: "rina@example.com", role: "Manager", location: "Hyderabad" },
  { name: "Rina", email: "rina@example.com", role: "Manager", location: "Hyderabad" },
];

interface UserState {
  name: string;
  email: string;
  token: string;
  // Add any other fields as needed
}

interface InterviewState {
  role: string;
  experience: string;
  domain: string;
  company:string;
  jobDetails:string;
  companyDetails:string;
  // Add any other fields as needed
}

const MockInterview = () => {


   
   const user:UserState = useSelector((state: RootState) => state.user);
   const dispatch=useDispatch<AppDispatch>();

   
  const navigate= useNavigate()
    const [sideBarOpen,setSideBarOpen]=useState(false)
  
    const [showNavbar, setShowNavbar] = useState<boolean>(true)
       const lastScrollY = useRef(0);
       const [scrollUp, setScrollUp] = useState(false);

       const[openTab,setOpenTab]=useState(false)
       const[interviewMode,setInterviewMode]=useState<string>("")
       const[hoverDetail,setHoverDetail]=useState("")


       // these variable stores data for mock interview 
       const[experience,setExperience]=useState("")
       const[role,setRole]=useState("")
       const[domain,setDomein]=useState("")
       const[company,SetCompany]=useState("")
       const[comapnyDetails,setCompanyDetails]=useState("")
    
    
       useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        let lastS=lastScrollY.current
        console.log( currentScrollY ,lastS);
        
        
        
  
        if (currentScrollY <= lastS) {
          setShowNavbar(true);  // scrolling up
          console.log("true");
          console.log(showNavbar);
          
          } else if(currentScrollY >= lastS) {
          setShowNavbar(false); // scrolling down
          console.log("false");
           console.log(showNavbar);
          
        }
  
        lastScrollY.current = currentScrollY;
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  
    // when the side bar willl be open the it handle the scroll to top activity
     useEffect(() => {
      
  
      if (scrollUp) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setScrollUp(false); // reset if needed
      }
    }, [sideBarOpen]);


  return (
    <>{

      openTab===false?
     (<div className={`w-[100vw]  relative  h-full min-h-[100vh] bg-gradient-to-r from-black via-gray-600 to-black`}>
      <div
    className={`fixed ${sideBarOpen===true?"hidden":""} top-0 w-full z-50 transition-transform  duration-300 ${showNavbar===true?"translate-y-0":"-translate-y-full"}`}
    >
     <Navbar/>
     </div>
      <div
    className={`fixed ${sideBarOpen===false?"hidden":""} top-0 w-full z-50 transition-transform  duration-300 ${showNavbar===true?"translate-y-0":"-translate-y-full"}`}
    >
     <MenuNavbar/>
     </div>

   
    <div className={ `flex flex-col items-center ` }>

      <div className={`${sideBarOpen===false?"hidden":"flex flex-col gap-6"}  h-fit max-h-[100vh] py-[80px] w-[80%]`}>
       <p className="text-white text-4xl font-bold w-full">Mock Interview</p>
       <p className="text-gray-200 font-semibold text-md ">Elevate your interview skills with AI Mock
         Interview that offers realistic practice sessions, instant feedback,
         and job-specific questions to transform your weaknesses into strengths. Practice anytime, 
        anywhere—no scheduling or stress required—and walk into your real interview fully prepared and confident.</p>

       <div className="flex flex-col items-center justify-center">

        <div className="flex items-center [@media(max-width:1100px)]:flex-col justify-around gap-[50px]">

           {/* below one is  mock interview based on specific job role */}
          <div
          onClick={()=>{
            setOpenTab(true)
            setInterviewMode("ReadinessAssessment")

          }}
          onMouseEnter={()=>{
            setHoverDetail("ReadinessAssessment")
          }}
          onMouseLeave={()=>{
            setHoverDetail("")
          }}
          className="flex flex-col hover:bg-gray-300 w-[280px] hover:text-black cursor-pointer items-center py-3 px-6 border-1 border-gray-400 rounded-md bg-gray-500 text-white">
            <img src="/ai-assesment.png" className="w-[50px]"/>
            <p className="text-[15px] font-bold">Start Job Readiness Assessment</p>
          </div>
          {hoverDetail==="ReadinessAssessment"&& <div
          onMouseEnter={()=>{
            setHoverDetail("ReadinessAssessment")
          }}
          onMouseLeave={()=>{
            setHoverDetail("")
          }}
          className="absolute mt-[180px] mr-[400px] h-fit max-w-[200px] shadow-2xl shadow-blue-700 z-100 bg-white p-4 rounded-b-2xl rounded-r-2xl">
          <p>AI Mock Interview based on specific Job Profile!</p>
          </div>}

          {/* below one is normal mock interview based on yourt profile */}
          <div 
          onClick={()=>{
            setOpenTab(true)
            setInterviewMode("MockInterview")

          }}
          onMouseEnter={()=>{
            setHoverDetail("MockInterview")
          }}
           onMouseLeave={()=>{
            setHoverDetail("")
          }}
          className="flex flex-col hover:bg-gray-300 w-[250px] hover:text-black cursor-pointer items-center py-3 px-6 border-1 border-gray-400 rounded-md bg-gray-500 text-white">
            <img src="/ai-mock.png" className="w-[50px]"/>
            <p className="text-[15px] font-bold">Start Mock Interview</p>
          </div>
         {hoverDetail==="MockInterview"&& <div 
          onMouseEnter={()=>{
            setHoverDetail("MockInterview")
          }}
           onMouseLeave={()=>{
            setHoverDetail("")
          }}
         className="absolute mt-[150px] ml-[200px] h-fit max-w-[200px] z-100 bg-white shadow-2xl shadow-blue-700 p-4 rounded-b-2xl rounded-r-2xl">
          <p>AI Mock Interview based on Your Profile!</p>
          </div>}


          <div onClick={()=>navigate('/question-bank')} className="flex flex-col hover:bg-gray-300 w-[250px] hover:text-black cursor-pointer items-center py-3 px-6 border-1 border-gray-400 rounded-md bg-gray-500 text-white">
            <img src="/ai-practice.png" className="w-[50px]"/>
            <p className="text-[15px] font-bold">Start Practicing Question</p>
          </div>
          

        </div>

        <div className="flex flex-col bg-gray-400 rounded-lg [@media(max-width:1100px)]:max-h-[200px] [@media(max-width:1100px)]:max-w-[270px] w-full min-h-[140px] mt-[50px] overflow-x-scroll">
         
          <table className="w-full  ">
           <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2 border">Interview</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Appointment</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
                <tbody>
          {data.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">{user.location}</td>
            </tr>
          ))}
        </tbody>

          
         </table>
        </div>

       </div>
      </div>
     
      <div className="flex flex-col items-center justify-center h-screen gap-4 [@media(max-width:1100px)]:w-[100%]">
        <div className="flex flex-col gap-3 items-center w-[60%]">
          <p className="text-[45px] text-center text-white [@media(max-width:1100px)]:text-[28px]">AI Interview Practice – Your Ultimate Online Interview Practice Tool</p>
          <p className="text-[25px] text-center text-gray-400  [@media(max-width:1100px)]:text-[18px]">Face the toughest mock interviews in the world—rigorous standards, intense questions,
           and zero room for error. Practice with industry giants like Microsoft, Netflix, and OpenAI, and gain the confidence and
           skills you need to ace any real interview with ease.</p>
        </div>

        
        <div 
       
            onClick={()=>{
              if(user.name===""){
                navigate('/sign-in')
                return
              }
               setSideBarOpen(true) ; 
                setScrollUp(true)
            }}
        className=" flex py-2 bg-gray-400 text-[18px] my-3 text-white cursor-pointer px-3 rounded-xl hover:bg-gray-200 hover:text-gray-600 font-bold">Get started for free</div>
        </div>

      <div className="flex flex-col items-center mb-5 justify-center [@media(max-width:1100px)]:w-[90%]">
       
        <div className="flex flex-col items-center justify-center w-[60%] [@media(max-width:1100px)]:w-[90%] ">
          <p className="text-[40px] text-center text-white py-[30px]  [@media(max-width:1100px)]:text-[28px]">Join a community of 500k+ candidates who've landed jobs at top companies</p>
        </div>

        <div className="flex [@media(max-width:1100px)]:flex-col items-center gap-[30px]">
          <div className="flex flex-col items-center bg-gray-400 rounded-lg text-2xl gap-[30px] p-[20px]">
            <img className="h-[30px]" src="/microsoft.png"/>
            <p>AI Engineer</p>
          </div>
          <div className="flex flex-col items-center bg-gray-400 rounded-lg text-2xl gap-[30px] p-[20px]">
            <img className="h-[30px]"  src="/netflix.png"/>
            <p>Platform Engineer</p>
          </div>
          <div className="flex flex-col items-center bg-gray-400 rounded-lg text-2xl gap-[30px] p-[20px]">
            <img className="h-[30px]"  src="/openai.png"/>
            <p>Research Engineer</p>
          </div>
        </div>
        

      </div>

      <div className="w-[80%] flex flex-col items-center gap-[25px] py-[40px]">
        <p className="text-5xl text-center text-white w-[60%]"> Unlock Your Interview Success with AI-Powered Mock Interviews</p>
        <p className="text-2xl text-gray-400">Transform your interview skills with AI-driven mock interviews that mimic real-world scenarios, helping you refine answers,
           eliminate mistakes, and boost confidence like never before.</p>

        <div className="flex [@media(max-width:1100px)]:flex-col items-center justify-around gap-[25px]">
          <div className="flex flex-col bg-gray-300 rounded-lg text-xl text-gray-500 p-[40px] h-[250px] w-[45%] [@media(max-width:1100px)]:w-fit">
            
            <p className="text-3xl text-black">Master Your Responses</p>
            <p >Get precise, AI-generated feedback to polish your answers</p>

          </div>
          <div className="flex flex-col bg-gray-300 rounded-lg text-xl text-gray-500 p-[40px] h-[250px] w-[45%] [@media(max-width:1100px)]:w-fit">
            
            <p className="text-3xl text-black">Speak with Clarity</p>
            <p>Eliminate filler words and awkward phrasing with AI coaching for confident, professional delivery.</p>

          </div>
          <div className="flex flex-col bg-gray-300 rounded-lg text-xl text-gray-500 p-[40px] h-[250px] w-[45%] [@media(max-width:1100px)]:w-fit">
            
            <p className="text-3xl text-black">Build Confidence</p>
            <p>Practice in realistic scenarios until you feel fully prepared to ace any interview.</p>

          </div>
        </div>

        <p className="text-2xl text-gray-400">No matter your industry or role—whether you’re preparing for behavioral, technical, or niche interviews—AI Mock Interview personalizes
           your practice, delivering tailored feedback that sharpens your skills.
           Ready to transform your interview performance? Try AI Mock Interview today and experience the difference!</p>
      </div>

      <div className="flex flex-col items-center justify-center [@media(max-width:1100px)]:w-[100%]">
        <div className="flex flex-col items-center gap-4 justify-center w-[60%] ">
          <p className="font-bold text-6xl text-white [@media(max-width:1100px)]:text-[34px]">See Why Job Seekers Love Our AI Mock Interviews</p>
       
          <p className="text-[25px] text-gray-400 [@media(max-width:1100px)]:text-[15px]">Product Hunt, users are calling it a game-changer for landing top jobs.</p>
        </div>
        <div className="flex gap-2 [@media(max-width:1100px)]:flex-col items-center justify-center w-[80%] py-[100px]">
          <div  className="flex items-center w-full h-full justify-center py-5 bg-white">
               <video className='w-[80%] h-[80%] rounded-3xl' src='https://youtu.be/gFRVLOCv3J0'
            autoPlay muted playsInline/>
             </div>

             <div  className="flex items-center w-full h-full justify-center py-5 bg-white">
               <video className='w-[80%] h-[80%] rounded-3xl' src='https://youtu.be/gFRVLOCv3J0'
            autoPlay muted playsInline/>
             </div>
             <div  className="flex items-center w-full h-full justify-center py-5 bg-white">
               <video className='w-[80%] h-[80%] rounded-3xl' src='https://youtu.be/gFRVLOCv3J0'
            autoPlay muted playsInline/>
             </div>

        </div>

       

        <div className="flex flex-col items-center gap-5 justify-center rounded-2xl w-[90%] bg-gradient-to-tr from-gray-300 via-black to-gray-400  border-white border-3 p-[30px] ">
         
       
       <div className="flex items-center [@media(max-width:1100px)]:flex-col gap-2"> 
        <div className=" flex flex-col gap-[30px] w-[50%]">
          <p className="font-bold text-4xl  text-gray-400">
          Real-time AI Suggestions
          </p>
          <p className="text-center text-white w-[60%] [@media(max-width:1100px)]:w-[100%] text-[18px]">
          Receive instant, accurate, and personalized responses to reduce hesitation and maximize answer value. With your Interview CoPilot,
           no question is unanswered. You are always prepared and in control of your next answer. </p>
        </div>

        <img src="/practice-pc-1.png" className="w-[40%]"/>
        </div> 
      
      
       <div className="flex [@media(max-width:1100px)]:flex-col gap-4 items-center justify-center ">
        <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl h-[500px]">
          <p className="text-center text-xl font-bold">Practice Anytime, Anywhere</p>
          <p className="text-[18px]">With our mock interview practice AI, train on your schedule without coordinating with coaches <br/>
• 24/7 Access – No schedules, no stress. Fit mock interviews into your busy life.<br/>
• Realistic Simulations – Face diverse questions, formats, and difficulty levels.<br/>
• Instant AI Feedback – Get real-time insights to refine responses and build confidence.<br/>
Practice mock interviews at your pace to sharpen skills and ace your real interview.</p>
        </div>
        <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl h-[500px]">
        <p className="text-center text-xl font-bold">Turn Weaknesses Into Strengths
          </p>
          <p className="text-[18px]">
           Even small flaws in your responses can hurt your chances. Our mock interviews help you improve:<br/>
• Fix Weak Spots – Eliminate filler words, awkward phrasing, and hesitation.<br/>
• Enhance Storytelling – Craft clear, compelling narratives to showcase skills.<br/>
• Boost Confidence – Repeated mock interview practice builds composure under pressure.<br/>
Transform weaknesses into strengths for a polished interview presence.

            </p>
        </div>
        <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl h-[500px]">
        <p className="text-center text-xl font-bold">Tailor Mock Interviews to Your Role</p>
        <p className="text-[18px]">
         No two interviews are the same. Our mock interview AI adapts to your career goals:<br/>
• Industry-Specific Prep – Practice for technical, finance, marketing, or other roles.<br/>
• Customized Feedback – AI tailors difficulty and insights to your experience.<br/>
• Targeted Skill Building – Focus on competencies that matter for your career.<br/>
Personalized mock interviews ensure you’re ready to impress in any interview.

          </p>
        </div>
       </div>
       
        </div>

        <div className="flex flex-col items-center gap-5 justify-center rounded-2xl w-[90%] py-[100px] ">
          <p className="text-4xl font-bold text-white text-center  [@media(max-width:1100px)]:text-[34px]">Fast track your career with AI Interview Assistant</p>
          <p className="text-[20px] text-gray-400 text-center w-[70%] [@media(max-width:1100px)]:w-[100%]">Put the AI interview tools to the test! Explore the tool and leverage its powers. No fuss or commitment—opt in or out whenever you want. Get maximum flexibility during interview prep and exceed expectations.</p>
          <div className="flex flex-col w-full  gap-5 items-center justify-center">
            <div className="flex [@media(max-width:1100px)]:flex-col w-full gap-4 items-center justify-center">
              <div className="flex flex-col gap-2 p-[20px] [@media(max-width:1100px)]:min-w-[100%] [@media(max-width:1100px)]:min-h-fit bg-white border-red-700 border-1 rounded-3xl min-w-[600px] h-[200px]">
               <p className="text-[20px] text-black font-bold">Less for More</p>
                <p>Interview coaching is time-consuming and expensive. Interview Copilot™ simplifies your prep with AI-driven guidance.</p>
              </div>
              <div className="flex flex-col gap-2 p-[20px] [@media(max-width:1100px)]:min-w-[100%] [@media(max-width:1100px)]:min-h-fit  bg-white border-purple-600 border-1 rounded-3xl min-w-[600px] h-[200px]">
                <p className="text-[20px] text-black font-bold">Fill Interview Gaps</p>
                <p>No more awkward pauses or getting stuck mid-interview. Interview Copilot™ listens and analyzes interview conversations in real-time, 
                  helping clarify questions, provide context, and design relevant,
                   real-time responses to ensure you navigate the conversation confidently.</p>
              </div>
            </div>
            <div className="flex gap-4 [@media(max-width:1100px)]:flex-col items-center justify-center">
              <div className="flex flex-col gap-2 p-[20px] [@media(max-width:1100px)]:min-w-[100%] [@media(max-width:1100px)]:min-h-fit   bg-white border-red-700 border-1 rounded-3xl max-w-[600px] h-[200px]">
                <p className="text-[20px] text-black font-bold">Globally Accessible</p>
                <p>With 29 languages and accents available, every applicant gets their best shot at an interview. 
                  Interview Copilot™ helps you communicate in a foreign language or your native language in real-time, 
                  streamlining understanding while enabling every applicant to stand out, regardless of location.</p>
              </div>
              <div className="flex flex-col gap-2 p-[20px] [@media(max-width:1100px)]:min-w-[100%] [@media(max-width:1100px)]:min-h-fit bg-white border-purple-600 border-1 rounded-3xl min-w-[600px] h-[200px]">
                <p className="text-[20px] text-black font-bold">Applicable for Every Industry</p>
                <p>Whether you're an expert in your field or a beginner, Interview Copilot™ prepares you for 100+ industries
                   with domain-centric knowledge for interviews in Marketing, Consulting,
                   Healthcare, Finance, Software, and more.</p>
              </div>

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
    :
   ( <div className=" h-full min-h-[100vh] flex flex-col items-cenetr justify-center  w-[100vw] bg-gradient-to-r from-black via-gray-600 to-black">
    

    {
     interviewMode==="MockInterview" ?<div className="flex flex-col mx-[30vw] [@media(max-width:1100px)]:mx-[10px] h-fit bg-gray-400 p-[30px] gap-[20px] rounded-lg">

      <div className="flex items-center justify-between text-xl">
      <p className="text-white">Start Your Next Interview</p> 
      <p className="cursor-pointer"
      onClick={()=>setOpenTab(false)}
      >X</p></div>

      <div className="flex flex-col w-full text-black py-[20px] gap-[10px] text-xl">
        <p>Resume</p>
        <p>Experience</p>
        <input value={experience} onChange={(e)=>setExperience(e.target.value)} className="outline-1"/>
        <p>Role</p>
        <input  value={role} onChange={(e)=>setRole(e.target.value)} className="outline-1"/>
        <p>Select Knowledge Domain(Specialization) </p>
       <input value={domain} onChange={(e)=>setDomein(e.target.value)} className="outline-1"/>
        <p>Interview Type </p>
       <input className="outline-1"/>

        <p>Schedule your interview</p>
      </div>

      <div className="flex gap-10 text-black items-center">
        <p
        onClick={()=>setOpenTab(false)}
        className="cursor-pointer hover:font-bold">Cancel</p>
        <p   
        onClick={()=>{
          const data:InterviewState={
            role,
            experience,
            domain,
            company:"",
            jobDetails:"",
            companyDetails:""
          }
           dispatch(setInterview(data))
            console.log(data);

          
          setOpenTab(false)
        navigate("/interview/"+987)
        }}
        className=" bg-gray-600 rounded-lg p-2 cursor-pointer text-white">Launch</p>
      </div>

    </div>:

      <div className="flex flex-col mx-[30vw] [@media(max-width:1100px)]:mx-[10px] h-fit bg-gray-400 p-[30px] gap-[20px] rounded-lg">

      <div className="flex items-center justify-between text-xl">
      <p className="text-white">Job Readiness Assessment</p> 
      <p className="cursor-pointer"
      onClick={()=>setOpenTab(false)}
      >X</p></div>

      <div className="flex flex-col w-full text-black py-[20px] gap-[10px] text-xl">
        <p>Position</p> {/*experience */}
        <input value={experience} onChange={(e)=>setExperience(e.target.value)} className="outline-1"/>
        <p>Role Level</p>
        <input value={role} onChange={(e)=>setRole(e.target.value)} className="outline-1"/>
        <p>Company</p>
       <input value={company} onChange={(e)=>SetCompany(e.target.value)} className="outline-1"/>
        <p>Job Describtion </p>{/*domain */}
       <input value={domain} onChange={(e)=>setDomein(e.target.value)} className="outline-1"/>

        <p>Company Details</p>

          <input value={comapnyDetails} onChange={(e)=>setCompanyDetails(e.target.value)} className="outline-1"/>
      </div>

      <div className="flex gap-10 text-black items-center">
        <p
        onClick={()=>setOpenTab(false)}
        className="cursor-pointer hover:font-bold">Cancel</p>
        <p   
        onClick={async()=>{
          const data:InterviewState={
            role,
            experience,
            domain,
            company,
            jobDetails:domain,
            companyDetails:comapnyDetails
          }
           dispatch(setInterview(data))
           console.log(data);
           

          setOpenTab(false)
        navigate("/interview/"+987)
        }}
        className=" bg-gray-600 rounded-lg p-2 cursor-pointer text-white">Launch</p>
      </div>

    </div>
    
    }

    </div>)
    }
    </>
  )
}

export default MockInterview