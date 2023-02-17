import { Navigate } from "react-router-dom"
// import { Login } from "../src/Components/Login"
import { Users } from "../Components/Users"

export function privateRoutes(Component) {
    // const navigate = useNavigate()
    if(localStorage.getItem("FreJun") === null) {
        // navigate("/")
        return <Navigate to={"/"} />
    } 
    return <Users />
}