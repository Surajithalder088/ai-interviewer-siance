

import { motion } from "motion/react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../store/store"


interface UserState {
  name: string;
  email: string;
  token: string;
  // Add any other fields as needed
}

const FirstSection = () => {

    const icons=["/airbnb_logo.svg","/expedia_group_logo.svg","/tiktok_logo.svg","/ey_logo.svg","/mckinsey__company_logo.svg","/pwc_logo.svg","/kpmg_logo.svg","/goldman_sachs_logo.svg","/tesla_logo.svg","stripe_logo.svg","/jp_morgan_logo.svg","/lockheed_martin_logo.svg","/airbnb_logo.svg","/expedia_group_logo.svg","/tiktok_logo.svg","/ey_logo.svg","/mckinsey__company_logo.svg","/pwc_logo.svg","/kpmg_logo.svg","/goldman_sachs_logo.svg","/tesla_logo.svg","stripe_logo.svg","/jp_morgan_logo.svg","/lockheed_martin_logo.svg",]


   const navigate= useNavigate()
   const user:UserState = useSelector((state: RootState) => state.user);

    

  return (
    <div className='flex flex-col w-full h-full min-h-[100vh]  text-white'>
    
    <div className='w-full h-full min-h-[100vh] [@media(max-width:1100px)]:flex-col  flex items-center justify-center'>

        <div className='flex flex-col items-center gap-8 w-[40%] [@media(max-width:1100px)]:w-[80%] '>
            <p className=' text-5xl text-center [@media(max-width:1100px)]:text-3xl'>Unlock Your Interview Superpowers with AI,
            Your AI-Powered Interview Copilot</p>
            <div className='flex gap-4 text-[23px] [@media(max-width:1100px)]:text-[16px]'>
                <p>250K+ Offers Received

                </p>
                <p>|</p>
                    <p> 1.2M+ Interviews Aced</p>
            </div>

            <div
            onClick={()=>{
              if(user.name===""){
                navigate('/sign-in')
                return
              }
               navigate('/interview-copilot')
               console.log(user);
               

            }}
            className='bg-gray-400 p-4 flex  items-center justify-around gap-2 hover:gap-6 rounded-xl text-black hover:text-white hover:bg-gray-600 w-fit text-[20px] [@media(max-width:1100px)]:text-[18px] cursor-pointer'>
              Activate AI Interview Mode Now  <p className="">{"->"}</p>

            </div>
            <p className='text-2xl text-gray-600 [@media(max-width:1100px)]:text-[16px] py-3'>Interview Copilot generating actionable guidance for interviews in real-time</p>

        </div>
        <div className='w-[50%] h-[80%] [@media(max-width:1100px)]:w-[80%] bg-gray-600 '>
        <div className=" w-full h-full rounded-3xl">
          <video className='w-full z-[-10] h-full'src='/finalround-hero-video.mp4' autoPlay loop muted playsInline/>
        </div>
            
        </div>
    </div>
    <div className='flex flex-col gap-4 items-center justify-center w-full h-full'>
        <div className='text-[45px] [@media(max-width:1100px)]:text-[25px] [@media(max-width:1100px)]:w-[80%] w-[50%]'>300,000+ offers from the most exciting companies and organizations</div>
       
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
    </div>
  )
}

export default FirstSection