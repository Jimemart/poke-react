import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"

import "./App.css"
import { PokemonContainer } from "./views"

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={PokemonContainer} />
    </Switch>
  </div>
)

export default withRouter(App)
