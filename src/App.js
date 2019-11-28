import React, { Component } from 'react'
import styled from 'styled-components';
import Navbar from './components/layout/Navbar';


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
      </div>
    )
  }
}

export default App