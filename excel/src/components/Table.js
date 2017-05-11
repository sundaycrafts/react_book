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
  edit: ?{
    row: number,
    cell: number
  },
  search: boolean
}

class Table extends Component {
  displayName = 'Excel'
  props: Props

  state: State = {
    data: this.props.initialData,
    sortby: null,
    descending: false,
    edit: null,
    search: false
  }

  render () {
    return (
      <div>
        {this._renderToolbar()}
        {this._renderTable()}
      </div>
    )
  }

  _renderToolbar () {
    return (
      <button onClick={this._toggleSearch} className='toolebar'>Search</button>
    )
  }

  _renderSearch = () => {
    if (this.state.search) return null

    return (
      <tr onChange={this._search}>
        {this.props.theads.map((_ignore, idx) =>
          <td key={idx}>
            <input type='text' data-idx={idx} />
          </td>
        )}
      </tr>
    )
  }

  _renderTable () {
    let edit = this.state.edit

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
        <tbody onDoubleClick={this._showEditor}>
          {this._renderSearch()}
          {this.state.data.map((row, rowidx) =>
            <tr key={rowidx}>
              {row.map((cell, idx) =>
                <td key={idx} data-row={rowidx}>
                  {edit && edit.row === rowidx && edit.cell === idx
                    ? <form onSubmit={this._save}>
                      <input type='text' defaultValue={cell} />
                    </form>
                    : cell
                  }
                </td>
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

    data.sort((a, b) => descending
      ? (a[column] > b[column] ? 1 : -1)
      : (a[column] < b[column] ? 1 : -1)
    )

    this.setState({
      data: data,
      sortby: column,
      descending: descending
    })
  }

  _showEditor = (e: Event & { target: HTMLTableCellElement }) => {
    this.setState({
      edit: {
        row: parseInt(e.target.dataset.row, 10),
        cell: e.target.cellIndex
      }
    })
  }

  _save = (e: Event & { target: any }) => {
    e.preventDefault()
    let input = e.target.firstChild
    let data = Array.from(this.state.data)
    data[this.state.edit.row][this.state.edit.cell] = input.value

    this.setState({
      edit: null,
      data: data
    })
  }

  _toggleSearch = (e: Event & { target: any }) => {
    console.log('toggle search.')
  }

  _search = (e: Event & { target: any }) => {
    console.log('searching...')
  }
}

export default Table
