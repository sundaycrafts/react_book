import React, { Component } from 'react'
import classNames from 'classnames'
import './Rating.css'

class Rating extends Component {
  static defaultProps = {
    defaultValue: 0,
    max: 5,
    readonly: false
  }

  state = {
    rating: this.props.defaultValue,
    tmpRating: this.props.defaultValue
  }

  render () {
    const stars = []
    for (let i = 1; i <= this.props.max; i++) {
      stars.push(
        <span
          className={i <= this.state.tmpRating ? 'RatingOn' : null}
          key={i}
          onClick={this.onClick.bind(this, i)}
          onMouseOver={this.onMouseOver.bind(this, i)}>
          &#9734;
        </span>
      )
    }

    return (
      <div
        className={classNames({
          'Rating': true,
          'RatingReadonly': this.props.readonly
        })}
        onMouseOut={this.onMouseOut}>
        {stars}
        {this.props.readonly || !this.props.id
          ? null
          : <input
            type='hidden'
            id={this.props.id}
            value={this.state.rating} />
        }
      </div>
    )
  }

  /**
   * Event Handler
   * Event Handlerでイベントをまとめようとすると、このonClickとonMouseOverのように
   * ロジックが重複してしまったり、1コンポーネントに複数の同系統のイベントハンドラを
   * 含められなくなってしまう。
   */
  onClick = i => {
    if (!this.props.readonly) {
      this.setRating(i)
    }
  }

  onMouseOut = () => {
    this.reset()
  }

  onMouseOver = i => {
    if (!this.props.readonly) {
      this.setRating(i)
    }
  }

  /**
   * Helper methods
   */
  getValue () {
    return this.state.rating
  }

  setTemp (rating) {
    this.setState({ tmpRating: rating })
  }

  setRating (rating) {
    this.setState({
      tmpRating: rating,
      rating: rating
    })
  }

  reset () {
    this.setTemp(this.state.rating)
  }

  componentWillReceiveProps (nextProps) {
    this.setRating(nextProps.defaultValue)
  }
}

export default Rating
