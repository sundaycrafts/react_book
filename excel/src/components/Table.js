/* @flow */
import React, { Component } from 'react'

type Props = {
  initialData: Array<string[]>,
  theads: Array<string>
}

class Table extends Component {
  displayName = 'Excel'
  props: Props

  state = {
    data: this.props.initialData,
    sortby: null,
    decending: false,
    edit: null
  }

  render () {
    return (
      <table>
        <thead onClick={this._sort}>
          <tr>
            {this.props.theads.map((title, idx) =>
              <th key={idx}>{title}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((row, idx) =>
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

  _sort = (e: Event & { target: HTMLTableCellElement }) => {
    let column = e.target.cellIndex
    let data = Array.from(this.state.data)
    data.sort((a, b) => a[column] > b[column] ? 1 : -1)
    this.setState({ data: data })
  }
}

export default Table
