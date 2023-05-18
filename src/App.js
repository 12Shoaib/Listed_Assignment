import { Route, Routes } from "react-router-dom"
import Signin from "./Features/Signin/Signin"
import Dashboard from "./Features/Dashboard/Dashboard"
import './App.css'

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
           <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </div>
  )
}

export default App