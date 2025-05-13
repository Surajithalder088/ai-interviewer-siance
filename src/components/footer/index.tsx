

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 items-center bg-white rounded-3xl m-8 p-8">
        <div className="flex  [@media(max-width:1100px)]:flex-col">
            <div className="flex flex-col gap-8 w-[30%] [@media(max-width:1100px)]:w-[90%]">
                <div className="text-xl w-[200px] h-[100px]">
                    <img src="/full-logo.1087db35.svg"/>
                </div>
                <div className="text[20px] [@media(max-width:1100px)]:text-center text-gray-500">Your trusted platform to ace any job interviews, craft the perfect resumes, and land your dream jobs.</div>
                <div className="flex gap-2 items-center [@media(max-width:1100px)]:w-fit ">
                    {/* icons */} 
                    <img className="w-fit h-fit bg-gray-200 rounded-full p-4 [@media(max-width:1100px)]:p-2" 
                     src="/icon-twitter.svg"/>
                    <img className="w-fit h-fit bg-gray-200 rounded-full p-4 [@media(max-width:1100px)]:p-2" 
                     src="/icon-subtract.svg"/>
                    <img className="w-fit h-fit bg-gray-200 rounded-full p-4 [@media(max-width:1100px)]:p-2" 
                     src="/icon-youtube.svg"/>
                    <img className="w-fit h-fit bg-gray-200 rounded-full p-4 [@media(max-width:1100px)]:p-2" 
                    src="/icon-linkedin.svg"/>
                    <img className="w-fit h-fit bg-gray-200 rounded-full p-4 [@media(max-width:1100px)]:p-2"  
                     src="/icon-tiktok.svg"/>
                </div>
                <div className="p-4 cursor-pointer text-center  border-orange-500 border-2 rounded-md w-fit">
                   Product Hunt
                </div>
                <div>All services are online</div>
            </div>

            <div className="flex items-center [@media(max-width:1100px)]:flex-col [@media(max-width:1100px)]:text-center justify-around gap-10">
                <div className="flex flex-col   gap-15">
                    <div className="flex flex-col gap-4">
                   <p> Products</p>
                        <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Interview Copilot</p>
                        <p  className="text-gray-400 hover:text-orange-400 cursor-pointer">AI Mock Interview</p>
                        <p className="text-gray-400 hover:text-orange-400 cursor-pointer">AI Resume Builder</p>
                        <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Hirevue</p>
                        <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Phone Interview</p>
                        <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Speech Analysis</p>
                        <p className="text-gray-400 hover:text-orange-400 cursor-pointer">College Admission</p>
                        <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Auto Apply</p>
                        <p className="text-gray-400 hover:text-orange-400 cursor-pointer">QA Pairs</p>
                        <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Interview Notes</p>
                        <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Coding Addon</p>
                    </div>
                    <div className="flex flex-col gap-4">
                    <p>Company</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">How Final Round AI works</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">About</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Careers</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">News</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Referral Program</p>
                    </div>
                </div>

                <div className="flex flex-col  justify-between gap-15">
                    <div className="flex flex-col gap-4">
                    <p>Resources</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Tutorials</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Blog</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Special Discount</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Influencer Program</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Final Round AI vs Exponent</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Final Round AI vs HireVue</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Final Round AI vs Paradox AI</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Final Round AI vs CareerFlow</p>
                    <p  className="text-gray-400 hover:text-orange-400 cursor-pointer">Final Round AI vs Formation</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Final Round AI vs Interview Cake</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Final Round AI vs Algomonster</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Final Round AI vs Scaler</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Final Round AI vs Simple Programmer</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Final Round AI vs Interview Kickstart</p>
                    </div>
                    <div className="flex flex-col gap-4">
                   <p>Interview Questions</p> 
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Common Career Ambition Interview Questions</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Collaborative Leadership Interview Questions</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Product Manager Interview Questions</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Coding Interview Questions</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Technical Interview Questions</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Generative AI Engineer Interview Questions</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Swift Developer Interview Questions</p>
                    </div>
                </div>

                <div className="flex flex-col  justify-between gap-15">
                    <div className="flex flex-col gap-4">
                    <p>Support</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">FAQ</p>

                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Contact Us</p>
                    </div>
                    <div className="flex flex-col gap-4">
                   <p> AI Tools</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">AI Career Coach</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Recruiters Hotline</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Cover Letter Generator</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">LinkedIn Profile Optimizer</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">LinkedIn Resume Builder</p>
                    <p className="text-gray-400 hover:text-orange-400 cursor-pointer">Resume Checker</p>
                    </div>
                </div>
            </div>
        </div>
         <hr/>
        <div className="flex  gap-4 items-center justify-between w-full">
           
           <div className="flex flex-col gap-2 text-gray-400">
            <p>© 2025 Final Round AI,</p>
            <p>643 Teresita Blvd, San Francisco, CA 94127
            </p>
            </div> 
           <div className="flex  gap-3 text-gray-400 cursor-pointer">
            <p className="cursor-pointer hover:text-orange-400 hover:bg-orange-100 rounded-xl p-2">Privacy Policy</p>
            <p className="cursor-pointer hover:text-orange-400 hover:bg-orange-100 rounded-xl p-2">Terms & Conditions</p>
           </div>
        </div>
    </div>
  )
}

export default Footer