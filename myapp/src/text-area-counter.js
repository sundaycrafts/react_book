import React from 'react'
import logMixin from './log-mixin'

export default React.createClass({
  name: 'TextAreaCounter',
  mixins: [logMixin],
  propTypes: {
    text: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      defaultValue: ''
    }
  },
  getInitialState: function () {
    return { text: this.props.defaultValue }
  },
  _textChange: function (ev) {
    this.setState({
      text: ev.target.value
    })
  },
  componentDidUpdate: function (oldProps, oldState) {
    if (this.state.text.length > 3) {
      this.replaceState(oldState)
    }
  },
  render: function () {
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this._textChange
      }),
      React.DOM.h3(null, this.state.text.length)
    )
  }
})
