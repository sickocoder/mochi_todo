import React from "react";

import { Provider } from "react-redux";
import store from "./Store";

import GlobalStyle from "./styles/global";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
