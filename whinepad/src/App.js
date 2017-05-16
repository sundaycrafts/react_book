/* @flow */
import React, { Component } from 'react'
import './App.css'
import Logo from './components/Logo'
import Button from './components/Button'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <Logo />
          <h2>Component List</h2>
        </div>

        <h2>Logo</h2>
        <Logo />

        <h2>Button</h2>
        <Button classnames='custom' />
      </div>
    )
  }
}

export default App
