import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux/store";
import { BrowserRouter } from "react-router-dom";

import "./styles/shards-dashboards.1.1.0.min.css";
import "antd/dist/antd.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const persistor = persistStore(configureStore);

ReactDOM.render(
  <Provider store={configureStore}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
