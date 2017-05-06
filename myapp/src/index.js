import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import TextAreaCounter from './text-area-counter'
import './index.css'

ReactDOM.render(
  // <App />,
  <TextAreaCounter defaultValue='Bob' />,
  document.getElementById('root')
)
