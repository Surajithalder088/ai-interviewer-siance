import { useRef, useState } from "react"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";




const AiResumeEditor = () => {

const[themeColor,setThemeColor]=useState("#15803d")
const themeList:string[]=["#15803d","#6366f1","#0ea5e9","#fb923c"]

const[font,setFont]=useState("Roboto")
const fontList:string[]=["Roboto","Montserrat","Noto Serif","Open Sans"]

const resumeRef = useRef<HTMLDivElement|any>(null);


// below are variable for resume


//personal
const[name,setName]=useState("")
const[phone,setPhone]=useState("")
const[location,setLocation]=useState("")
const[email,setEmail]=useState("")
const[website,setWebsite]=useState("")
const[object,setObject]=useState("")

// educational

const[school,setSchool]=useState<string>("")
const[schoolDate,setSchoolDate]=useState<string>("")
const[schoolDegree,setSchoolDegree]=useState<string>("")
const[schoolGPA,setSchoolGPA]=useState<string>("")
const[schoolDetail,setSchoolDetail]=useState<string>("")

//work experience

const[company,setCompany]=useState<string>("")
const[job,setJob]=useState<string>("")
const[jobDate,setJobDate]=useState<string>("")
const[jobDesc,setJobDesc]=useState<string>("")

//project

const[project,setProject]=useState("")
const[projectDate,setProjectDate]=useState("")
const[projectDesc,setProjectDesc]=useState("")

const[skills,setSkills]=useState("")


const downloadPDF = async () => {
    const element = resumeRef.current;
    if (!resumeRef.current) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };


  return (
    <div className="min-w-[100vw] h-[100vh] bg-gray-700 p-[20px]">
        <div className="flex items-center justify-between text-white font-bold text-2xl">
            <p>AI Resume Builder</p>

            <div className="flex items-center gap-[20px]">
                <p 
                onClick={downloadPDF}
                className="p-2 border-1 rounded-md text-xl font-light cursor-pointer">Download Resume</p>
                <p className="p-2 bg-black font-light text-xl rounded-md cursor-not-allowed">Save</p>

            </div>
        </div>

            <div className=" min-w-full min-h-[90%] max-h-[90%] bg-gradient-to-br from-gray-500 via-white to-gray-500 m-2 rounded-lg  flex  gap-[30px]">
                
                <div className="w-[50%] bg-gray-300 rounded-lg p-2 m-2 border-1 overflow-y-scroll max-h-[80%]">
                    <div className="flex flex-col gap-2 text-xl">

                       <div className="flex gap-2">
                        <p className="flex flex-col ">Name
                        <input value={name} onChange={(e)=>setName(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/>
                        </p>
                        <p className="flex flex-col">Location
                        <input value={location} onChange={(e)=>setLocation(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/>
                        </p>
                        </div> 
                        
                        <div className="flex gap-2">
                        <p className="flex flex-col">Phone
                        <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/>
                        </p>
                        <p className="flex flex-col">Email
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/>
                        </p>
                        </div>

                        <p>Website</p>
                        <input value={website} onChange={(e)=>setWebsite(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/>
                        <p>Objective</p>
                        <input value={object} onChange={(e)=>setObject(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/>
                    </div>

                    <div className="flex flex-col text-xl">
                        <p className="py-2">EDUCATION</p>

                        <div className=" flex gap-2">
                            <p className="flex flex-col">School<input value={school} onChange={(e)=>setSchool(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/> </p>
                            
                            <p className="flex flex-col">Date <input value={schoolDate} onChange={(e)=>setSchoolDate(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/> </p>
                           
                        </div>
                        <div className=" flex gap-2">
                            <p className="flex flex-col">Degree & Major <input value={schoolDegree} onChange={(e)=>setSchoolDegree(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                            
                            <p  className="flex flex-col">GPA<input value={schoolGPA} onChange={(e)=>setSchoolGPA(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                            
                        </div>
                            <p className="flex flex-col">Additional Information (Optional)<input value={schoolDetail} onChange={(e)=>setSchoolDetail(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                            
                        

                    </div>

                    <div className="flex flex-col text-xl">

                        <p className="py-2">WORK EXPERIENCE</p>
                        
                        <p className="flex flex-col">Comapny  <input value={company} onChange={(e)=>setCompany(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                        <div className=" flex gap-2">
                        <p className="flex flex-col">Job Title <input value={job} onChange={(e)=>setJob(e.target.value)} className="outline-none border-1 p-1 rounded-lg  border-gray-400"/> </p>
                        
                       
                       
                        <p className="flex flex-col">Date<input value={jobDate} onChange={(e)=>setJobDate(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                         </div>
                        <p className="flex flex-col">Description <input value={jobDesc} onChange={(e)=>setJobDesc(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/> </p>
                       
                       
                    </div>

                   <div className="flex flex-col text-xl">
                    <p className="py-2">PROJECTS</p>
                    <div className=" flex gap-2">
                    <p className="flex flex-col">Project Name<input value={project} onChange={(e)=>setProject(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                    
                    <p className="flex flex-col">Date<input value={projectDate} onChange={(e)=>setProjectDate(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                    
                    </div>
                    <p className="flex flex-col">Description<input value={projectDesc} onChange={(e)=>setProjectDesc(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                    
                   </div>

                    <div className="flex flex-col text-xl">
                        <p className="py-2">SKILLS</p>
                        <p>Skills List</p>
                        <textarea value={skills} onChange={(e)=>setSkills(e.target.value)} className="border-1 outline-none min-h-24 border-gray-400">

                        </textarea>
                    </div>

                    <div className="flex flex-col text-xl">
                        <p className="py-2">Resume Setting</p>
                        <p className="text-[15px]">Theme Color</p>
                           <div className="w-full flex gap-2 flex-wrap"> {
                                themeList.map((theme)=>
                                <div className={`w-[30px] h-[30px] rounded-md flex items-center justify-center`}
                                onClick={()=>setThemeColor(theme)}
                                style={{background:`${theme}`}}>
                                    {themeColor===theme?<div className="w-2 h-2 bg-white rounded-full"></div>:""}
                                </div>
                                )
                            }</div>

                        <p className="text-[15px]">Font Family</p>
                         <div className="w-full flex gap-2 flex-wrap"> {
                                fontList.map((f)=>
                                <div className={`w-fit h-fit p-2 border-1 cursor-pointer rounded-md flex items-center ${font===f?"bg-red-400":""} justify-center`}
                                onClick={()=>setFont(f)}
                                >
                                    {f}
                                </div>
                                )
                            }</div>
                        <p className="text-[15px] flex gap-3 py-3">Font Size <input className="w-[30px] h-[30px]  outline-none border-1"/></p>
                        <p className="text-[15px] ">Document Size</p>
                    </div>
                </div>

                <div className="w-[50%] h-full flex items-center justify-center"
                >
                          
                          
                          <div
                                  ref={resumeRef}
                                 className="min-w-[110mm] min-h-[150mm]  p-4 mx-auto"
                                 style={{ fontSize: "8px",backgroundColor:"white",borderColor:"white" }}
                             >  <div 
                            
                            className="min-w-[80mm]  !min-h-[110mm] border-2 text-[8px]  my-[30px] p-[15px]"
                             style={{ fontSize: "8px",backgroundColor:"white",borderColor:"white" }}
                            >
                            
                            <div className="flex flex-col my-3 gap-2">
                                <p className="text-[13px] text-center" style={{color:themeColor}}>{name}</p>
                                <div className="flex gap-3 text-[8px] justify-center">
                                    <p>{phone}</p>
                                    <p>{email}</p>
                                    <p>{website}</p>
                                    <p>{location}</p>

                                </div>
                            </div>
                            <hr/>
                            <div className="min-h-[30px] p-1">
                                <p className="text-[13px]" style={{color:themeColor}}>Objectives</p>
                                <p>{object}</p>

                            </div>
                            <hr/>
                            <div className="min-h-[30px] p-1">
                                <p className="text-[13px]" style={{color:themeColor}}>Education</p>
                                    <div className="flex items-center justify-between">
                                        <p>{school}</p> <p>{schoolDate}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>{schoolDegree}</p> <p>{schoolGPA}</p>
                                    </div>
                                    <p>{schoolDetail}</p>
                            </div>
                            <hr/>
                            <div className="min-h-[30px] p-1">
                                <p className="text-[13px]" style={{color:themeColor}}>Work Experience</p>
                                <div className="flex items-center justify-between">
                                    <p>{job}</p><p>{company}</p> <p> {jobDate}</p>
                                </div>
                                <p>{jobDesc}</p>

                            </div>
                            <hr/>
                            <div className="min-h-[30px] p-1">
                                    <p className="text-[13px]" style={{color:themeColor}}>Projects</p>
                                    <div className="flex items-center justify-between">
                                        <p>{project}</p><p>{projectDate}</p>
                                    </div>
                                    <p>{projectDesc}</p>

                            </div>
                            <hr/>
                            <div  className="min-h-[30px] p-1">
                                <p className="text-[13px]" style={{color:themeColor}}>Skills</p>
                                <p>{skills}</p>
                                  

                            </div>
                            <hr/>
                            </div>
                            </div>
                </div>

            </div>
        

    </div>
  )
}

export default AiResumeEditor