import {combineReducers} from "@reduxjs/toolkit"

import todosSlice from './todos-slice-builder'


const rootReducer = combineReducers({
    todos: todosSlice
})

export default rootReducer;
