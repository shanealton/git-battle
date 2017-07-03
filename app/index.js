import React from 'react'
import ReactDOM from 'react-dom'
require('./index.css')

class App extends React.Component {
  render() {
    return (
      <h2>Hello World!</h2>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
