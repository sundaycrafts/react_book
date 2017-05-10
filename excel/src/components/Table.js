/* @flow */
import React, { Component } from 'react'

type DataList = Array<string[]>

type Props = {
  initialData: DataList,
  theads: Array<string>
}

type State = {
  data: DataList,
  sortby: ?number,
  descending: boolean,
  edit: any
}

class Table extends Component {
  displayName = 'Excel'
  props: Props

  state: State = {
    data: this.props.initialData,
    sortby: null,
    descending: false,
    edit: null
  }

  render () {
    return (
      <table>
        <thead onClick={this._sort}>
          <tr>
            {this.props.theads.map((title, idx) =>
              <th key={idx}>
                {title}{this.state.sortby === idx &&
                  (this.state.descending ? '\u2191' : '\u2193')}
              </th>
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
    let descending = this.state.sortby === column && !this.state.descending

    data.sort((a, b) => descending ? (a[column] > b[column] ? 1 : -1) : (a[column] < b[column] ? 1 : -1))

    this.setState({
      data: data,
      sortby: column,
      descending: descending
    })
  }
}

export default Table
