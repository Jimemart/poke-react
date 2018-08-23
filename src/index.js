import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import rootReducer from "./services/root.reducer";
import "./index.css";
import { rootSaga } from "./services/root.saga";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    compose(
      applyMiddleware(sagaMiddleware),
      (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()) ||
        compose
    )
  )
);

sagaMiddleware.run(rootSaga);

configure({ adapter: new Adapter() });

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
