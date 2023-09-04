import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const REQUEST_USER_LOGIN = "REQUEST_USER_LOGIN"
const REQUEST_USER_LOGOUT = "REQUEST_USER_LOGOUT"
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
const LOGIN_USER_ERROR = "LOGIN_USER_ERROR"
const CHECK_USER_AUTH_REQUEST = "CHECK_USER_AUTH_REQUEST"
const CHECK_USER_AUTH_SUCCESS = "CHECK_USER_AUTH_SUCCESS"
const CHECK_USER_AUTH_ERROR = "CHECK_USER_AUTH_ERROR"

export const fetchTodos = createAsyncThunk(
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
    async function (id, options) {
        console.log('id :>> ', id);
        console.log('options :>> ', options);

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: 'kminchelle',
                password: '0lelplR',
                // expiresInMins: 60, // optional
            })
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(error => {
            throw new Error(error)
        })

        // if (!response.ok) {
        //     throw new Error()
        // }

        // options.fulfillWithValue(id)
    }
)

export const deleteTodo = createAsyncThunk(
    'async/deleteTodo',
    async function (id, options) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todo/${id}`, { //with error reject
            // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
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
        list: [],
        status: '',
        error: ''
    },
    reducers: {
        clearTodos: (state, action) => {
            state.list = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = "loading"
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = "fullfilled"
            state.list = action.payload
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.status = "rejected"
            state.error = action.error.message || action.error.stack
        })
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = "loading"
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            console.log('action edit', action)
            state.status = "fulfilled"
            // const deletedId = action.meta.arg
            // state.list = state.list.filter(todo => todo.id !== deletedId)
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = "rejected"
            state.error = action.error.message || action.error.stack
        })
        builder.addCase(deleteTodo.pending, (state, action) => {
            state.status = "loading"
        })
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.status = "fulfilled"
            const deletedId = action.meta.arg
            state.list = state.list.filter(todo => todo.id !== deletedId)
        })
        builder.addCase(deleteTodo.rejected, (state, action) => {
            state.status = "rejected"
            state.error = action.error.message || action.error.stack
        })
    }
})

// const { loginUser } = todosSlice.actions

export default todosSlice.reducer;