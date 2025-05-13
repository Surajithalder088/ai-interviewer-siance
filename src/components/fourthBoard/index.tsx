

const FourthBoard = () => {
    return (
      <div className='bg-white rounded-3xl p-5 flex flex-col gap-6'>
          <div className='text-[20px] p-3 rounded-3xl bg-gray-400 w-fit'>
         Auto Apply
          </div>
          <div className='flex items-center [@media(max-width:1100px)]:flex-col justify-between pb-5 gap-6'>
              <div className='text-[45px] text-center w-[60%] [@media(max-width:1100px)]:w-[86%] [@media(max-width:1100px)]:text-[26px] '>
              With Auto Apply, just upload your resume, and we’ll handle the job applications—no more jumping between websites or dealing with tedious steps.
              </div>
              <div className='text-[20px] text-white p-5 bg-slate-950 hover:bg-orange-500 rounded-md'>Get Auto Apply</div>
          </div>
          <div  className='flex items-center [@media(max-width:1100px)]:flex-col py-10 justify-between gap-5'>
              <div>
                  <hr/>
                  <p className='text-2xl py-3'>Automated job applications to save time and effort.
                  </p>
                  <p>
                  Our automated job application system streamlines the process by submitting applications on your behalf, 
                  helping you save time and effort while increasing your chances of landing the right job.
                  </p>
              </div>
              <div>
                  <hr/>
                  <p className='text-2xl py-3'>Personalized job recommendations tailored to you.
                  </p>
                  <p>
                  Get job recommendations that match your skills, experience, and career goals,
                   ensuring a personalized job search experience that helps you find the perfect opportunity.
                  </p>
              </div>
  
          </div>
      </div>
    )
  }
  
  export default FourthBoard