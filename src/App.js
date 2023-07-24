import './App.css';
import { Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path="/" element ={<Home/>}></Route>
        <Route path="/About" element ={<About/>}></Route>
        <Route path="/Service" element ={<Service/>}></Route>
        <Route path="/Contact" element ={<Contact/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
