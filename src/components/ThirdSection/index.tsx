import CompanyReviews from "../companyReviews"
import Footer from "../footer"
import GuideList from "../guidesLists"
import IntervieewsReviews from "../intervieewsReviews"
import QuestionAndAnswer from "../Question&Answer"


const ThirdSection = () => {
  return (
    <div className="flex flex-col w-full ">
        <div className="flex flex-col gap-4 text-center text-white items-center justify-center max-w-screen w-full h-full py-25 ">
          <p className="text-2xl  [@media(max-width:1100px)]:text-[15px] text-gray-400">We Are Here to Help You Succeed</p>
          <p className="pt-25 text-4xl font-semibold [@media(max-width:1100px)]:text-[28px] ">Experience our product through real stories</p>
        </div>
        <div>
          <CompanyReviews/>
        </div>
        <QuestionAndAnswer/>
        <IntervieewsReviews/>
        <GuideList/>
        <Footer/>
    </div>
  )
}

export default ThirdSection