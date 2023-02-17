import { Navigate } from "react-router-dom"

export default function PrivateRoutes({children}) {
    return (
        localStorage.getItem("FreJun") ? <div>{children}</div> : <Navigate to={"/"} />
    )
}