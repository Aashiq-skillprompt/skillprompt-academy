// import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home';
import Admission from './Pages/Admission';
import About from './Pages/About';
import Facilities from './Pages/Facilities';
import Notice from './Pages/Notice';
import Gallery from './Pages/Gallery';
import ContactUs from './Pages/ContactUs';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/admission' element={<Admission />} />
      </Routes>
    </>
  );
}

export default App;
