

const FirstBoard = () => {
  return (
    <div className='flex flex-col justify-evenly rounded-3xl bg-white min-h-[90vh]'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-[20px] text-gray-400 font-bold'>From Day One to Final Rounds</p>
            <p className='text-[50px] text-center w-[42%] [@media(max-width:1100px)]:text-[26px] [@media(max-width:1100px)]:w-[86%]'>A suite of AI tools to navigate through this difficult recruiting season</p>
        </div>

        <div className='flex text-center [@media(max-width:1100px)]:flex-col [@media(max-width:1100px)]:items-center justify-around admin-h-fit'>
            <div className='flex flex-col gap-4'>
                <p className='text-[35px] [@media(max-width:1100px)]:text-[26px]  my-3'>Before Interviews</p>
                <p className='cursor-pointer hover:text-orange-500'>AI Resume Builder</p>
                <p  className='cursor-pointer hover:text-orange-500'>AI Mock Interview</p>
                <p  className='cursor-pointer hover:text-orange-500'>Auto Apply</p>
               
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-[35px] [@media(max-width:1100px)]:text-[26px]  '>During Interviews</p>
                <p  className='cursor-pointer hover:text-orange-500'>🚀 Interview Copilot </p>
                <p  className='cursor-pointer hover:text-orange-500'>Real-Time Transcription
                </p>
                <p  className='cursor-pointer hover:text-orange-500'>Domain Knowledge Support</p>
                <p  className='cursor-pointer hover:text-orange-500'>Coding Copilot</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-[35px] [@media(max-width:1100px)]:text-[26px]  '>After Interviews</p>
                <p  className='cursor-pointer hover:text-orange-500'>Interview Summary
                </p>
                <p  className='cursor-pointer hover:text-orange-500'>Interview Analytics
                </p>
                <p  className='cursor-pointer hover:text-orange-500'>Sentiment Assessment</p>
            </div>

        </div>
    </div>
  )
}

export default FirstBoard