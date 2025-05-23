import {  useState } from "react"
import { useNavigate } from "react-router-dom"

import VideoCall from "../../components/videoCallLive.tsx";


const GeneralInterview = () => {
const [speaker,setSpeaker]=useState(false)
const [video,setVideo]=useState(false)

const navigate=useNavigate()



  return (
    <div className="min-w-[100vw] min-h-[100vh] [@media(max-width:1100px)]:max-w-screen bg-gradient-to-tl text-white from-gray-900 via-gray-500  to-gray-900">
       
       <div className="flex items-center justify-between p-3 px-[150px] [@media(max-width:1100px)]:px-8 text-white bg-gray-800">
        <div className="text-xl font-bold">Live Interview</div>
         <div className="flex gap-3">

            <div
            onClick={
              ()=>{
                setVideo(!video)
              }
            }
            className="bg-gradient-to-l from-pink-500 to-purple-500 p-1 rounded-full h-fit cursor-pointer border-1" >
              <img className="w-[20px] h-[20px]" src={video?"/video-on.png":"/no-video.png"}/></div>

             <div 
             onClick={
              ()=>{
                setSpeaker(!speaker)
              }
            }
             className="bg-gradient-to-l flex gap-1 from-pink-500 to-purple-500 p-1 rounded-full h-fi cursor-pointer border-1" >
              <img className="w-[20px] h-[20px]" src={speaker?"/speaker.png":"/speaker-off.svg"}/>   </div>
            
            <div className="bg-gradient-to-l from-pink-500 to-purple-500 p-1 rounded-full h-fit cursor-pointer" >
              <img className="w-[20px] h-[20px]" src="/setting-call.svg"/></div>

             <div 
             onClick={
              ()=>{
              navigate('/interview-copilot')
              }
            }
              className="bg-gradient-to-l from-pink-500 to-purple-500 p-1 rounded-full h-fit cursor-pointer" ><img className="w-[20px] h-[20px]" src="/power-off.png"/></div>
          </div>
        </div>

        <div className=" bg-transparent w-full flex pl-[100px] [@media(max-width:1100px)]:pl-0">
         <VideoCall/>
        

        </div>

    </div>
  )
}

export default GeneralInterview