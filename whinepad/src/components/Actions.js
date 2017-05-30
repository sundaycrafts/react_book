import React from 'react'

const Actions = props => (
  <div>
    <span
      tabIndex='0'
      className='Actions'
      title='詳しい情報'
      onClick={props.onAction.bind(null, 'info')}>&#8505;</span>
    <span
      tabIndex='0'
      className='ActionsEdit'
      title='編集'
      onClick={props.onAction.bind(null, 'edit')}>&#10000;</span>
    <span
      tabIndex='0'
      className='ActionsDelete'
      title='削除'
      onClick={props.onAction.bind(null, 'delete')}>x</span>
  </div>
)

Actions.defaultProps = {
  onAction: () => {}
}

export default Actions
