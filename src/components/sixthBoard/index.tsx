

const SixthBoard = () => {
    return (
        <div className='flex bg-white p-3 rounded-3xl min-h-[90vh] justify-between'>

        <div className='flex flex-col justify-evenly w-[50%]  [@media(max-width:1100px)]:w-[90%]  p-6'>
            <div className='bg-pink-300 p-2 rounded-3xl w-fit text-[23px] text-black'>
            Interview Report</div>

            <div className='text-[40px] w-[100%]  [@media(max-width:1100px)]:text-[26px] p-3 my-4'>
            Receive comprehensive interview report after each session. Understand your performance so that you can always improve.
            </div>
            <div className="hidden items-center [@media(max-width:1100px)]:flex justify-center">
            <img src="/resume_editor.webp"/>
            </div>

            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-3'>
                    <hr/>
                    <p className='text-[20px] font-bold'>Detailed Performance Analysis</p>
                    <p className='text-[20px] text-gray-500'>Discover your strengths and areas for improvement with metrics and feedback
                         that help you refine your approach.</p>

                </div>
                <div>
                    <hr/>
                    <p  className='text-[20px] font-bold'>Customized Improvement Recommendations
                    </p>
                    <p  className='text-[20px] text-gray-500'>Get tailored advice on communication skills, technical question handling,
                         and behavioral responses to ensure you're fully prepared for the real thing.</p>

                </div>

            </div>

            <div className='bg-black text-white text-xl w-fit p-5 rounded-md hover:cursor-pointer hover:bg-orange-500 my-6'>
            Get Interview Report
            </div>
        </div>

        <div className="flex items-center [@media(max-width:1100px)]:hidden justify-center">
            <img src="/resume_editor.webp"/>
        </div>
    </div>
    )
  }
  
  export default SixthBoard