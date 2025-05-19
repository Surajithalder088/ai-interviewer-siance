import { useRef, useState } from "react"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";




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

 const [education,setEducation]=useState<number[]>([1])
 
 const [experiences,setExperiences]=useState<number[]>([1])
 
 const [projects,setProjects]=useState<number[]>([1])


// educational

const[school,setSchool]=useState<string[]>([""])
const[schoolDate,setSchoolDate]=useState<string[]>([""])
const[schoolDegree,setSchoolDegree]=useState<string[]>([""])
const[schoolGPA,setSchoolGPA]=useState<string[]>([""])
const[schoolDetail,setSchoolDetail]=useState<string[]>([""])

//work experience

const[company,setCompany]=useState<string[]>([""])
const[job,setJob]=useState<string[]>([""])
const[jobDate,setJobDate]=useState<string[]>([""])
const[jobDesc,setJobDesc]=useState<string[]>([""])

//project

const[project,setProject]=useState<string[]>([""])
const[projectDate,setProjectDate]=useState<string[]>([""])
const[projectDesc,setProjectDesc]=useState<string[]>([""])

const[skills,setSkills]=useState("")

const [resumeTemplate,setResumreTemplate]=useState<string>("first")
const template=["first","second","third"]


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

  // ai methods to generate details

  const userDetailGenerate=async()=>{
                try{
                    const response=await axios.post('https://ai-interview-copilote-api.onrender.com/chat',{
       
        messages: [ {sender: "system",role: "system",content: "user has provided some detail about him,generate a poffetional resume objective from this"},
                    {sender:"user",role:"user",content:object}
        ]
      })
       const aiReply=  response.data.reply.content
       if(response.status===201){
        setObject(aiReply)
       }
       console.log(aiReply);
       
                }catch(err){
                    console.log(err);
                    
                }
  }
   const educationDetailGenerate=async(ind:number)=>{
                try{
                    const response=await axios.post('https://ai-interview-copilote-api.onrender.com/chat',{
       
        messages: [ {sender: "system",role: "system",content: "user has provided some detail about his education and degree,generate a small proffetional deatils within 15 words for resume from this"},
                    {sender:"user",role:"user",content:schoolDetail[ind]}
        ]
      })
       const aiReply=  response.data.reply.content
       if(response.status===201){
        let updatedArray=[...schoolDetail]
        updatedArray[ind]=aiReply
        setSchoolDetail(updatedArray)
       }
       console.log(aiReply);
       
                }catch(err){
                    console.log(err);
                    
                }
  }
  const workDetailGenerate=async(ind:number)=>{
                try{
                    const response=await axios.post('https://ai-interview-copilote-api.onrender.com/chat',{
       
        messages: [ {sender: "system",role: "system",content: "user has provided some detail about his work and experience in a company,generate a small proffetional deatils within 45 words for resume from this"},
                    {sender:"user",role:"user",content:jobDesc[ind]}
        ]
      })
       const aiReply=  response.data.reply.content
       if(response.status===201){
        let updatedArray=[...jobDesc]
        updatedArray[ind]=aiReply
        setJobDesc(updatedArray)
       }
       console.log(aiReply);
       
                }catch(err){
                    console.log(err);
                    
                }
  }
  const projectDetailGenerate=async(ind:number)=>{
                try{
                    const response=await axios.post('https://ai-interview-copilote-api.onrender.com/chat',{
       
        messages: [ {sender: "system",role: "system",content: "user has provided some detail about his project,generate a small proffetional deatils within 45 words for resume from this"},
                    {sender:"user",role:"user",content:projectDesc[ind]}
        ]
      })
       const aiReply=  response.data.reply.content
       if(response.status===201){
        let updatedArray=[...projectDesc]
        updatedArray[ind]=aiReply
        setProjectDesc(updatedArray)
       }
       console.log(aiReply);
       
                }catch(err){
                    console.log(err);
                    
                }
  }


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
                        <p className="flex items-center gap-[40px]">Objective  <p onClick={userDetailGenerate} className="text-[15px] bg-gray-400 hover:bg-cyan-400 p-1 cursor-pointer rounded-xl">Create with AI</p></p>
                        <input value={object} placeholder="give some details aboute you to generate" onChange={(e)=>setObject(e.target.value)} className="outline-none border-1 p-1 rounded-lg border-gray-400"/>
                    </div>


                    {/*Education section */}
                    <p className="py-2 text-xl">EDUCATION </p>
                    {
                        education.map((eduItem)=>
                          <div className="flex flex-col text-xl">
                        
                        <p className=" flex items-center justify-between">{eduItem} :Education{
                            eduItem!==1?<div onClick={()=>{setEducation(education.slice(0,-1))
                                 setSchool(school.filter((_,i)=>i!=eduItem-1))
                                  setSchoolDate(schoolDate.filter((_,i)=>i!=eduItem-1))
                                   setSchoolDegree(schoolDegree.filter((_,i)=>i!=eduItem-1))
                                    setSchoolGPA(schoolGPA.filter((_,i)=>i!=eduItem-1))
                                     setSchoolDetail(schoolDetail.filter((_,i)=>i!=eduItem-1))
                            }} className="bg-black p-1 text-white w-fit m-1 rounded-lg"> remove</div>:""
                        }</p>
                        
                        <div className=" flex gap-2">
                            <p className="flex flex-col">School<input value={school[eduItem-1]} 
                            onChange={(e)=>{ const updatedItems = [...school];
                                 updatedItems[eduItem-1] = e.target.value;setSchool(updatedItems)}}
                             className="outline-none border-1 p-1 rounded-lg border-gray-400"/> </p>
                            
                            <p className="flex flex-col">Date <input value={schoolDate[eduItem-1]}
                             onChange={(e)=>{ const updatedItems = [...schoolDate];
                                 updatedItems[eduItem-1] = e.target.value;setSchoolDate(updatedItems)}}
                              className="outline-none border-1 p-1 rounded-lg border-gray-400"/> </p>
                           
                        </div>
                        <div className=" flex gap-2">
                            <p className="flex flex-col">Degree & Major <input value={schoolDegree[eduItem-1]}
                             onChange={(e)=>{ const updatedItems = [...schoolDegree];
                                 updatedItems[eduItem-1] = e.target.value;setSchoolDegree(updatedItems)}}
                             className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                            
                            <p  className="flex flex-col">GPA<input value={schoolGPA[eduItem-1]} 
                            onChange={(e)=>{ const updatedItems = [...schoolGPA];
                                 updatedItems[eduItem-1] = e.target.value;setSchoolGPA(updatedItems)}} 
                            className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                            
                        </div>
                            <p className="flex flex-col">Additional Information  (Optional) 
                                 <p onClick={()=>educationDetailGenerate(eduItem-1)} className="text-[15px] bg-gray-400 hover:bg-cyan-400 p-1 w-fit cursor-pointer rounded-xl">Create with AI</p> 
                                <input value={schoolDetail[eduItem-1]}
                                placeholder="Give some educational detal to generate"
                             onChange={(e)=>{ const updatedItems = [...schoolDetail];
                                 updatedItems[eduItem-1] = e.target.value;setSchoolDetail(updatedItems)}} 
                             className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                            
                        <hr className="my-5"/>

                    </div>  
                        )
                    }
                    <div className="text-md font-bold p-2 rounded-lg border-1 w-fit my-3 hover:bg-gray-600"
                    onClick={()=>{
                        const newItem=education.length+1
                        setEducation([...education,newItem])
                        setSchool([...school,""])
                        setSchoolDate([...schoolDate,""])
                        setSchoolDegree([...schoolDegree,""])
                        setSchoolDetail([...schoolDetail,""])
                        setSchoolGPA([...schoolGPA,""])
                    }}
                    >Add Education</div>

                 
                    


                        {/*Experience section */}
                      <p className="py-2 text-xl">WORK EXPERIENCE</p>  

                    
                    {experiences.map((expItem)=>
                    <div className="flex flex-col text-xl">

                        <p className="flex items-center justify-between">{expItem} :Experience{
                            expItem!==1?<div onClick={()=>{setExperiences(experiences.slice(0,-1))
                                 setCompany(company.filter((_,i)=>i!=expItem-1))
                                  setJob(job.filter((_,i)=>i!=expItem-1))
                                   setJobDate(jobDate.filter((_,i)=>i!=expItem-1))
                                    setJobDesc(jobDesc.filter((_,i)=>i!=expItem-1))
                            }} className="bg-black p-1 text-white w-fit m-1 rounded-lg"> remove</div>:""
                        }</p>
                        
                        
                        <p className="flex flex-col">Comapny  <input value={company[expItem-1]}
                         onChange={(e)=>{ const updatedItems = [...company];
                                 updatedItems[expItem-1] = e.target.value;setCompany(updatedItems)}}
                        className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                        <div className=" flex gap-2">
                        <p className="flex flex-col">Job Title <input value={job[expItem-1]}
                         onChange={(e)=>{ const updatedItems = [...job];
                                 updatedItems[expItem-1] = e.target.value;setJob(updatedItems)}}
                         className="outline-none border-1 p-1 rounded-lg  border-gray-400"/> </p>
                        
                       
                       
                        <p className="flex flex-col">Date<input value={jobDate[expItem-1]} 
                        onChange={(e)=>{ const updatedItems = [...jobDate];
                                 updatedItems[expItem-1] = e.target.value;setJobDate(updatedItems)}}
                         className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                         </div>
                        <p className="flex flex-col">Description  
                            <p onClick={()=>workDetailGenerate(expItem-1)} className="text-[15px] bg-gray-400 hover:bg-cyan-400 p-1 w-fit cursor-pointer rounded-xl">Create with AI</p>
                            <input value={jobDesc[expItem-1]} 
                            placeholder="Give some detail aboute this work"
                        onChange={(e)=>{ const updatedItems = [...jobDesc];
                                 updatedItems[expItem-1] = e.target.value;setJobDesc(updatedItems)}}
                         className="outline-none border-1 p-1 rounded-lg border-gray-400"/> </p>
                       
                       <hr className="my-5"/>
                    </div>
                    )}
                    <div className="text-md font-bold p-2 rounded-lg border-1 w-fit my-3 hover:bg-gray-600"
                    onClick={()=>{
                        const newItem=experiences.length+1
                        setExperiences([...experiences,newItem])
                        setCompany([...company,""])
                        setJob([...job,""])
                        setJobDate([...jobDate,""])
                        setJobDesc([...jobDesc,""])
                    }}
                    >Add Experience</div>






                        {/*Projects section */}
                      <p className="py-2 text-xl">PROJECTS</p>  
                   {projects.map((proItem)=>
                   <div className="flex flex-col text-xl">

                    <p className="flex items-center justify-between">{proItem} :Project{
                            proItem!==1?<div onClick={()=>{setProjects(projects.slice(0,-1))
                                setProject(project.filter((_,i)=>i!=proItem-1))
                                 setProjectDate(projectDate.filter((_,i)=>i!=proItem-1))
                                  setProjectDesc(projectDesc.filter((_,i)=>i!=proItem-1))
                            }} 
                            className="bg-black p-1 text-white w-fit m-1 rounded-lg"> remove</div>:""
                        }</p>
                        
                    
                    <div className=" flex gap-2">
                    <p className="flex flex-col">Project Name<input value={project[proItem-1]}
                     onChange={(e)=>{ const updatedItems = [...project];
                                 updatedItems[proItem-1] = e.target.value;setProject(updatedItems)}}
                     className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                    
                    <p className="flex flex-col">Date<input value={projectDate[proItem-1]} 
                    onChange={(e)=>{ const updatedItems = [...projectDate];
                                 updatedItems[proItem-1] = e.target.value;setProjectDate(updatedItems)}}
                    className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>
                    
                    </div>
                    <p className="flex flex-col">Description  
                         <p onClick={()=>projectDetailGenerate(proItem-1)} className="text-[15px] bg-gray-400 hover:bg-cyan-400 p-1 w-fit cursor-pointer rounded-xl">Create with AI</p>
                        <input value={projectDesc[proItem-1]} 
                        placeholder="Give some details aboute your project"
                    onChange={(e)=>{ const updatedItems = [...projectDesc];
                                 updatedItems[proItem-1] = e.target.value;setProjectDesc(updatedItems)}} 
                    className="outline-none border-1 p-1 rounded-lg border-gray-400"/></p>

                    <hr className="my-5"/>
                    
                   </div>
                )}
                <div className="text-md font-bold p-2 rounded-lg border-1 w-fit my-3 hover:bg-gray-600"
                    onClick={()=>{
                        const newItem=projects.length+1
                        setProjects([...projects,newItem])
                        setProject([...project,""])
                        setProjectDate([...projectDate,""])
                        setProjectDesc([...projectDesc,""])
                    }}
                    >Add project</div>

                   



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

                <div className=" w-fit min-h-[90%]   flex flex-col items-center gap-[50px] overflow-y-scroll">

                    <p className="text-[10px] font-semibold text-white text-center bg-gray-500 rounded-2xl p-2 max-w-[100px]">Choose resume template</p>
                  {template.map((t)=>(
                    <p onClick={()=>setResumreTemplate(t)} className=" flex flex-col items-centerp-2  h-[160px] w-fit">
                    <img className={`w-[180px] hover:border-2 ${t===resumeTemplate?"border-1 border-gray-600":""}`} src={t==="first"?"/first_resume.jpg":t==="second"?"/second_resume.jpg":"/third_resume.jpg"}/>
                    </p>
                  ))}
                </div>

                <div className="w-[45%] h-full flex items-center justify-center"
                style={{fontFamily:"roboto"}}
                >
                          
                     {
                        resumeTemplate==="first"?<div
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
                              <p className="text-[13px]" style={{color:themeColor}}>Education</p>
                            {
                                education.map((edu)=>(
                                    <div className="min-h-[30px] p-1">
                              
                                    <div className="flex items-center justify-between">
                                        <p>{school[edu-1]}</p> <p>{schoolDate[edu-1]}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>{schoolDegree[edu-1]}</p> <p>{schoolGPA[edu-1]}</p>
                                    </div>
                                    <p>{schoolDetail[edu-1]}</p>
                            </div> 
                                ))
                            }
                           
                            <hr/>
                            <p className="text-[13px]" style={{color:themeColor}}>Work Experience</p>
                            {
                                experiences.map((exp)=>(
                                    <div className="min-h-[30px] p-1">
                                
                                <div className="flex items-center justify-between">
                                    <p>{job[exp-1]}</p><p>{company[exp-1]}</p> <p> {jobDate[exp-1]}</p>
                                </div>
                                <p>{jobDesc[exp-1]}</p>

                            </div>
                                ))
                            }
                            
                            <hr/>
                            <p className="text-[13px]" style={{color:themeColor}}>Projects</p>
                            {
                                projects.map((pro)=>(
                                  <div className="min-h-[30px] p-1">
                                    
                                    <div className="flex items-center justify-between">
                                        <p>{project[pro-1]}</p><p>{projectDate[pro-1]}</p>
                                    </div>
                                    <p>{projectDesc[pro-1]}</p>

                            </div>  
                                ))
                            }
                            
                            <hr/>
                            <div  className="min-h-[30px] p-1">
                                <p className="text-[13px]" style={{color:themeColor}}>Skills</p>
                                <p>{skills}</p>
                                  

                            </div>
                            <hr/>
                            </div>
                            </div>
                            :resumeTemplate==="second"?<div
                                  ref={resumeRef}
                                 className="min-w-[110mm] min-h-[150mm]  p-4 mx-auto"
                                 style={{ fontSize: "8px",backgroundColor:"white",borderColor:"white" }}
                             >  <div 
                            
                            className="min-w-[80mm]  !min-h-[110mm] border-2 text-[8px]  my-[30px] p-[15px]"
                             style={{ fontSize: "8px",backgroundColor:"white",borderColor:"white" }}
                            >
                            
                            <div className="flex flex-col my-3 gap-2">
                                <p className="text-[16px] text-center font-bold" style={{color:themeColor}}>{name}</p>
                                <div className="flex gap-3 text-[8px] justify-center">
                                    <p>{phone}</p>
                                    <p>{email}</p>
                                    <p>{website}</p>
                                    <p>{location}</p>

                                </div>
                            </div>
                            <hr/>
                    <div className="flex justify-between my-3 gap-2">

                        <div className="flex flex-col my-1 w-[30%] max-w-[30%] gap-2  p-3 rounded-lg" style={{backgroundColor:"lightgray"}}>
                            <div className="min-h-[30px] p-1">
                                <p className="text-[13px] max-w-[30%]" style={{color:themeColor}}>Objectives</p>
                                <p className="max-w-[90%] flex flex-wrap">{object}</p>

                            </div>
                             <hr/>
                             <p className="text-[13px]" style={{color:themeColor}}>Education</p>
                            {
                                education.map((edu)=>(
                                    <div className="min-h-[30px] p-1">
                              
                                    <div className="flex items-center justify-between">
                                        <p>{school[edu-1]}</p> <p>{schoolDate[edu-1]}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>{schoolDegree[edu-1]}</p> <p>{schoolGPA[edu-1]}</p>
                                    </div>
                                    <p>{schoolDetail[edu-1]}</p>
                            </div> 
                                ))
                            }
                           
                            <hr/>
                            <div  className="min-h-[30px] p-1">
                                <p className="text-[13px]" style={{color:themeColor}}>Skills</p>
                                <p>{skills}</p>
                                  

                            </div>

                        </div>
                        <div className="flex flex-col my-1 w-[70%] max-w-[70%] gap-2  p-3 rounded-lg" style={{backgroundColor:"pink"}}>
                             <p className="text-[13px]" style={{color:themeColor}}>Work Experience</p>
                            {
                                experiences.map((exp)=>(
                                    <div className="min-h-[30px] p-1">
                                
                                <div className="flex items-center justify-between">
                                    <p>{job[exp-1]}</p><p>{company[exp-1]}</p> <p> {jobDate[exp-1]}</p>
                                </div>
                                <p>{jobDesc[exp-1]}</p>

                            </div>
                                ))
                            }
                            
                            <hr/>
                            <p className="text-[13px]" style={{color:themeColor}}>Projects</p>
                            {
                                projects.map((pro)=>(
                                  <div className="min-h-[30px] p-1">
                                    
                                    <div className="flex items-center justify-between">
                                        <p>{project[pro-1]}</p><p>{projectDate[pro-1]}</p>
                                    </div>
                                    <p>{projectDesc[pro-1]}</p>

                            </div>  
                                ))
                            }
                            
                           

                        </div>
                    </div>

                            
                           
                              
                           
                            
                            

                            <hr/>
                            </div>
                            </div>
                            :resumeTemplate==="third"?<div
                                  ref={resumeRef}
                                 className="min-w-[110mm] min-h-[150mm]  p-4 mx-auto"
                                 style={{ fontSize: "8px",backgroundColor:"white",borderColor:"white" }}
                             >  <div 
                            
                            className="min-w-[80mm]  !min-h-[110mm] border-2 text-[8px]  my-[30px] p-[15px]"
                             style={{ fontSize: "8px",backgroundColor:"white",borderColor:"white" }}
                            >

                            
                            <div className="flex flex-col my-3 gap-2">
                                <p className="text-[16px] font-bold" style={{color:themeColor}}>{name}</p>
                                
                            </div>

                            <hr/>

                            <div className="flex gap-3 justify-between">

                            <div className="flex flex-col my-3 gap-2 w-[30%] bg-gray-200 rounded-lg p-3" style={{backgroundColor:"lightgray"}}>
                                <div className="flex flex-col gap-1 text-[8px] justify-center">
                                    <p>{phone}</p>
                                    <p>{email}</p>
                                    <p>{website}</p>
                                    <p>{location}</p>

                                </div>

                                    <div className="min-h-[30px] p-1">
                                <p className="text-[13px]" style={{color:themeColor}}>Objectives</p>
                                <p>{object}</p>

                            </div>
                            <hr/>
                            <div  className="min-h-[30px] p-1">
                                <p className="text-[13px]" style={{color:themeColor}}>Skills</p>
                                <p>{skills}</p>
                                  

                            </div>
                                </div>
                            <div className="flex flex-col my-3 gap-2 w-[70%]">

                                <p className="text-[13px]" style={{color:themeColor}}>Education</p>
                            {
                                education.map((edu)=>(
                                    <div className="min-h-[30px] p-1">
                              
                                    <div className="flex items-center justify-between">
                                        <p>{school[edu-1]}</p> <p>{schoolDate[edu-1]}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>{schoolDegree[edu-1]}</p> <p>{schoolGPA[edu-1]}</p>
                                    </div>
                                    <p>{schoolDetail[edu-1]}</p>
                            </div> 
                                ))
                            }
                           
                            <hr/>

                             <p className="text-[13px]" style={{color:themeColor}}>Work Experience</p>
                            {
                                experiences.map((exp)=>(
                                    <div className="min-h-[30px] p-1">
                                
                                <div className="flex items-center justify-between">
                                    <p>{job[exp-1]}</p><p>{company[exp-1]}</p> <p> {jobDate[exp-1]}</p>
                                </div>
                                <p>{jobDesc[exp-1]}</p>

                            </div>
                                ))
                            }
                            
                            <hr/>

                            <p className="text-[13px]" style={{color:themeColor}}>Projects</p>
                            {
                                projects.map((pro)=>(
                                  <div className="min-h-[30px] p-1">
                                    
                                    <div className="flex items-center justify-between">
                                        <p>{project[pro-1]}</p><p>{projectDate[pro-1]}</p>
                                    </div>
                                    <p>{projectDesc[pro-1]}</p>

                            </div>  
                                ))
                            }
                            
                            <hr/>
                            </div>

                            </div>
                            
                              
                           
                            
                            
                            <hr/>
                            </div>
                            </div>
                            :""
                     }     
                          

                </div>

            </div>
        

    </div>
  )
}

export default AiResumeEditor