import { useEffect, useRef, useState } from "react"
import {  systemInstructionInterviewer } from "../../constants/systemInstructions/careerCoach";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


interface InterviewState {
  role: string;
  experience: string;
  domain: string;
  company:string;
  jobDetails:string;
  companyDetails:string;
  // Add any other fields as needed
}




type ChatMessageProps = {
   role: "user" | "assistant";
  message: string;
  time:number;
};

type SpeakOptions = {
  rate?: number;   // 0.1 – 10
  pitch?: number;  // 0 – 2
  volume?: number; // 0 – 1
  onEnd?: () => void;
};


const ChatMessage: React.FC<ChatMessageProps> = ({role, message,time }) => {

  let timeStamp=`${Math.floor((time % 3600) / 60)}:${time % 60}`
  // Convert **bold** to <strong> and add spacing

   const isUser = role === "user";
  const formattedMessage = message
    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-blue-700 block text-[18px] font-semibold mt-4'>$1</strong>")
    .replace(/\n/g, "<br/>")
    .replace(/:/g, "<strong class='text-blue-500 block text-lg font-semibold mt-4'>-></strong>");


  return (
   <div className={`w-full flex ${!isUser ? "justify-start" : "justify-end"} mb-2`}>
    {
     time!==0 && !isUser&& <p className="bg-gray-500 p-1 rounded-lg h-fit">{timeStamp.toString()}</p>
    }
      <div
        className={`max-w-[70%] p-4 text-sm rounded-2xl shadow-md leading-relaxed ${
          isUser
            ? "bg-gray-600 text-gray-200 rounded-tr-none"
            : "bg-blue-100 text-black rounded-tl-none"
        }`}
        dangerouslySetInnerHTML={{ __html: formattedMessage }}
      />
    </div>

  );
};






const Interview = () => {

const interview:InterviewState = useSelector((state: RootState) => state.interview);

const baseText= interview.company===""?`My name is Surajit Halder,the job role is ${interview.role} ,experience level is  ${interview.experience}, domain is  ${interview.domain}` :
`My name is Surajit Halder,the job role is${interview.role},experience level is ${interview.experience}, domain is ${interview.domain}, the company is ${interview.company},Job details is for ${interview.jobDetails}, and company details ${interview.companyDetails}`



  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
const [video,setVideo]=useState(false)
const[speaker,setSpeaker]=useState(true)
 const [isPlaying, setIsPlaying] = useState(false);
 const [userInput,setUserInput]=useState(baseText)
  const[messages,setMessages]=useState([
         {
           sender: "system",
       role: "system",
       content: systemInstructionInterviewer,
       times:0
         }
        ])

   const navigate=useNavigate()

   const[started,setStarted]=useState(false)

   const[responding,setResponding]=useState(false) // to manage ai response
 

   const[voiceInput,setVoiceInput]=useState(false)



    function splitTextIntoChunks(text: string, maxChunkLength = 180): string[] {
  const chunks: string[] = [];
  let current = "";

  const sentences = text.match(/[^.!?]+[.!?]*\s*/g) || [text];

  for (const sentence of sentences) {
    if ((current + sentence).length > maxChunkLength) {
      if (current) chunks.push(current.trim());
      current = sentence;
    } else {
      current += sentence;
    }
  }
  if (current) chunks.push(current.trim());

  return chunks;
}

     function speakText(text: string, options?: SpeakOptions) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const chunks = splitTextIntoChunks(text);
  let currentIndex = 0;

  const voices = window.speechSynthesis.getVoices();
  const selectedVoice = voices.find(v => v.name.includes('Google') && v.lang === 'en-US') || voices[0];

  const speakChunk = () => {
    if (currentIndex >= chunks.length) {
      options?.onEnd?.();
      console.log("✅ Speech complete");
      return;
    }
    setIsPlaying(true)
    const utterance = new SpeechSynthesisUtterance(chunks[currentIndex]);
    utterance.rate = options?.rate ?? 1;
    utterance.pitch = options?.pitch ?? 1;
    utterance.volume = options?.volume ?? 1;
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.onend = () => {
      currentIndex++;
      speakChunk(); // Speak next chunk
    };

    utterance.onerror = (e) => {
      console.error("Speech error:", e.error);
      currentIndex++;
      speakChunk(); // Continue with next
    };

    window.speechSynthesis.speak(utterance);
  };

  // Make sure voices are ready
  if (voices.length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      speakText(text, options); // Retry once voices are available
    };
  } else {
    speakChunk(); // Start speaking
  }
}



// this funcion send user input and send to ai pi
   const sendMessage =async()=>{
    if(!userInput.trim()) return

    setResponding(true)
    console.log(userInput);
    setVoiceInput(false)

    const updatedMessages = [
      ...messages,
      { sender: "user", role: "user", content: userInput,times:time },
    ];
    setMessages(updatedMessages)
    setUserInput("")


    try{
      const response=await axios.post('https://ai-interview-copilote-api.onrender.com/chat',{
       
        messages: updatedMessages.map(({ role, content }) => ({ role, content })),
      })

      const aiReply= response.data.reply.content
      console.log(response);
      
      setMessages((prev) => [
        ...prev,
        { sender: "ai", role: "assistant", content: aiReply,times:time },
      ]);

      if(response.status===201){
        setResponding(false)
         handleScrollToBottom()
         

       speakText(aiReply,{
        
  onEnd: () => {
    setIsPlaying(false)
    console.log("🎉 AI finished speaking.");
  }
})

      }

      console.log(aiReply);
      
      

    }catch(error){
      setResponding(false)
      console.log(error);
      
    }
  }






  useEffect(()=>{
    
    async ()=>{
         await sendMessage()
      console.log("data send");

      setUserInput("")}
  },[])


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

  const handleScrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };



  // these are for timer handling
  
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0); // in seconds
    const [savedTime, setSavedTime] = useState<number | null>(null);
    const intervalRef = useRef<number | null>(null);
  
      useEffect(() => {
      if (isRunning) {
        intervalRef.current = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000); // update every second
      } else if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
  
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [isRunning]);


  return (
    <>
    <div className={`w-[100vw] max-h-[100vh]  relative  px-[100px] py-[70px] gap-4  h-full min-h-[100vh] bg-gradient-to-r from-black via-gray-600 to-black`}>

        <div className="flex items-center justify-between p-[20px] bg-gray-500 text-white rounded-lg">

          <div className="flex gap-2 items-center"> 
             <p className="text-2xl text-white">Mock Interview</p>
          <p className="text-md ">{Math.floor((time % 3600) / 60)}:{time % 60}</p>
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
              <img className="w-[20px] h-[20px]" src="/setting-call.svg"/>
              </div>

             <div 
             onClick={
              ()=>{
                 setIsRunning(false);
                 setSavedTime(time);
              navigate('/mock-interview')
              console.log(`total time taken ->${Math.floor((time % 3600) / 60)}:${time % 60}`,savedTime);
              
              }
            }
              className="bg-gradient-to-l from-pink-500 to-purple-500 p-1 rounded-full h-fit cursor-pointer" ><img className="w-[20px] h-[20px]" src="/power-off.png"/></div>
          </div>


        </div>

        <div className="flex w-full bg-gray-700 h-[400px] items-center rounded-lg mt-4">
            <div className=" flex items-center justify-center h-full   w-[40%] bg-black m-3">
                <video className="w-[80%] h-[80%] rounded-xl" ref={videoRef} src="/videos/ai-interviewer-2.mp4" autoPlay loop muted playsInline />

            </div>

            <div  ref={scrollRef} className="flex   flex-col gap-3 w-[60%] overflow-y-scroll max-h-[380px] text-white font-semibold">
                {
            messages.filter((msg) => msg.role !== "system").map((msg,idx)=>(
               
                 
                <ChatMessage key={idx} role={msg.role as "user" | "assistant"} message={msg.content} time={msg.times}/>
               
            ))
          }
          {
            responding? <ChatMessage  role= "assistant" message="Okay....Let me think..." time={0}/>:""
          }
               
            </div>

        </div>

        {started===false?
            <div className="w-full bg-gray-500 rounded-lg flex items-center justify-center gap-2 border-1  p-3">

              <div
              onClick={()=>{
                setTime(0); // reset the timer each time it starts
                setStarted(true)
                sendMessage()
                
               setIsRunning(true);
              }}
              className="bg-gray-300 text-black p-3 rounded-lg"
              >Start Interview</div>
            </div>:
               <div className="w-full bg-gray-800 rounded-lg flex items-center justify-between gap-2 border-1  p-3">
          <input placeholder="Write your answer here ... or turn on mike to talk"  type="text" value={userInput} onChange={e=>setUserInput(e.target.value)} className="w-[90%] outline-none text-white bg-gray-500 p-2 rounded-lg"/>
          
          {
            voiceInput===false? <img onClick={()=>setVoiceInput(true)}  className="w-[35px] cursor-pointer p-1 border-3 rounded-md bg-white" src="/speaker.png"/>
            :
            <video onClick={()=>setVoiceInput(false)} className="w-[40px] rounded-2xl" src="/videos/microphone.mp4" autoPlay loop muted playsInline ></video>
          }
            <video onClick={()=>{
              sendMessage()
                handleScrollToBottom()

            }} className="w-[40px] bg-white rounded-xl border-1 " src="/videos/up-arrow.mp4" autoPlay loop muted playsInline ></video>
          
        </div>
        }

     
    </div>
    </>
  )
}

export default Interview