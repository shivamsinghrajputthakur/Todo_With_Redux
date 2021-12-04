import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers/index";

import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

const composedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(ReduxThunk)
    // other store enhancers if any
  )
  

const store = createStore(rootReducer,composedEnhancer );

export default store;