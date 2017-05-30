/* @flow */
import React, { Component } from 'react'
import './App.css'
import Logo from './components/Logo'
import Button from './components/Button'
import Suggest from './components/Suggest'
import Rating from './components/Rating'
import FormInput from './components/FormInput'

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

        <h2>FormInput</h2>
        <table>
          <tbody>
            <tr>
              <td>単純な入力フィールド</td>
              <td><FormInput /></td>
            </tr>
            <tr>
              <td>デフォルト値</td>
              <td><FormInput defaultValue='デフォルトです' /></td>
            </tr>
            <tr>
              <td>年の入力</td>
              <td><FormInput type='year' /></td>
            </tr>
            <tr>
              <td>評価</td>
              <td><FormInput type='rating' defaultValue={4} /></td>
            </tr>
            <tr>
              <td>入力候補の提示</td>
              <td><FormInput type='suggest'
                options={['red', 'green', 'blue']}
                defaultValue='green' /></td>
            </tr>
            <tr>
              <td>単純なテキストエリア</td>
              <td><FormInput type='text' /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
