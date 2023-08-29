import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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

export const editTodo = createAsyncThunk(
    'async/editTodo',
    async function (id, options) {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                title: 'foo',
                body: 'bar',
                userId: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
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
        builder.addCase(editTodo.pending, (state, action) => {
            state.status = "loading"
        })
        builder.addCase(editTodo.fulfilled, (state, action) => {
            console.log('action edit', action)
            state.status = "fulfilled"
            // const deletedId = action.meta.arg
            // state.list = state.list.filter(todo => todo.id !== deletedId)
        })
        builder.addCase(editTodo.rejected, (state, action) => {
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

// const { fetchTodos } = todosSlice.actions

export default todosSlice.reducer;