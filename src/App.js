import React, { Component } from 'react'
import styled from 'styled-components';
import Navbar from './components/layout/Navbar';


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar icon='fab fa-github fa-lg' title='Github Finder'>
          
        </Navbar>
      </div>
    )
  }
}

export default App