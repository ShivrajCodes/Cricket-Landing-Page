import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RegisterTournament from './components/RegisterTournament';
import About from './components/About';
import Tournaments from './components/Tournaments.tsx';
import Footer from './components/Footer.tsx'; 

function App() {
  const aboutRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <Header aboutRef={aboutRef} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About ref={aboutRef} />
                <Tournaments />
                <Footer />  
              </>
            }
          />
          <Route path="/register" element={<RegisterTournament />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
