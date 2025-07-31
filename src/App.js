import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Experience from './Pages/Experience';
import ContactMe from './Pages/Contact';
import AboutMe from './Pages/About';
// import Projects from './Pages/Project';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/aboutus" element={<AboutMe />} />
        {/* <Route path="/project" element={<Projects />} /> */}
      </Routes>
    </div>
  );
};

export default App;
