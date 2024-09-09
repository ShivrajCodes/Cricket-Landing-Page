import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home';
import RegisterTournament from './components/RegisterTournament';  // Import new component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterTournament />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
