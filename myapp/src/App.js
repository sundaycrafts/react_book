import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'

const TextAreaCounter = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      text: ''
    }
  },
  getInitialState: function () {
    return { text: this.props.text }
  },
  _textChange: function (ev) {
    this.setState({
      text: ev.target.value
    })
  },
  render: function () {
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this._textChange
      }),
      React.DOM.h3(null, this.state.text.length)
    )
  }
})

class App extends Component {
  render () {
    ReactDOM.render(
      React.createElement(TextAreaCounter, { text: 'Bob' }),
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
