import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importing components
import Navbar from "./Navbar";
import { Homepage } from "./Homepage";
import Chatbot from "./Chat";
import Foods from "./Foodspage";
import { Contact } from "./Contact"



function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
  );
}

export default App;
