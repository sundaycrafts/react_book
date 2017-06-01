import React, { Component } from 'react'
import Button from './Button'

class Dialog extends Component {
  static defaultProps = {
    hasCancel: true,
    modal: false,
    onAction: () => {},
    confirmLabel: 'ok'
  }

  componentWillUnmount () {
    document.body.classList.remove('DialogModalOpen')
  }

  componentWillMount () {
    document.body.classList.add('DialogModalOpen')
  }

  render () {
    return (
      <div className={this.props.modal ? 'Dialog DialogModal' : 'Dialog'}>
        <div className={this.props.modal ? 'DialogModalWrap' : null}>
          <div className='DialogHeader'>{this.props.header}</div>
          <div className='DialogBody'>{this.props.children}</div>
          <div className='DialogFooter'>
            {this.props.hasCancel
              ? <span
                className='DialogDismis'
                onClick={this.props.onAction.bind(this, 'dismiss')}
                >キャンセル</span>
              : null
            }
            <Button onClick={this.props.onAction.bind(this,
              this.props.hasCancel ? 'confirm' : 'dismiss')}
            >{this.props.confirmLabel}</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Dialog
