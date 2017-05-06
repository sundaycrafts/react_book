import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import logMixin from './log-mixin'

const TextAreaCounter = React.createClass({
  name: 'TextAreaCounter',
  mixins: [logMixin],
  propTypes: {
    text: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      defaultValue: ''
    }
  },
  getInitialState: function () {
    return { text: this.props.defaultValue }
  },
  _textChange: function (ev) {
    this.setState({
      text: ev.target.value
    })
  },
  componentDidUpdate: function (oldProps, oldState) {
    if (this.state.text.length > 3) {
      this.replaceState(oldState)
    }
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
      React.createElement(TextAreaCounter, { defaultValue: 'Bob' }),
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
