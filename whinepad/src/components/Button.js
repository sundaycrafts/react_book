import React, { Component } from 'react'
import classNames from 'classnames'
import './Button.css'

class Button extends Component {
  static defaultProps = {
    href: null
  }

  render () {
    const {classnames, ...props} = this.props
    const cssclasses = classNames('Button', classnames)

    return props.href
      ? <a {...props} className={cssclasses} />
      : <button {...props} className={cssclasses}>{this.props.children}</button>
  }
}

export default Button
