import React, { Component } from 'react'
import './App.css'; 
import Navbar from './components/layout/Navbar';



export class App extends Component {
  render() {
    return (
      <div>
        <Navbar title='Github Finder' icon='fab fa-github' >
          
        </Navbar>
      </div>
    )
  }
}

export default App