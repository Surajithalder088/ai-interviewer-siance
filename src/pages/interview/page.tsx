import { useEffect, useRef, useState } from "react"




const Interview = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
const [video,setVideo]=useState(false)
const[speaker,setSpeaker]=useState(true)
 const [isPlaying, setIsPlaying] = useState(false);

 useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.loop = true;
      video.play().catch((err) => {
        console.error("Video play failed:", err);
      });
    } else {
      video.pause();
     video.currentTime = 30; // optional: reset to beginning
    }
  }, [isPlaying]);


  return (
    <>
    <div className={`w-[100vw]  relative  px-[100px] py-[70px] gap-4  h-full min-h-[100vh] bg-gradient-to-r from-black via-gray-600 to-black`}>

        <div className="flex items-center justify-between p-[20px] bg-gray-500 text-white rounded-lg">

          <div className="flex gap-2 items-center"> 
             <p className="text-2xl text-white">Mock Interview</p>
          <p className="text-md ">03:40</p>
          </div>

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
                setIsPlaying(!isPlaying)
              }
            }
              className="bg-gradient-to-l from-pink-500 to-purple-500 p-1 rounded-full h-fit cursor-pointer" ><img className="w-[20px] h-[20px]" src="/no-video.png"/></div>
          </div>


        </div>

        <div className="flex w-full bg-gray-700 h-[400px] items-center rounded-lg mt-4">
            <div className=" flex items-center justify-center h-full   w-[40%] bg-black m-3">
                <video className="w-[80%] h-[80%] rounded-xl" ref={videoRef} src="/videos/ai-interviewer-2.mp4" autoPlay loop muted playsInline />

            </div>

            <div className="flex   flex-col gap-3 w-[60%] overflow-y-scroll max-h-[380px] text-white font-semibold">
                <p className="bg-gray-600 rounded-lg p-1 w-[70%] ">You're very close — the issue you're facing (the div is visible but you can't interact with it, can't click or copy text) is likely due to missing z-index 
        or some CSS interference (possibly another element overlapping it).Here's a breakdown of what could be wrong and how to fix it:</p>
                 <p  className="bg-gray-400 text-black rounded-lg ml-[30%] p-1 w-[70%] ">You're very close — the issue you're facing (the div is visible but you can't interact with it, can't click or copy text) is likely due to missing z-index 
        or some CSS interference (possibly another element overlapping it).Here's a breakdown of what could be wrong and how to fix it:</p>
         <p  className="bg-gray-600 rounded-lg p-1 w-[70%]">You're very close — the issue you're facing (the div is visible but you can't interact with it, can't click or copy text) is likely due to missing z-index 
        or some CSS interference (possibly another element overlapping it).Here's a breakdown of what could be wrong and how to fix it:</p>
         <p  className="bg-gray-400 text-black rounded-lg p-1 ml-[30%]  w-[70%]">You're very close — the issue you're facing (the div is visible but you can't interact with it, can't click or copy text) is likely due to missing z-index 
        or some CSS interference (possibly another element overlapping it).Here's a breakdown of what could be wrong and how to fix it:</p>
         <p  className="bg-gray-600 rounded-lg p-1 w-[70%]">You're very close — the issue you're facing (the div is visible but you can't interact with it, can't click or copy text) is likely due to missing z-index 
        or some CSS interference (possibly another element overlapping it).Here's a breakdown of what could be wrong and how to fix it:</p>
         <p  className="bg-gray-400 text-black rounded-lg p-1 ml-[30%]  w-[70%]">You're very close — the issue you're facing (the div is visible but you can't interact with it, can't click or copy text) is likely due to missing z-index 
        or some CSS interference (possibly another element overlapping it).Here's a breakdown of what could be wrong and how to fix it:</p>
            </div>

        </div>

        <div className="w-full bg-gray-500 rounded-lg flex items-center justify-between gap-2 border-1  p-3">
          <input className="w-[90%] outline-none"/>
         
            <img className="w-[40px]" src="/send-call.svg"/>
          
        </div>
    </div>
    </>
  )
}

export default Interview