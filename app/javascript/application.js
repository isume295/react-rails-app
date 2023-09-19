// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
import store from "./redux/store";

 

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      );
});
