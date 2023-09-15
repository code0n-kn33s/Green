import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setToken, privateFetch, getToken, clearToken } from '../helpers'

export const getUserSessions = createAsyncThunk(
    'async/getUserSessions',
    async function (param, options) {
        try {
            const response = await privateFetch('get_user_sessions/')

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()
            console.log("response :>>",data);
            return data
        } catch (error) {
            options.rejectWithValue(error.message)
        }
    }
)
export const getUserWallet = createAsyncThunk(
    'async/getUserWallet',
    async function (param, options) {
        try {
            const response = await privateFetch('get_wallet/')

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()
            console.log("response :>>",data);
            return data
        } catch (error) {
            options.rejectWithValue(error.message)
        }
    }
)

export const getRisks = createAsyncThunk(
    'async/getRisks',
    async function (param, options) {
        try {
            const response = await privateFetch('get_user_risks/')

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()
            console.log("response :>>",data);
            return data
        } catch (error) {
            options.rejectWithValue(error.message)
        }
    }
)

export const getGlobalStatistics = createAsyncThunk(
    'async/getGlobalStatistics',
    async function (param, options) {
        try {
            const response = await privateFetch('get_global_statistics/')

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()
            console.log("response :>>",data);
            return data
        } catch (error) {
            options.rejectWithValue(error.message)
        }
    }
)

export const setUserRisks = createAsyncThunk(
    'async/setUserRisks',
    async function (param, options) {
        try {
            const response = await privateFetch('set_risk/')

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()
            console.log("response :>>",data);
            return data
        } catch (error) {
            options.rejectWithValue(error.message)
        }
    }
)
// balance : "69.99" crypto_deposit_btc : "0.00" crypto_deposit_eth : "0.00" crypto_deposit_usdt : "0.00" is_active : true username :
export const setSum = createAsyncThunk(
    'async/setSum',
    async function (param, options) {
        try {
            const response = await privateFetch('set_sum/', {
                method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        sum: param.sum,
                        // type: param.type,
                        type: 'btc',
            })})

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()
            console.log("response :>>",data);
            return data
        } catch (error) {
            options.rejectWithValue(error.message)
        }
    }
)

export const setWithdrawal = createAsyncThunk(
    'async/setWithdrawal',
    async function (param, options) {
        try {
            const response = await privateFetch('withdrawal_sum/')

            if (!response.ok) {
                throw new Error('Wrong request')
            }

            const data = await response.json()
            console.log("response :>>",data);
            return data
        } catch (error) {
            options.rejectWithValue(error.message)
        }
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        sessions: null,
        wallet: null,
        risks: null,
        statistics: null,
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


        //set Withdrawal
        builder.addCase(setWithdrawal.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setWithdrawal.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            // state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(setWithdrawal.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })

        //set Sum
        builder.addCase(setSum.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setSum.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            // state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(setSum.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })

        //set User risks
        builder.addCase(setUserRisks.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setUserRisks.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            // state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(setUserRisks.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })

        //globalStatistics
        builder.addCase(getGlobalStatistics.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(getGlobalStatistics.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(getGlobalStatistics.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })

        //risks
        builder.addCase(getRisks.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(getRisks.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            state.risks = action.payload
            state.error = ''
        })
        builder.addCase(getRisks.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })

        //wallet
        builder.addCase(getUserWallet.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(getUserWallet.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            state.wallet = action.payload
            state.error = ''
        })
        builder.addCase(getUserWallet.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })

        //sessions
        builder.addCase(getUserSessions.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(getUserSessions.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            state.sessions = action.payload
            state.error = ''
        })
        builder.addCase(getUserSessions.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })


    }
})

export const { userLogout, clearUserData } = todosSlice.actions

export default todosSlice.reducer;