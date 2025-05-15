import { useEffect, useState } from "react"

import MenuNavbar from "../../components/MenuNavbar"
import axios from "axios"
import { systemInstructionCareerCoach } from "../../constants/systemInstructions/careerCoach"

type ChatMessageProps = {
   role: "user" | "assistant";
  message: string;
};

const API_KEY='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'



// this below is to structure ai response

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



const AiCareerCoach = () => {

  const [userInput,setUserInput]=useState("")
const [showNavbar, setShowNavbar] = useState(true)
    const [lastscrollY, setLastScrollY] = useState(0)
       const [chatMode,setChatMode]=useState(false)
       const[messages,setMessages]=useState([
        {
          sender: "system",
      role: "system",
      content: systemInstructionCareerCoach
        }
       ])


  const sendMessage =async()=>{
    if(!userInput.trim()) return

    setChatMode(true)
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

      console.log(aiReply);
      
      

    }catch(error){
      console.log(error);
      
    }
  }
  
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
    className={`flxed   top-0 w-full z-50 transition-transform  duration-300 ${showNavbar===true?"translate-y-0":"-translate-y-full"}`}
    >
     <MenuNavbar/>
     </div>

      <div className={`flex flex-col gap-6 items-center justify-center px-[50px]  [@media(max-width:1100px)]:my-[60px] h-fit max-h-[100vh] py-[40px] w-[100%]`}>
       <p className="text-white text-4xl font-bold w-full">AI Career Coach</p>
       <p className="text-gray-200 font-semibold text-md ">Think of it as your own personal career coach—someone you can talk to like a friend who truly understands your professional goals. 
        You’ll get tailored job search strategies, career advice, and growth tips, all in one conversation.</p>

       <div className="flex flex-col items-center border-1 border-gray-500 w-full bg-gray-400 rounded-lg justify-center">

      {/* this is chat section  */}
        <div className="flex items-center flex-col min-w-[95%] min-h-[380px] justify-around my-[10px] mx-[20px] gap-[20px]">
           
         {
            chatMode===false?(
            <>
          <p className="text-2xl font-bold text-white">Ask me any questions about recruiting, interviews, and careers development</p>

          <div className="flex items-center [@media(max-width:1100px)]:flex-col max-h-[200px] overflow-y-scroll gap-4">
            <p className=" bg-gray-100 p-2 rounded-lg">How do I transition from my current career to a new field without taking a step back in salary?</p>
            <p className=" bg-gray-100 p-2 rounded-lg">How do I transition from my current career to a new field without taking a step back in salary?</p>
            <p className=" bg-gray-100 p-2 rounded-lg">What are some strategies for negotiating a higher salary during a job offer?</p>
          </div>
          </>  ):

          (<>
          <div className="flex flex-col text-[15px] gap-2 max-h-[300px] min-h-[290px] min-w-[95%] overflow-y-scroll">

          {
            messages.filter((msg) => msg.role !== "system").map((msg,idx)=>(
               
                 
                <ChatMessage key={idx} role={msg.role as "user" | "assistant"} message={msg.content}/>
               
            ))
          }
           
          </div>
          
          </>)
          }
         

          <div className="w-full flex items-center justify-between border-1 border-gray-600 rounded-2xl p-[10px]">
            <input type="text" value={userInput} onChange={e=>setUserInput(e.target.value)} className="outline-none min-w-fit w-[95%] " placeholder="Send a message  to AI Career Coach"/>

            <div 
            
            onClick={sendMessage}
            className="w-[25px] cursor-pointer hover:rotate-270 hover:w-[27px]"><img src="/send-ai.png"/></div>
          </div>

          
        </div>

       

       </div>
      </div>

     </div>
  )
}

export default AiCareerCoach