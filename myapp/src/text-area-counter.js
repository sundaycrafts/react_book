import React, { Component } from 'react'
import logMixin from './log-mixin'

export default class TextAreaCounter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: this.props.defaultValue,
      name: 'TextAreaCounter'
    }
  }

  mixins: [logMixin]

  static defaultProps: {
    defaultValue: ''
  }

  render () {
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this._textChange
      }),
      React.DOM.h3(null, this.state.text.length)
    )
  }

  propTypes: {
    text: React.PropTypes.string
  }

  /**
   * event handlers should bind to "this".
   * alternatively, override it by binded function
   * in constructor like bellow(verbose):
   * this._textChange = this._textChange.bind(this)
   */
  _textChange = ev => {
    this.setState({
      text: ev.target.value
    })
  }

  /**
   * Life-cycle event(s)
   */
  componentDidUpdate (oldProps, oldState) {
    if (this.state.text.length > 3) {
      /**
       * attention: replaceState is duplicated
       * https://github.com/facebook/react/issues/3236
       */
      // this.replaceState(oldState)
      this.setState(oldState)
    }
  }
}
