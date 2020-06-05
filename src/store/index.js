import { combineReducers,createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import user from "./module/user"
const reducers = combineReducers({user})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store