import { createStore, combineReducers } from "redux";
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {navbarReducer} from './navbarReducer'
import { usersReducer } from "./usersReducer";

console.log("ReduxStore start")

let reducers = combineReducers({
  profilePage:profileReducer,
  dialogsPage:dialogsReducer,
  navbarPage:navbarReducer,
  usersPage:usersReducer
})

console.log("ReduxStore center")


let store = createStore(reducers)

console.log("ReduxStore end", store.dispatch)
window.store = store

export default store