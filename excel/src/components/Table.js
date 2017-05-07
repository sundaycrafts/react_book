import React, { Component } from 'react'
import bookList from '../data/bookList.json'

class Table extends Component {
  render () {
    let theads = [
      'Title', 'Author', 'Language', 'Publish', 'sell'
    ]

    return (
      <table>
        <thead>
          <tr>
            {theads.map((title, idx) =>
              <th key={idx}>{title}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {bookList.map((row, idx) =>
            <tr key={idx}>
              {row.map((cell, idx) =>
                <td key={idx}>{cell}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

export default Table
