/* @flow */
import React, { Component } from 'react'
import './App.css'
import Logo from './components/Logo'
import Button from './components/Button'
import Suggest from './components/Suggest'
import Rating from './components/Rating'

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

        <h2>Suggest</h2>
        <Suggest options={['eenie', 'meenie', 'miney', 'mo']} />

        <h2>Rating</h2>
        <div>Without Init value: <Rating /></div>
        <div>Init value 4: <Rating defaultValue={4} /></div>
        <div>Max value 11: <Rating max={11} /></div>
        <div>Read only: <Rating readonly={true} defaultValue={3} /></div>
      </div>
    )
  }
}

export default App
