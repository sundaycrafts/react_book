import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Table from './components/Table'
import bookList from './data/bookList.json'

class App extends Component {
  render () {
    let theads = [
      'Title', 'Author', 'Language', 'Publish', 'sell'
    ]

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Table initialData={bookList} theads={theads} />
      </div>
    )
  }
}

export default App
