import './App.css';
import { Login } from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Users } from './Components/Users';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/users' element={<Users />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
