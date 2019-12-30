import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "../reducers"
import { propElement } from '../helpers/propTypes';

const store = createStore(rootReducer, composeWithDevTools());

const ReduxWrapper =  ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

ReduxWrapper.propTypes = {
  element: propElement()
};

export default ReduxWrapper;
