import { useEffect, useRef, useState } from "react"
import Navbar from "../../components/navbar"
import { motion } from "framer-motion"
import QuestionAndAnswer from "../../components/Question&Answer"
import Footer from "../../components/footer"
import MenuNavbar from "../../components/MenuNavbar"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useNavigate } from "react-router-dom"


const data = [
  { name: "Surajit", email: "surajit@example.com", role: "Developer", location: "Kolkata" },
  { name: "Alex", email: "alex@example.com", role: "Designer", location: "Bangalore" },
  { name: "Rina", email: "rina@example.com", role: "Manager", location: "Hyderabad" },
  { name: "Rina", email: "rina@example.com", role: "Manager", location: "Hyderabad" },
];




const icons=["/airbnb_logo.svg","/expedia_group_logo.svg","/tiktok_logo.svg","/ey_logo.svg","/mckinsey__company_logo.svg","/pwc_logo.svg","/kpmg_logo.svg","/goldman_sachs_logo.svg","/tesla_logo.svg","stripe_logo.svg","/jp_morgan_logo.svg","/lockheed_martin_logo.svg","/airbnb_logo.svg","/expedia_group_logo.svg","/tiktok_logo.svg","/ey_logo.svg","/mckinsey__company_logo.svg","/pwc_logo.svg","/kpmg_logo.svg","/goldman_sachs_logo.svg","/tesla_logo.svg","stripe_logo.svg","/jp_morgan_logo.svg","/lockheed_martin_logo.svg",]

const InterviewCopilot = () => {
  const [copilotServices, setCopilotServices] =useState(1)

  const [sideBarOpen,setSideBarOpen]=useState(false)

  const [showNavbar, setShowNavbar] = useState<boolean>(true)
     const lastScrollY = useRef(0);
     const [scrollUp, setScrollUp] = useState(false);

     const [isHovered, setIsHovered] = useState(false);



      const user = useSelector((state: RootState) => state.user);
      const navigate=useNavigate()
  
  
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
    <div className={`w-[100vw]  relative  h-full min-h-[100vh] bg-gradient-to-r from-black via-gray-600 to-black`}>
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

   
    <div className={ `flex flex-col items-center pt-[60px]` }>

      <div className={`${sideBarOpen===false?"hidden":"flex flex-col gap-6"}  h-fit max-h-[100vh] py-[80px] w-[80%]`}>
       <p className="text-white text-4xl font-bold w-full">Live Interview</p>
       <p className="text-gray-200 font-semibold text-md ">Interview Copilot is your real-time AI partner that offers on-the-fly, personalized interview support.
         It transcribes each question, analyzes job descriptions and company details, and provides dynamic guidance tailored to your background. 
         With coverage across 100+ industries, multilingual support, and seamless integration into popular meeting platforms, 
        you’ll confidently tackle any live interview question that comes your way.</p>

       <div className="flex flex-col items-center  justify-center">

        <motion.div
        initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.9 }}
        className="flex [@media(max-width:1100px)]:flex-col items-center justify-around gap-[50px]">
          <div 
          onClick={()=>{
            navigate(`/general-interview/${654}`)
          }}
          className="flex flex-col hover:bg-gray-300 w-[250px] hover:text-black cursor-pointer items-center py-3 px-6 border-1 border-gray-400 rounded-md bg-gray-500 text-white">
            <img src="/laptop.png" className="w-[50px]"/>
            <p className="text-[15px] font-bold">General Interview</p>
          </div>
          <div className="flex flex-col cursor-not-allowed hover:bg-gray-300 w-[250px] hover:text-black  items-center py-3 px-6 border-1 border-gray-400 rounded-md bg-gray-500 text-white">
            <img src="/coding-interview.png" className="w-[50px]"/>
            <p className="text-[15px] font-bold">Coding Copilote Interview</p>
          </div>
          <div className="flex flex-col hover:bg-gray-300 w-[250px] hover:text-black cursor-not-allowed items-center py-3 px-6 border-1 border-gray-400 rounded-md bg-gray-500 text-white">
            <img src="/hireview.png" className="w-[50px]"/>
            <p className="text-[15px] font-bold">HireVue Interview</p>
          </div>
          <div className="flex flex-col hover:bg-gray-300 w-[250px] hover:text-black cursor-not-allowed items-center py-3 px-6 border-1 border-gray-400 rounded-md bg-gray-500 text-white">
            <img src="/phone-interview.png" className="w-[50px]"/>
            <p className="text-[15px] font-bold">Phone Intervew</p>
          </div>

        </motion.div>

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
     
      <div className="flex flex-col items-center justify-center h-screen [@media(max-width:1100px)]:mt-[300px]  gap-4 [@media(max-width:1100px)]:w-[100%]">
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col gap-3 items-center w-[60%]">
          <p className="text-[45px] text-center text-white [@media(max-width:1100px)]:text-[28px]">Interview Copilot™: Your Ultimate AI Interview Assistant</p>
          <p className="text-[25px] text-center text-gray-400  [@media(max-width:1100px)]:text-[18px]">Get AI-powered responses that keep you calm, cool, and collected. Even when the pressure's on.</p>
        </motion.div>
        <motion.div 
       
        onClick={()=>{
              if(user.name===""){
                navigate('/sign-in')
                return
              }
               setSideBarOpen(true) ; 
                setScrollUp(true)
               
               

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
        
          <div className="z-100">Get started for free</div>
          </motion.div>
       
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center  [@media(max-width:1100px)]:justify-start   gap-2 w-[80%] font-bold [@media(max-width:1100px)]:max-w-screen  [@media(max-width:1100px)]:overflow-scroll [@media(max-width:1100px)]:scroll-x-auto">
            <p onClick={()=>setCopilotServices(1)}
            className={`bg-white rounded-md py-1.5 px-[50px] cursor-pointer ${copilotServices===1?"text-gray-500":"text-black"}`}>All</p>
            <p onClick={()=>setCopilotServices(2)}
            className={`bg-white rounded-md py-1.5 px-[50px] cursor-pointer ${copilotServices===2?"text-gray-500":"text-black"}`}>ProductManagement</p>
            <p onClick={()=>setCopilotServices(3)}
            className={`bg-white rounded-md py-1.5 px-[50px] cursor-pointer ${copilotServices===3?"text-gray-500":"text-black"}`}>Consulting</p>
            <p onClick={()=>setCopilotServices(4)}
           className={`bg-white rounded-md py-1.5 px-[50px]  cursor-pointer ${copilotServices===4?"text-gray-500":"text-black"}`}>Marketing</p>
            <p onClick={()=>setCopilotServices(5)}
           className={`bg-white rounded-md py-1.5 px-[50px] cursor-pointer ${copilotServices===5?"text-gray-500":"text-black"}`}>Finance</p>

          </div>
          <p className="text-center text-white w-[70%] text-[18px] py-6 [@media(max-width:1100px)]:w-[90%]">
            {copilotServices===1?"Interview Copilot™ offers an all-in-one AI interview helper to help you tackle every hurdle, and keep you prepared and ready to excel, no matter what's thrown your way.":
            copilotServices===2?"Designed by top PMs, Interview Copilot trains you with real-world case studies and instant AI feedback—so you think, respond, and impress like a true product leader.":
            copilotServices===3?"Final Round AI was built with input from real consultants at McKinsey, Bain, and BCG—so you get the insider edge you won’t find anywhere else.":
            copilotServices===4?"Trained on real marketing interviews from top brands like Google and Meta, Interview Copilot ensures you’re ready for the real thing—no guesswork, just results.":
            "Built with input from professionals at Goldman Sachs and Morgan Stanley, Interview Copilot gives you real-world finance questions and personalized feedback—so you’re always prepared."



            }
            
          </p>
        </div>

      </div>

      <div className="flex flex-col items-center justify-center [@media(max-width:1100px)]:w-[90%]">
        <div className="flex flex-col items-center justify-center">
          <img src="/copilote-page-image.webp"/>
        </div>
        <div className="flex flex-col items-center justify-center w-[60%] [@media(max-width:1100px)]:w-[90%] ">
          <p className="text-[40px] text-center text-white py-[30px]  [@media(max-width:1100px)]:text-[28px]">Join a community of 500k+ candidates who've landed jobs at top companies</p>
        </div>

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

      <div className="flex flex-col items-center justify-center [@media(max-width:1100px)]:w-[100%]">
        <div className="flex flex-col items-center gap-4 justify-center w-[60%] ">
          <p className="font-bold text-6xl text-white [@media(max-width:1100px)]:text-[34px]">Loved by job seekers.</p>
         <p  className="font-bold text-6xl text-white [@media(max-width:1100px)]:text-[34px]"> Backed by real results.</p>
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

        <div className="flex flex-col items-center gap-5 justify-center w-[90%] py-[100px]">
          <p className=" font-bold text-4xl text-center text-white">Don't let nerves steal your spotlight</p>
          <p className="text-center w-[60%] text-gray-400 [@media(max-width:1100px)]:w-[100%] text-[18px]">Interview anxiety is real—93% of applicants experience it at least once. 
            From tough questions to second-guessing responses, it's easy to feel overwhelmed. But it doesn't have to be like that.
             Interview Copilot™ offers an all-in-one AI interview helper to help you tackle every hurdle,
             and keep you prepared and ready to excel, no matter what's thrown your way.</p>
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex gap-4 [@media(max-width:1100px)]:flex-col items-center justify-center">
              <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl">
                <img className="w-20 h-20" src="/spot-icon-1.svg"/>
                <p>Mind going blank even on the questions you've practiced a dozen time</p>
              </div>
              <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl">
              <img className="w-20 h-20" src="/spot-icon-2.svg"/>
                <p>Rambling and over explaining until you've totally forgotten your point</p>
              </div>
              <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl">
              <img className="w-20 h-20" src="/spot-icon-1.svg"/>
                <p>Freezing up when the interviewer throws in a question you didn't expect</p>
              </div>
            </div>
            <div className="flex gap-4 [@media(max-width:1100px)]:flex-col items-center justify-center" >
            <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl">
            <img className="w-20 h-20" src="/spot-icon-2.svg"/>
                <p>Losing your train of thought mid-answer, stumbling, and feeling embarrassed
                </p>
              </div>
              <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl">
                 <img className="w-20 h-20" src="/spot-icon-1.svg"/>
                <p>Struggling to freestyle on spontaneous questions without going off track</p>
              </div>
              <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl">
              <img className="w-20 h-20" src="/spot-icon-2.svg"/>
                <p>Brain turning to "mush" just when you need to sound clear and confident</p>
              </div>
            </div>

          </div>

        </div>

        <div className="flex flex-col items-center gap-5 justify-center rounded-2xl w-[90%] bg-gradient-to-tr from-gray-300 via-black to-gray-400  border-white border-3 p-[30px] ">
          <p className="font-bold text-4xl text-center text-gray-400">
          Real-time AI Suggestions
          </p>
          <p className="text-center text-white w-[60%] [@media(max-width:1100px)]:w-[100%] text-[18px]">
          Receive instant, accurate, and personalized responses to reduce hesitation and maximize answer value. With your Interview CoPilot, no question is unanswered. You are always prepared and in control of your next answer. </p>
       <div className="flex [@media(max-width:1100px)]:flex-col gap-4 items-center justify-center ">
        <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl">
          <p className="text-center text-xl font-bold">Contextual Awareness</p>
          <p className="text-[18px]">Automatically analyze job descriptions and company details, ensuring clarity and tailored responses aligned with the role and organization.</p>
        </div>
        <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl">
        <p className="text-center text-xl font-bold">Personalized Responses
          </p>
          <p className="text-[18px]">Provide valuable answers that reflect your background, skills, and professional expertise. No more second-guessing the right response.</p>
        </div>
        <div className="flex flex-col gap-2 p-[20px] bg-white rounded-3xl">
        <p className="text-center text-xl font-bold">Customized Interview Prep</p>
        <p className="text-[18px]">Train your copilot using materials like a resume, job description, and Q&A, to stay ahead of the curve. Excel at interviews and earn a piece of mind by staying prepared every step of the way.</p>
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

        <div className="flex flex-col items-center gap-5 justify-center w-[90%] py-[100px] ">
          <p className="rounded-2xl bg-gray-200 text-gray-700 text-center [@media(max-width:1100px)]:text-[20px]  p-2">Interview Copilot™</p>
          <p className="text-[40px] font-bold text-white [@media(max-width:1100px)]:text-[30px] text-center">The ultimate secret weapon for crushing your next interview</p>
          <p className="text-center text-gray-400 w-[60%] [@media(max-width:1100px)]:w-[100%]">Interview Copilot has helped professionals across 100+ global industries,
             seasoned and beginners, to elevate their interview game and secure positions at leading global companies.</p>
          <div className="flex [@media(max-width:1100px)]:flex-col gap-4 items-center justify-center">
            <div className="flex flex-col gap-2 p-[20px] bg-white rounded-md min-w-[400px] [@media(max-width:1100px)]:min-w-[100%] h-[200px]">
              <p className="text-[20px] font bold text-black">Improve interview skills</p>
              <p>Our AI Interview Copilot helps refine interview skills, practice responses, communicate effortlessly and clearly, 
                test and adjust approaches, and boost your confidence before the big event.</p>
            </div>
            <div className="flex flex-col gap-2 p-[20px] bg-white rounded-md min-w-[400px] [@media(max-width:1100px)]:min-w-[100%] h-[200px]">
              <p className="text-[20px] font bold text-black">Transition into a new career</p>
              <p>Enjoy tailored feedback based on specific industries to boost your compatibility during the interview and improve employability.</p>

            </div>
            <div className="flex flex-col gap-2 p-[20px] bg-white rounded-md min-w-[400px] [@media(max-width:1100px)]:min-w-[100%] h-[200px]">
              <p className="text-[20px] font bold text-black">Prepare for higher-up roles</p>
              <p>Interview for high-stakes positions across any industry with confidence. The Interview Copilot™ designs industry-specific scenarios and
                 personalized suggestions to ensure you are fit to apply for your dream role.</p>

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

export default InterviewCopilot