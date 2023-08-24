import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk(
    'async/todos',
    async function (param, options) {
        console.log('>> fetchTodos param: ', param, options)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/to1dos?_limit=15')

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()
            console.log('>> data', data)

            return data
        } catch (error){
            console.log('*** catched error', error)
            options.rejectWithValue(error.message)
        }
    }
)
// export const fetchTodos = createAsyncThunk(
//     'async/todos',
//     async function () {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')

//         if (!response.ok) {
//             throw new Error()
//         }

//         const data = await response.json()
//         console.log('>> data', data)

//         return data
//     }
// )

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [],
        status: '',
        error: ''
    },
    reducers: {
        setTodos: (state, action) => {
            console.log('!! setTodos action', action)
            state.list = action.payload
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = "loading"
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = "fullfilled"

            state.list = action.payload
        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = "rejected"
            console.log('>> rejected action', action)
            state.error = action.error.message
        },
    }
})

// const { fetchTodos } = todosSlice.actions

export default todosSlice.reducer;