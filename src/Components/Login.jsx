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
          <form className="flex flex-col p-6 text-black gap-9 max-sm:border-l-0 max-sm:p-0 max-sm:w-full max-lg:border-l-0 max-lg:p-0 max-lg:w-full" onSubmit={submit}>
            <div className="relative">
              <input type="text" id="user" name="Username" className="border-[2px] w-full peer/cc focus:outline-none focus:border-black placeholder-transparent" placeholder="Username" onChange={updateChange}></input>
              <label className="absolute left-0 text-black pointer-events-none -top-6 peer-placeholder-shown/cc:text-black peer-placeholder-shown/cc:-top-1.5 peer-focus/cc:text-black peer-focus/cc:-top-6">Username</label>
            </div>
            <div className="relative">
              <input type="password" id="pass" name="Password" className="border-b-[2px] w-full peer/pass focus:outline-none focus:border-black placeholder-transparent" placeholder="Password" onChange={updateChange}></input>
              <label className="absolute left-0 text-black pointer-events-none -top-6 peer-placeholder-shown/pass:text-base peer-placeholder-shown/pass:text-black peer-placeholder-shown/pass:-top-1.5 peer-focus/pass:-top-6 peer-focus/pass:text-black">Password</label>
            </div>
            <button type="submit" className="p-2 text-lg font-semibold text-center bg-[#34CB65] rounded-lg text-white">Login</button>
          </form>
        </div>
      );
}