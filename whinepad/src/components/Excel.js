/* @flow */
import React, { Component } from 'react'

type DataList = Array<string[]>

type Props = {
  initialData: DataList,
  theads: Array<string>
}

type State = {
  data: ?DataList,
  sortby: ?number,
  descending: boolean,
  edit: ?{
    row: number,
    cell: number
  },
  search: boolean,
  preSearchData: ?DataList
}

class Excel extends Component {
  displayName = 'Excel'
  props: Props

  state: State = {
    data: this.props.initialData,
    sortby: null,
    descending: false,
    edit: null,
    search: false,
    preSearchData: this.props.initialData
  }

  _log = []

  render () {
    return (
      <div>
        {this._renderToolbar()}
        {this._renderTable()}
      </div>
    )
  }

  componentDidMount () {
    document.onkeydown = e => {
      if (e.altKey && e.shiftKey && e.keyCode === 82 ) {
        this._replay()
      }
    }
  }

  _renderToolbar () {
    return (
      <div>
        <button onClick={this._toggleSearch} className='toolebar'>Search</button>
        <a onClick={this._download.bind(this, 'json')} href='data.json'>Save as JSON</a>
        <a onClick={this._download.bind(this, 'csv')} href='data.csv'>Save as CSV</a>
      </div>
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

    this._logSetState({
      data: data,
      sortby: column,
      descending: descending
    })
  }

  _showEditor = (e: Event & { target: HTMLTableCellElement }) => {
    this._logSetState({
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

    this._logSetState({
      edit: null,
      data: data
    })
  }

  _toggleSearch = (e: Event & { target: any }) => {
    if (this.state.search) { // on show
      this._logSetState({
        search: false,
        preSearchData: this.props.initialData
      })
    } else { // on hide
      this._logSetState({
        search: true,
        data: this.props.initialData
      })
    }
  }

  _search = (e: Event & { target: any }) => {
    let needle = e.target.value.toLowerCase()
    if (!needle) {
      this._logSetState({ data: this.state.preSearchData })
      return
    }

    let idx = e.target.dataset.idx
    this._logSetState({
      data: this.state.preSearchData.filter(row => {
        return row[idx].toString().toLowerCase().indexOf(needle) > -1
      })
    })
  }

  _logSetState = (newState: any) => {
    this._log.push(JSON.parse(JSON.stringify(
      this._log.length === 0 ? this.state : newState
    )))
    this.setState(newState)
  }

  _replay = () => {
    if (this._log.length === 0) {
      console.warn("Don't logging yet.")
      return
    }

    let idx = -1
    let interval = setInterval(() => {
      idx++
      if (idx === this._log.length -1 ) { // reach tail
        clearInterval(interval)
      }
      this.setState(this._log[idx])
    }, 1000)
  }

  _download = (format, ev) => {
    let contents = format === 'json'
      ? JSON.stringify(this.state.data)  
      : this.state.data.reduce((result, row) => {
        return result
          + row.reduce((rowresult, cell, idx) => {
            return `${rowresult}"${cell.replace(/"/g, '""')}"${idx < row.length - 1 ? ',' : ''}`
          }, '')
          + '\n'
      }, '')

    let URL = window.URL || window.webkitURL
    let blob = new Blob([contents], { type: `text/${format}`})
    ev.target.href = URL.createObjectURL(blob)
    ev.target.download = `data.${format}`
  }
}

export default Excel
