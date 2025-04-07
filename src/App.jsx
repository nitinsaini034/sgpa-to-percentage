import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Percentage from './components/Percentage'
import SCGP from './components/SCGP'
import Marks from './components/Marks'
import CGPA from './components/CGPA'
import SGPAPercentage from './components/SGPAPercentage'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/percentage-to-cgpa' element={<Percentage/>}></Route>
      <Route path='/sgpa-to-cgpa' element={<SCGP/>}></Route>
      <Route path='/marks-calculator' element={<Marks/>}></Route>
      <Route path='/sgpa-to-percentage' element={<SGPAPercentage/>}></Route>
      <Route path='/cgpa-to-percentage' element={<CGPA/>}></Route>
      <Route path='/Aboutus' element={<AboutUs />}></Route>
      <Route path='/Contactus' element={<ContactUs />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
