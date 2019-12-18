import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "../reducers"

const store = createStore(rootReducer, composeWithDevTools());

export default ({ element }) => <Provider store={store}>{element}</Provider>
