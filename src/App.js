import React, { Component } from 'react'
import './App.css'; 
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import {ThemeProvider} from 'styled-components';
import OrangeTheme from './theme/orange';


export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={OrangeTheme}>
        <Navbar title='Github Finder' icon='fab fa-github'></Navbar>
        <UserItem></UserItem>
      </ThemeProvider>
    )
  }
}

export default App