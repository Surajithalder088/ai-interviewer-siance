import { useState } from "react"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";


const SignIn = () => {

const [email,setEmail]=useState("")
const navigate=useNavigate()

const dispatch = useDispatch<AppDispatch>();

const handleSignIn=()=>{


     const response = {
      name: 'John Doe',
      email,
      token: 'abcd1234',
    };

    dispatch(setUser(response));
    console.log(response);

    navigate('/')
    
}

  return (
    <div className="w-[100vw] flex items-center justify-center min-h-[100vh] bg-gradient-to-bl from-gray-800 to-white">

        <div className="min-w-[30%] h-[80%] flex flex-col items-center justify-center bg-white rounded-md p-[20px]">
            <p>SignIn to your Account</p>

           <div className="flex flex-col gap-3 p-[30px] rounded-lg bg-gray-300">
            <p>email</p>
            <input className=" outline-none border-1 rounded-lg" type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            <p>password</p>
            <input/>
            <p
            onClick={handleSignIn}
            className=" bg-gray-600 p-2 rounded-2xl w-fit cursor-pointer text-white ">Submit</p>
            </div>

            testing Email:user@mail.com |
            testing password:123

        </div>

    </div>
  )
}

export default SignIn