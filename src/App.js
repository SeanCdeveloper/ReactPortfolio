import React from 'react';
//import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
//import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
//import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'
import NavTabs from './components/NavTabs/NavTabs'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Project from './components/Project/Project'

const App = () => {
  return (
    <Router>
    <div>
      {/* <Nav /> */}
     <NavTabs />
     <Header />
     {/* <Project /> */}
    <Route exact path="/" component={Home}/> 
    <Route exact path="/about" component={About}/>
    <Route exact path="/portfolio" component={Portfolio}/>
    <Route path="/contact" component={Contact}/>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
