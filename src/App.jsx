import Home from "./routes/Home"
import Company from "./routes/Company"
import About from "./routes/About"
import ContactUs from "./routes/ContactUs"

import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/company" element={ <Company />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contactus" element={ <ContactUs />} />
      </Routes>
    </>
  )
}

export default App
