import React from 'react'
import { Router } from "@reach/router"

const SomeSubPage = props => {
  return <div>Hi from SubPage with id: {props.id}</div>
}

const App = () => (
  <>
    <Router>
      <SomeSubPage path="/app/:id" />
    </Router>
  </>
)

export default App
