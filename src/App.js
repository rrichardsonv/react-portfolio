import React, { Component } from 'react';
import Banner from './Components/Banner'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'
import Contact from './Sections/Contacts'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <div>
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    )
  }
}

export default App;
