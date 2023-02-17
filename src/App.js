import './App.css';
import { Login } from './Components/Login';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Users } from './Components/Users';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  useEffect (()=> {
    if(localStorage.getItem("FreJun") === "Authenticated") {
      setLoggedIn(true)
      console.log("Line 12")
    }
  },[])
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path={'/'} element={loggedIn ? <Users /> : <Login />}/>
        <Route path='/users' element={<Users />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
