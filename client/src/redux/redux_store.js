import {createStore, combineReducers, applyMiddleware} from "redux"
import { authReducer } from "./authReducer"
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk"

const rootReducer  = combineReducers({
  auth:authReducer,
  form: formReducer
})

export const store = createStore(
  rootReducer ,
  applyMiddleware(thunk)
)
console.log("AuthREducer", store.getState())
window.store=store