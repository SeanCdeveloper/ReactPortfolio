import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Nav />
     <Header />
     <Project />
     <Footer />
    </div>
  );
}

export default App;
