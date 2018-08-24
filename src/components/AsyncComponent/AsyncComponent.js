import React, { Component } from "react"

export default function asyncComponent(getComponent) {
  class AsyncComponent extends Component {
    static Component = null;

    state = { AsyncCmp: AsyncComponent.Component };

    componentWillMount() {
      const { AsyncCmp } = this.state
      if (AsyncCmp) {
        getComponent().then(cmp => {
          AsyncComponent.Component = cmp
          this.setState({ AsyncCmp })
        })
      }
    }

    render() {
      const { AsyncCmp } = this.state
      if (AsyncCmp) {
        return <AsyncCmp {...this.props} />
      }
      return null
    }
  }
  return AsyncComponent
}
