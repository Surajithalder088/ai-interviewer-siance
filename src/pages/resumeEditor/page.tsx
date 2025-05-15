




const AiResumeEditor = () => {
  return (
    <div className="min-w-[100vw] h-[100vh] bg-gray-700 p-[20px]">
        <div className="flex items-center justify-between text-white font-bold text-2xl">
            <p>AI Resume Builder</p>

            <div className="flex items-center gap-[20px]">
                <p className="p-2 border-1 rounded-md text-xl font-light cursor-pointer">Download Resume</p>
                <p className="p-2 bg-black font-light text-xl rounded-md cursor-pointer">Save</p>

            </div>
        </div>

            <div className=" min-w-full min-h-[90%] max-h-[90%] bg-gradient-to-br from-gray-500 via-white to-gray-500 m-2 rounded-lg  flex items-center gap-[30px]">
                
                <div className="w-[50%] bg-gray-300 rounded-lg p-2 m-2 border-1 overflow-y-scroll h-[80%]">
                    <div className="flex flex-col gap-2 text-xl">

                       <div className="flex gap-2">
                        <p className="flex flex-col">Name
                        <input className="outline-none border-1 p-1 rounded-lg"/>
                        </p>
                        <p className="flex flex-col">Location
                        <input className="outline-none border-1 p-1 rounded-lg"/>
                        </p>
                        </div> 
                        
                        <div className="flex gap-2">
                        <p className="flex flex-col">Phone
                        <input className="outline-none border-1 p-1 rounded-lg"/>
                        </p>
                        <p className="flex flex-col">Email
                        <input className="outline-none border-1 p-1 rounded-lg"/>
                        </p>
                        </div>

                        <p>Website</p>
                        <input className="outline-none border-1 p-1 rounded-lg"/>
                        <p>Objective</p>
                        <input className="outline-none border-1 p-1 rounded-lg"/>
                    </div>

                    <div className="flex flex-col">

                        <div>
                            <p>School</p>
                            <input/>
                            <p>Date</p>
                            <input/>
                            <p>Degree & Major</p>
                            <input/>
                            <p>GPA</p>
                            <input/>
                            <p>Additional Information (Optional)</p>
                            <input/>
                        </div>

                    </div>

                    <div>work experience</div>
                    <div>project</div>
                    <div>skills</div>
                    <div>resume setting</div>
                </div>

                <div>docs</div>

            </div>
        

    </div>
  )
}

export default AiResumeEditor