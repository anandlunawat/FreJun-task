import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
// import { fetchAPI } from "../utils/fetchAPI"

export function Login() {
    const [user, setUser] = useState()
    const [pass, setPass] = useState()
    const navigate = useNavigate();
    function updateChange(e) {
        if(e.target.id === "user") {
          setUser(e.target.value)
        }
        else {
            setPass(e.target.value)
        }
    }

    async function submit(e) {
        e.preventDefault();
        if(user===process.env.REACT_APP_USERNAME && pass===process.env.REACT_APP_PASSWORD) {
            localStorage.setItem("FreJun","Authenticated");
            navigate("/users") 
            toast.success("Logged In");
            
        }
        else {
            toast.error("Incorrect Credentials");
        }
    }

      return (
        <div className="w-[50%] ml-[25%] mt-[15%] flex flex-col">
            <h1 className="text-3xl font-semibold text-center">Log in</h1>
          <form className="flex flex-col p-6 mt-6 text-black gap-9 max-sm:border-l-0 max-sm:p-0 max-sm:w-full max-lg:border-l-0 max-lg:p-0 max-lg:w-full" onSubmit={submit}>
            <div className="relative">
              <input type="text" id="user" name="Username" className="rounded-lg h-[44px] border-[2px] w-full peer/cc focus:outline-none  placeholder-transparent" placeholder="Username" onChange={updateChange}></input>
              <label className="p-4 absolute -left-3 text-black pointer-events-none -top-12 peer-placeholder-shown/cc:text-[#667085] peer-placeholder-shown/cc:-top-1.5 peer-focus/cc:text-black peer-focus/cc:-top-12 peer-focus/cc:-left-3">Username</label>
            </div>            
            <div className="relative">
              <input type="password" id="pass" name="Password" className="rounded-lg h-[44px] border-[2px] w-full peer/cc focus:outline-none  placeholder-transparent" placeholder="Username" onChange={updateChange}></input>
              <label className="p-4 absolute -left-3 text-black pointer-events-none -top-12 peer-placeholder-shown/cc:text-[#667085] peer-placeholder-shown/cc:-top-1.5 peer-focus/cc:text-black peer-focus/cc:-top-12 peer-focus/cc:-left-3">Password</label>
            </div>
            <button type="submit" className="p-2 text-lg font-semibold text-center bg-[#43ca6e] hover:bg-[#6aca88] rounded-lg text-white">Login</button>
          </form>
        </div>
      );
}