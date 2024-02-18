import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigationbar from "./Navigationbar"
import All from './All'
import Fullstackdevelopment from './Fullstackdevelopment'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'

function App() {

  return (
    <Router>
      <>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<All />}></Route>
          <Route path="/full-stack-development" element={<Fullstackdevelopment />}></Route>
          <Route path="/data-science" element={<Datascience />}></Route>
          <Route path="/cyber-security" element={<Cybersecurity />}></Route>
          <Route path="/career" element={<Career />}></Route>
        </Routes>
      </>
    </Router>
  )
}

export default App
