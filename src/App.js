import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//importing components
import Navbar from "./Navbar";
import { Homepage } from "./Homepage";
import Foods from "./Foods";
import About from "./About";
import Contact from "./Contact";




function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
