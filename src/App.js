import React, { Component } from 'react';
import Banner from './Components/Banner'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'
import Contact from './Sections/Contacts'
import rootReducer from './Stores/index'
import ModalConductor from './Components/ModalConductor/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css'

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ModalConductor />
          <Banner />
          <div>
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
