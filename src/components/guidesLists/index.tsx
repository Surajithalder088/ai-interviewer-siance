import { motion } from "motion/react"
import { guideReviewList } from "../../constants/guideList"



const GuideList = () => {
  return (
    
        <div className="flex flex-col gap-4 items-center justify-center  w-full   h-full py-5 my-25"
                
                >

                    <div className="flex flex-col gap-4 items-center justify-center  h-full my-18">
                        <p className=" text-xl text-center px-3 text-gray-400 [@media(max-width:1100px)]:text-[18px] font-bold">AI Will Not Take Your Job But Someone Using AI Will</p>
                        <p className="text-5xl [@media(max-width:1100px)]:text-[28px] text-white text-center  w-[70%]">Learn more about AI superpowers to navigate this recruiting season
                        </p>
                    </div>

                         <div className="relative overflow-hidden w-screen h-full"
                                     
                                    >
                             <div className="overflow-hidden w-screen  py-4">
                 <motion.div 
                         
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
                className="flex flex-row gap-4 items-center justify-start w-full h-full min-w-screen"
                                 
                                >
                                        {guideReviewList.map((review) => (
                                            <div key={review.id} 
                                            className="flex flex-col gap-8 bg-white p-8 rounded-2xl min-w-[400px] "
                                            >
                                                <img src="/demo_orange.webp"
                                                className="w-[99%]"/>
                                                <p className=" text-[20px] text-gray-400">{review.date}</p>
                                                <p className="text-3xl">{review.title}</p>
                                                <div  className="pt-6 text-gray-400">{review.details}</div>
                                            </div>
                                  ))}
                                    </motion.div>
                                  </div>
                                   
                                </div>
            </div>
    
  )
}

export default GuideList