
import rootReducer from "./reducers/index";

import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;