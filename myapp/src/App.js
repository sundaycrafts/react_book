import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    ReactDOM.render(
      /** Result:
       * <h1 id="my-heading">
       *   <span><em>Hell</em>o</span>, world!
       * </h1>
      */
      React.DOM.h1(
        { id: 'my-heading' },
        React.DOM.span(null,
          React.DOM.em(null, 'Hell'),
          'o'
        ),
        ', world!'
      ),
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

export default App;
