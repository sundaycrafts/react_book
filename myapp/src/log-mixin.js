/**
 * Inheritance Inversion pattern
 * http://postd.cc/react-higher-order-components-in-depth/
 */
export default function (WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render () {
      return super.render()
    }

    _log (methodName, args) {
      console.log(`${this.name}::${methodName},`, args)
    }

    /**
     * Life-cycle event(s)
     */
    componentWillUpdate () {
      this._log('componentWillUpdate', arguments)
    }

    componentDidUpdate () {
      this._log('componentDidUpdate', arguments)
    }

    componentWillMount () {
      this._log('componentWillMount', arguments)
    }

    componentDidMount () {
      this._log('componentDidMount', arguments)
    }

    componentWillUnmount () {
      this._log('componentWillUnmount', arguments)
    }
  }
}
