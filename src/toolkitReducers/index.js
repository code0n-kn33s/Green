import {combineReducers} from "@reduxjs/toolkit"

import todosSlice from './todos.slice'
import authSlice from './auth.slice'
export * from './auth.slice'

const rootReducer = combineReducers({
    // todos: todosSlice,
    auth: authSlice
})

export default rootReducer;
