import { useEffect, useState } from "react";
import { questionAndAnswerList } from "../../constants/questionAndAnswer/index"

const QuestionAndAnswer = () => {
        const [slabOpen, setSlabOpen] = useState<number>(0);


     const hanleSlabOpen = (id:number) => {
        
        if(slabOpen!==0){
            if(id===slabOpen){
                setSlabOpen(0)
                return 
            }
            setSlabOpen(id)
            
        }else{
            setSlabOpen(id)
        }
       
       console.log(slabOpen);
       
     }

     useEffect(()=>{
        
     },[slabOpen])

    return (
        <div className="flex flex-col  items-center">
            <div className=" flex flex-col gap-6 items-center justify-center py-20">
                <p className="text-2xl text-gray-400">Questions & Answers</p>
                <p className="text-4xl text-center text-white [@media(max-width:1100px)]:text-[28px]">If you still have questions. Here are the answers</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center p-3 w-[50%] [@media(max-width:1100px)]:w-[90%]">
                {questionAndAnswerList.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4 bg-gray-50 p-4 rounded-2xl cursor-pointer min-w-[700px] [@media(max-width:1100px)]:min-w-fit hover:bg-gray-300 w-[100%]"
                    onClick={() => hanleSlabOpen(item.id)}
                    >
                    <div className=" flex items-center justify-between"> <p className="text-xl">{item.question}</p>
                     <p className=" text-[50px]">
                        {slabOpen === item.id ? "-" : "+"}
                     </p>
                    </div> 
                     {  slabOpen === item.id ?
                      <p className="text-xl text-gray-500">{item.answer}</p>:""
                      }
                    </div>
                ))}
            </div>
        </div>
    )   

  return (
    <div className="flex flex-col  items-center">
        <div className=" flex flex-col gap-6 items-center justify-center py-20">
            <p className="text-2xl text-gray-400">Questions & Answers</p>
            <p className="text-4xl">If you still have questions. Here are the answers</p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center p-3 w-[50%]">
            {questionAndAnswerList.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 bg-gray-200 p-4 rounded-2xl w-[50%] hover:bg-gray-300 w-[100%]">
                  <div className=" flex items-center justify-between"> <p className="text-2xl">{item.question}</p>
                   <p className=" text-7xl">-</p>
                  </div> 
                    <p className="text-xl text-gray-500">{item.answer}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default QuestionAndAnswer