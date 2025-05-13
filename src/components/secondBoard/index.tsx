

const SecondBoard = () => {
  return (
    <div className='flex [@media(max-width:1100px)]:flex-col   bg-white p-3 rounded-3xl min-h-[90vh] justify-between'>

        <div className='flex flex-col justify-evenly w-[50%] [@media(max-width:1100px)]:w-[86%] p-6'>
            <div className='bg-orange-500 p-2 rounded-3xl w-fit text-[23px] text-white'>
            AI Resume Builder</div>

            <div className='text-[45px] [@media(max-width:1100px)]:text-[26px]   w-[100%] p-3'>
            Generate a hireable resume with ease in one-click.
            </div>
            <div className="hidden items-center [@media(max-width:1100px)]:flex justify-center">
            <img src="/resume_editor.webp"/>
        </div>

            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-3'>
                    <hr/>
                    <p className='text-[20px] font-bold'>ATS Optimized</p>
                    <p className='text-[20px] text-gray-500'>Designed to ensure ATS optimization so your credentials stand out to top employers and pass machine screening process.</p>

                </div>
                <div>
                    <hr/>
                    <p  className='text-[20px] font-bold'>Personalization with AI</p>
                    <p  className='text-[20px] text-gray-500'>Customize your document with intelligent suggestions tailored to your career goals.
                         Stand out from the crowd with a resume that's uniquely yours, yet professionally appealing.</p>

                </div>

            </div>

            <div className='bg-black text-white text-xl mt-5 [@media(max-width:1100px)]:text-[16px]  w-fit p-5 rounded-md hover:cursor-pointer hover:bg-orange-500'>
            Launch Resume Builder
            </div>
        </div>

        <div className="flex items-center [@media(max-width:1100px)]:hidden justify-center">
            <img src="/resume_editor.webp"/>
        </div>
    </div>
  )
}

export default SecondBoard