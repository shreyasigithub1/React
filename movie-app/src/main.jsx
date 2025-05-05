import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Student from "./Student";
import StudentFunction from './StudentFunction';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Student name="Alexa" marks={80} />
    
    <Student name="Siri" marks={70} />
    <Student marks={60} />
    <StudentFunction name="Alice" marks={70} /> */}
    <App/>
  </StrictMode>
)

// Student.defaultProps = {
//   name: "Student",
// }
