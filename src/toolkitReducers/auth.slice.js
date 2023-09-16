import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setToken, privateFetch, getToken, clearToken, setStorage } from '../helpers'
import BrowserDetector from 'browser-dtector';

const browser = new BrowserDetector(window.navigator.userAgent);
let showUserAgent = browser.parseUserAgent();

const fieldsUserAgent = {
    isAndroid: false,
    isDesktop: true,
    isIE: false,
    isMobile: false,
    isTablet: false,
    isWebkit: true,
    name: "Google Chrome",
    platform: "Macintosh",
    shortVersion: "116",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
    version: "116.0.0.0",
}

export const getUserData = createAsyncThunk(
    'async/getUserData',
    async function (param, options) {
        try {
            const response = await privateFetch('get_user_data/', {
                method: "POST",
                body: JSON.stringify({
                    browser: fieldsUserAgent.name,
                    os: fieldsUserAgent.platform,
                    version: fieldsUserAgent.version,
                })
            })

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()
            console.log('get user data :>> ', data);
            return data
        } catch (error) {
            options.rejectWithValue(error.message)
        }
    }
)

export const registerNewUser = createAsyncThunk(
    'async/registerNewUser',
    async function (param, options) {
        try {
            // const response = await fetch(process.env.REACT_APP_API_URL + 'dashboard/register_user', {
            const response = await fetch(process.env.REACT_APP_API_URL + 'register_user/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: param.username,
                    email: param.email,
                    password: param.password,
                    // refID: param.refID,
                })
            })
            console.log('registerNewUser response :>> ', response);

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()
            console.log('registerNewUser data :>> ', data);
            return data
        } catch (error) {
            options.rejectWithValue(error.message)
        }
    }
)

export const loginUser = createAsyncThunk(
    'async/loginUser',
    async function (data, options) {
        const response = await fetch(process.env.REACT_APP_API_URL + 'login_user/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: data.useLogin,
                password: data.usePassword,
                browser: fieldsUserAgent.name,
                os: fieldsUserAgent.platform,
                version: fieldsUserAgent.version,
            })
        })

        if (!response.ok) {
            const errorData = await response.json();
            console.log('errorData :>> ', errorData);
            throw new Error(errorData.message || 'Failed to log in');
        }

        const json = await response.json();

        return json;
    }
)


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
        registered: false,
        error: ''
    },
    reducers: {
        userLogout: (state, action) => {
            state.user = null
            state.isAuth = false
            state.fething = false
            state.error = ''

            clearToken()
        },
        clearUserData: (state, action) => {
            state.user = null
            state.isAuth = false
            state.fething = false
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserData.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.fething = "fullfilled"
            // console.log('action.payload :>> ', action.payload);
            setStorage(action.payload?.user)

            state.isAuth = true
            state.user = action.payload
            state.error = ''
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

            if (action.payload.token) {
                setToken(action.payload)

                state.isAuth = true
                state.user = action.payload
                state.error = ''
            }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })
        builder.addCase(registerNewUser.pending, (state, action) => {
            state.fething = "loading"

        })
        builder.addCase(registerNewUser.fulfilled, (state, action) => {
            state.fething = "fulfilled"
            state.registered = true

            setTimeout(() => {
                state.registered = false
            }, 2000);
        })
        builder.addCase(registerNewUser.rejected, (state, action) => {
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

export const { userLogout, clearUserData } = todosSlice.actions

export default todosSlice.reducer;