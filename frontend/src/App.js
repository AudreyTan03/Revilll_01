import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import Course1 from './components/Course1';


 
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
