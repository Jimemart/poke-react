import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"

import "./App.css"
import { asyncComponent } from "./components"

const Pokemon = asyncComponent(() => import("./views/PokemonContainer").then(module => module.PokemonContainer),
)

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={Pokemon} />
    </Switch>
  </div>
)

export default withRouter(App)
