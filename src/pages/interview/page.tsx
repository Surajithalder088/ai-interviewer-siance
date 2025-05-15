import { useEffect, useRef, useState } from "react"
import {  systemInstructionInterviewer } from "../../constants/systemInstructions/careerCoach";
import axios from "axios";



const API_KEY='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'

type ChatMessageProps = {
   role: "user" | "assistant";
  message: string;
};

type SpeakOptions = {
  rate?: number;   // 0.1 – 10
  pitch?: number;  // 0 – 2
  volume?: number; // 0 – 1
  onEnd?: () => void;
};


const ChatMessage: React.FC<ChatMessageProps> = ({role, message }) => {
  // Convert **bold** to <strong> and add spacing

   const isUser = role === "user";
  const formattedMessage = message
    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-blue-700 block text-[18px] font-semibold mt-4'>$1</strong>")
    .replace(/\n/g, "<br/>")
    .replace(/:/g, "<strong class='text-blue-500 block text-lg font-semibold mt-4'>-></strong>");


  return (
   <div className={`w-full flex ${!isUser ? "justify-start" : "justify-end"} mb-2`}>
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
const [video,setVideo]=useState(false)
const[speaker,setSpeaker]=useState(true)
 const [isPlaying, setIsPlaying] = useState(false);
 const [userInput,setUserInput]=useState('My name is Surajit Halder,the job role is frontend developer,experience level is fresher, domain is react js')
  const[messages,setMessages]=useState([
         {
           sender: "system",
       role: "system",
       content: systemInstructionInterviewer
         }
        ])

    const[textToSpeach,setTextToSpeach]=useState("")



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

   const sendMessage =async()=>{
    if(!userInput.trim()) return

    
    console.log(userInput);

    const updatedMessages = [
      ...messages,
      { sender: "user", role: "user", content: userInput },
    ];
    setMessages(updatedMessages)
    setUserInput("")


    try{
      const response=await axios.post('https://openrouter.ai/api/v1/chat/completions',{
        model:'openai/gpt-3.5-turbo',
        messages: updatedMessages.map(({ role, content }) => ({ role, content })),
      },{
        headers:{
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173", // OR your real deployed domain
        "X-Title": "Career Coach Chat",
        }
      })

      const aiReply= await response.data.choices[0].message.content||"No response"
      setMessages((prev) => [
        ...prev,
        { sender: "ai", role: "assistant", content: aiReply },
      ]);

      if(response.status===200){
        setIsPlaying(true)

       speakText(aiReply,{
  onEnd: () => {
    setIsPlaying(false)
    console.log("🎉 AI finished speaking.");
  }
})

      }

      console.log(aiReply);
      
      

    }catch(error){
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
                speakText(userInput)
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
                {
            messages.filter((msg) => msg.role !== "system").map((msg,idx)=>(
               
                 
                <ChatMessage key={idx} role={msg.role as "user" | "assistant"} message={msg.content}/>
               
            ))
          }
               
            </div>

        </div>

        <div className="w-full bg-gray-500 rounded-lg flex items-center justify-between gap-2 border-1  p-3">
          <input  type="text" value={userInput} onChange={e=>setUserInput(e.target.value)} className="w-[90%] outline-none"/>
         
            <img  onClick={sendMessage} className="w-[40px]" src="/send-call.svg"/>
          
        </div>
    </div>
    </>
  )
}

export default Interview