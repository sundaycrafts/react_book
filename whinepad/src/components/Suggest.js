import React, { Component } from 'react'

class Suggest extends Component {
  render () {
    const randomid = Math.random().toString(16).substring(2)

    return (
      <div>
        <input type='text'
          defaultValue={this.props.defaultValue}
          ref='lowlevelinput'
          id={this.props.id} />
        <datalist id={randomid}>{
          this.props.options.map((item, idx) =>
            <option value={item} key={idx} />
          )}</datalist>
      </div>
    )
  }

  getValue () {
    return this.refs.lowlevelinput.value
  }
}

export default Suggest
