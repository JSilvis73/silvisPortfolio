import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { Navbar } from './components/navbar';
import { Personal } from "./pages/personal/personal";
import { Projects } from "./pages/projects/projects";
import { Contact } from "./pages/contact/contact";
import { Footer } from "./components/footer";

function App() {
  return (
   <body>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Personal />} />
          <Route path='/projects' element={<Projects />} /> 
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      
      <Footer />
      
    </div>
    </body>
  );
}

export default App;
