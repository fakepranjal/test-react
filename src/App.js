import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//importing components
import Navbar from "./Navbar";
import { Homepage } from "./Homepage";
import Chatbot from "./Chat";
import About from "./About";
import Contact from "./Contact";




function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
  );
}

export default App;
