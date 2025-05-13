

const ThirdBoard = () => {
  return (
    <div className='bg-white rounded-3xl p-5 flex flex-col gap-6'>
        <div className='text-[20px] p-3 rounded-3xl bg-gray-400 w-fit'>
        AI Mock Interview
        </div>
        <div className='flex items-center justify-between [@media(max-width:1100px)]:flex-col pb-5 gap-6'>
            <div className='text-[45px] text-center w-[60%] [@media(max-width:1100px)]:w-[90%] [@media(max-width:1100px)]:text-[26px]'>Prepare your session with the most immersive mock interview powered by AI</div>
            <div className='text-[20px] text-white p-5 bg-slate-950 hover:bg-orange-500 rounded-md'>Launch Mock Interview</div>
        </div>
        <div  className='flex items-center [@media(max-width:1100px)]:flex-col py-10 justify-between gap-5'>
            <div>
                <hr/>
                <p className='text-2xl py-3'>Industry-Specific Scenarios</p>
                <p>Get a competitive edge by practicing with questions designed to reflect the latest industry trends and expectations.</p>
            </div>
            <div>
                <hr/>
                <p className='text-2xl py-3'>Real-Time Feedback</p>
                <p>Facilitates accessibility by allowing individuals with hearing impairments to follow along with spoken content in real-time,
                     enhancing inclusivity and understanding.</p>
            </div>

        </div>
    </div>
  )
}

export default ThirdBoard