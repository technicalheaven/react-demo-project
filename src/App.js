import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Header from './components/Header.jsx';
import Register from './components/Register.jsx';
import Projects from './components/Projects.jsx';
import Dashboard from './components/Dashboard.jsx';
function App() {
  return (
    <>
    <Router className="App">
    <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
