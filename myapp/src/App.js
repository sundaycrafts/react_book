import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'

const MyComponent = React.createClass({
  getDefaultProps: function () {
    return {
      middleName: '',
      address: 'NONE'
    }
  },
  render: function () {
    return React.DOM.span(null, `Hello my address is ${this.props.address}.`)
  }
})

class App extends Component {
  render () {
    ReactDOM.render(
      React.createElement(MyComponent, { name: 'Bob' }),
      document.getElementById('root')
    )
  }

//  render() {
//    return (
//      <div className="App">
//        <div className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h2>Welcome to React</h2>
//        </div>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div>
//    );
//  }
}

export default App
