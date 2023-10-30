// import './App.css';
// import './style.css';
// import './index.css'
import Header from "./Component/Layouts/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Causes from "./Component/Causes";
import Gallery from "./Component/Gallery";
import News from "./Component/News";
import Contact from "./Component/Contact";
import Footer from "./Component/Layouts/Footer";
import { Route, Routes } from 'react-router-dom'


function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/causes" element={<Causes/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/contact" element={<Contact/>}/>


      </Routes>

      <Footer />
    </>

  )
}
export default App;