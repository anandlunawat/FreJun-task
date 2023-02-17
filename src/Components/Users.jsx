import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import PrivateRoutes from "../routes/PrivateRoutes"
import Loader from "./Loader/Loader"
import Result from "./Result"
// import { searchResult } from "../utils/searchResult"
// import {CiSearch} from "react-icons/ci"

export function Users() {
    const navigate = useNavigate()
    const [data,setData] = useState()
    const [searchData,setSearchData] = useState()
    function logout() {
        localStorage.removeItem("FreJun")
        navigate("/")
        toast.success("Logged Out Successfully")
    }
    useEffect (()=> {
        const click = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users", {method : 'GET'})
                if(!response.ok) {
                    console.log(response.status)
                }
                const data = await response.json()
                console.log(data.users)
                if(data.users !== undefined) {
                    setData(data.users)
                }
            }
            catch {
                console.log("Error")
            }
        }
        click()
    })

    function onChange(e) {
        if(e.target.value === '') {
            setSearchData()
            console.log("Line 42",searchData)
        }
        else {
            console.log("data",data)
            const filteredData = data.filter(
                detail => {return (detail.firstName.toLowerCase().includes(e.target.value.toLowerCase()) || detail.lastName.toLowerCase().includes(e.target.value.toLowerCase()) || detail.email.toLowerCase().includes(e.target.value.toLowerCase())) }
            )
            console.log("Filtered Data ",filteredData)
            setSearchData(filteredData)
        }
    }

    return (
        <PrivateRoutes>
            <div className="">
                <header className="flex flex-row bg-[#F9FAFB] justify-between items-center pr-8 pl-8 h-[72px]">
                    <h1 className="w-[164px] h-[20px] font-semibold shad text-l">FreJun Task</h1>
                    <button className="w-[80px] h-[40px] bg-white border border-solid border-[#D0D5DD] font-semibold text-sm text-[#344054] rounded-lg shadow-b" onClick={logout}>Logout</button>
                </header>
                <div className="flex flex-col items-center">
                    <input type={"search"} className="absolute top-[20%] left-[40%] max-sm:left-[25%] border border-solid border-[#D0D5DD] rounded-lg shadow-b"  placeholder={"Search"} onChange={onChange}/>
                {   
                    data !== undefined ? <Result data={searchData===undefined ? data : searchData}/> : <Loader />
                }
                </div>
            </div>
        </PrivateRoutes>
    )
}

