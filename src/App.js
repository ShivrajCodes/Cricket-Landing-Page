import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RegisterTournament from './components/RegisterTournament';
import About from './components/About';  

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About /> 
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
