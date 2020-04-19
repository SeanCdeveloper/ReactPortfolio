import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NavTabs from './components/NavTabs/NavTabs'
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

const App = () => {
  return (
    <Router>
    <div>
     <NavTabs />
     <Header />
    <Route exact path="/" component={Home}/>
    <Route exact path="/portfolio" component={Portfolio}/>
    <Route path="/contact" component={Contact}/>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
