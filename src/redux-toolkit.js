import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./toolkitReducers";
import { getToken } from "./helpers";
import { loginUser } from "./toolkitReducers"

export const store = configureStore({
    reducer: rootReducer
})

if (getToken()) {
    let stored = store.getState();
    console.log('stored :>> ', stored);
    store.dispatch(loginUser)
}

store.subscribe(() => {
})
// store.subscribe(() => {
//     let stored = store.getState();
//     saveState({
//       auth: stored.auth,
//     });
//   });

//   if (store.getState().auth.token !== null) {
//     configurateToken(store.getState().auth.token);
//   }