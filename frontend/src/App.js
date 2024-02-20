import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import HeroSection from './Components/HeroSection';
import Course1 from './Components/Course1';


 
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <HeroSection />
        <Course1 />
      </Switch>
      </Router>
    </>
    
  );
}

export default App;
