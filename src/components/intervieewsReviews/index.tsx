

import { motion } from "motion/react"
import { intervieewReviewList } from "../../constants/intervieewsReviews/index"



const IntervieewsReviews = () => {
    return (
        <div className="flex flex-col mt-[100px]  rounded-4xl gap-4 items-center justify-center w-fit max-w-[100%]  h-full py-5  bg-gradient-to-bl from-[#f79282] to-[#b41709]  "
        
        >
            <div className="flex flex-col gap-4 items-center justify-center h-full my-18">
                <p className="text-xl text-gray-400">We're Humble to Mention</p>
                <p className="text-4xl text-center text-white mt-15">Groundbreaking innovation for interviewees, as featured on</p>
            </div>

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
                                        {intervieewReviewList.map((review,id) => (
                                                <div key={review.id} 
                                                className="flex flex-col gap-8 bg-transparent p-8 rounded-2xl min-w-[400px] "
                                                >
                                                        
                                                        <p className="text-3xl text-white">{review.review}</p>
                                                        <p className="text-[20px] text-gray-400">{review.author}</p>
                                                        <div  className="pt-6 ">{review.companyName}</div>
                                                </div>
                            ))}
                        </motion.div>
                        </div>
    </div>
  )
}

export default IntervieewsReviews