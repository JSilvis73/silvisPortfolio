import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { Navbar } from './components/navbar';
import { Personal } from "./pages/personal/personal";
import { Projects } from "./pages/projects/projects";
import { Contact } from "./pages/contact/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Personal />} />
          <Route path='/projects' element={<Projects />} /> 
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

      <header className="App-header">
        Header
      </header>
      <main>
        Main
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
