
import { motion } from "motion/react"
import { companyReviewList } from "../../constants/companyReviews/index"



const CompanyReviews = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center  overflow-x-auto scrollbar-none w-screen h-full py-5 "
       
        >
                 <div className="overflow-hidden w-screen  py-4">
                <motion.div 
                
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
                className="flex flex-row gap-4 items-center justify-start w-full h-full min-w-screen"
                 
                >
                        {companyReviewList.map((review) => (
                                <div key={review.id} 
                                className="flex flex-col gap-8 bg-white p-8 rounded-2xl min-w-[400px] "
                                >
                                        <p className={`p-4 text-[20px] ${review.id%2===0?"bg-amber-300":review.id%3===0?"bg-red-500":"bg-blue-400"} bg-amber-300 rounded-4xl w-fit`}>{review.tag}</p>
                                        <p className="text-3xl">{review.review}</p>
                                        <p className="text-[20px] text-gray-400">{review.author}</p>
                                        <div  className="pt-6 ">{review.companyName}</div>
                                </div>
            ))}
        </motion.div>
        </div>

    </div>
  )
}

export default CompanyReviews