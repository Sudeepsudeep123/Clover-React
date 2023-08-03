import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

// Components
import Team from './Components/Team';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Service';
import Homepage from './Components/Homepage';
import Projects from './Components/Projects';
import Testomonial from './Components/Testomonial';
import AboutUs from "./pages/AboutUs";


// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />

          <Route path="about-us" element={<AboutUs />} />
          <Route path="service" element={<Services />} />
          <Route path="project" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonial" element={<Testomonial />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <a href="#" class="btn btn-lg btn-secondary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>


  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);