import React, { Component } from 'react'

class Suggest extends Component {
  state = {
    value: this.props.defaultValue
  }

  render () {
    const randomid = Math.random().toString(16).substring(2)

    return (
      <div>
        <input type='text'
          defaultValue={this.props.defaultValue}
          onChange={e => this.setState({value: e.target.value})}
          id={this.props.id} />
        <datalist id={randomid}>{
          this.props.options.map((item, idx) =>
            <option value={item} key={idx} />
          )}</datalist>
      </div>
    )
  }

  getValue () {
    return this.state.value
  }
}

export default Suggest
