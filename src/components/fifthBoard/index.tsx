

const FifthBoard = () => {
    return (
      <div className='bg-white rounded-3xl p-5 flex flex-col gap-6'>
          <div className='text-[20px] p-3 rounded-3xl bg-yellow-400 w-fit'>
          Question Bank
          </div>
          <div className='flex items-center justify-between  [@media(max-width:1100px)]:flex-col pb-5 gap-6'>
              <div className='text-[40px] w-[60%] [@media(max-width:1100px)]:w-[86%] [@media(max-width:1100px)]:text-[26px] text-center'>
              Review top interview questions and learn AI-empowered answers to optimize your preparation.
              </div>
              <div className='text-[20px] text-white p-5 bg-slate-950 hover:bg-orange-500 rounded-md'>Try Question Bank</div>
          </div>
          <div  className='flex items-center [@media(max-width:1100px)]:flex-col py-10 justify-between gap-5'>
              <div>
                  <hr/>
                  <p className='text-2xl py-3'>Verified Question Database
                  </p>
                  <p>
                  Featuring real interview questions collected directly from recruiters and successful candidates.
                   Ensure you’re prepared for what employers really ask, backed by insights from industry experts.


                  </p>
              </div>
              <div>
                  <hr/>
                  <p className='text-2xl py-3'>AI-enabled best practices
                  </p>
                  <p>
                  Get optimal answers for each question in our verified database. Get expert-level guidance on crafting responses that align with industry
                   standards and impress your interviewers.


                  </p>
              </div>
  
          </div>
      </div>
    )
  }
  
  export default FifthBoard