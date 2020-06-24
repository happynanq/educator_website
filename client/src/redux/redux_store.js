import {createStore, combineReducers, applyMiddleware} from "redux"
import { authReducer } from "./authReducer"
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk"
import { blogReducer } from "./blogReducer"
import { createArticleReducer } from "./createArticleReducer"

const rootReducer  = combineReducers({
  auth:authReducer,
  blog:blogReducer,
  createArticle:createArticleReducer,
  form: formReducer
})

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
window.store=store