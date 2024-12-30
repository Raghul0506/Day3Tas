import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Task1 from './Task1'
import Raghul from './Task2'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Task1/>
   <Raghul a="10" b="20"/>
  </StrictMode>,
)
 