import Home from "./routes/Home"
import Company from "./routes/Company"
import About from "./routes/About"
import ContactUs from "./routes/ContactUs"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/company" element={ <Company />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contactus" element={ <ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
