import React, { Component } from 'react'

export default class Count extends Component {
  render () {
    /**
     * conditinal Reandaring: method 1
     * https://facebook.github.io/react/docs/conditional-rendering.html#inline-if-with-logical--operator
     */
    return (this.props.count > 0 &&
      <h3>{ this.props.count }</h3>
    )
  }
}
