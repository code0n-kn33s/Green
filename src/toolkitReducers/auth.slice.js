import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setToken, privateFetch, getToken, clearToken } from '../helpers'

const REQUEST_USER_LOGIN = "REQUEST_USER_LOGIN"
const REQUEST_USER_LOGOUT = "REQUEST_USER_LOGOUT"
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
const LOGIN_USER_ERROR = "LOGIN_USER_ERROR"
const CHECK_USER_AUTH_REQUEST = "CHECK_USER_AUTH_REQUEST"
const CHECK_USER_AUTH_SUCCESS = "CHECK_USER_AUTH_SUCCESS"
const CHECK_USER_AUTH_ERROR = "CHECK_USER_AUTH_ERROR"

export const getUserData = createAsyncThunk(
    'async/todos',
    async function (param, options) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()

            return data
        } catch (error) {
            options.rejectWithValue(error.message)
        }
    }
)

export const loginUser = createAsyncThunk(
    'async/loginUser',
    async function (state, options) {
        console.log('process.env :>> ', process.env);
        const response = await fetch(process.env.REACT_APP_API_URL + '/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
            })
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to log in');
        }

        const json = await response.json();

        return json;
    }
)
// export const logoutUser = createAsyncThunk(
//     'async/loginUser',
//     async function (state, options) {
//         // const response = await fetch('https://dummyjson.com/auth/login', {
//         //     method: 'GET',
//         //     headers: { 'Content-Type': 'application/json' },
//         //     body: JSON.stringify({
//         //         username: 'kminchelle',
//         //         password: '0lelplR',
//         //     })
//         // })

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || 'Failed to log in');
//         }

//         const json = await response.json();

//         return json;
//     }
// )

export const editUserData = createAsyncThunk(
    'async/editUserData',
    async function (id, options) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todo/${id}`, { //with
            method: 'PATCH',
        });

        if (!response.ok) {
            throw new Error()
        }

        // options.fulfillWithValue(id)
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        user: null,
        isAuth: false,
        fething: false,
        error: ''
    },
    reducers: {
        userLogout: (state, action) => {
            console.log('userLogout :>> ', state);
            state.isAuth = false

            clearToken()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserData.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.fething = "fullfilled"
            const deletedId = action.meta.arg

            state.list = state.list.filter(todo => todo.id !== deletedId)
            state.list = action.payload
        })
        builder.addCase(getUserData.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })

        builder.addCase(loginUser.pending, (state, action) => {
            state.fething = "loading"
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.fething = "fulfilled"

            if(action.payload.token) {
                setToken(action.payload)

                state.isAuth = true
                state.user = action.payload
            }
        })

        builder.addCase(loginUser.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })
        builder.addCase(editUserData.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(editUserData.fulfilled, (state, action) => {
            state.fething = "fulfilled"
            const deletedId = action.meta.arg
            state.list = state.list.filter(todo => todo.id !== deletedId)
        })
        builder.addCase(editUserData.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })
    }
})

export const { userLogout } = todosSlice.actions

export default todosSlice.reducer;