import { Route, Routes } from "react-router-dom"
import Signin from "./Features/Signin/Signin"
import Dashboard from "./Features/Dashboard/Dashboard"
import SecureRouting from "./Components/SecureRouting/SecureRouting"
import './App.css'

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
                  ----Protect Routing---  
        <Route element={<SecureRouting />}> 
           <Route path="/dashboard" element={<Dashboard />} /> 
        </Route>

      </Routes>
    </div>
  )
}

export default App