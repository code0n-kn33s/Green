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
            const response = await privateFetch('get_wallet/?type=' + param.toUpperCase())

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

export const getRisks = createAsyncThunk(
    'async/getRisks',
    async function (param, options) {
        try {
            const response = await privateFetch('get_user_risks/')

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

export const getGlobalStatistics = createAsyncThunk(
    'async/getGlobalStatistics',
    async function (param, options) {
        try {
            const response = await privateFetch('get_global_statistics/')

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

export const setUserRisks = createAsyncThunk(
    'async/setUserRisks',
    async function (param, options) {
        try {
            const response = await privateFetch('set_risk/')

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
// balance : "69.99" crypto_deposit_btc : "0.00" crypto_deposit_eth : "0.00" crypto_deposit_usdt : "0.00" is_active : true username :
export const setSum = createAsyncThunk(
    'async/setSum',
    async function (param, options) {
        try {
            const response = await privateFetch('set_sum/', {
                method: 'POST',
                body: JSON.stringify({
                    sum: param.sum,
                    type: param.typeSum,
                })
            })

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
export const setRisks = createAsyncThunk(
    'async/setRisks',
    async function (param, options) {
        try {
            const response = await privateFetch('set_risk/', {
                method: 'POST',
                body: JSON.stringify({
                    current_risk: param.current_risk,
                })
            })

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

export const setWithdrawal = createAsyncThunk(
    'async/setWithdrawal',
    async function (param, options) {
        try {
            const response = await privateFetch('withdrawal_sum/', {
                method: 'POST',
                body: JSON.stringify({
                    withdrawal_sum: param.withdrawal_sum,
                    currency: param.currency,
                    address: param.address,
                })
            })

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

export const setKiss = createAsyncThunk(
    'async/setKiss',
    async function (param, options) {

        const formData = new FormData();

        // Добавляем текстовые данные
        formData.append('birth_date', param.birth_date);
        formData.append('city', param.city);
        formData.append('country', param.country);
        formData.append('name', param.name);
        formData.append('second_name', param.second_name);
        formData.append('telegram', param.telegram);
        formData.append('third_name', param.third_name);

        // Добавляем изображение в поле document_image
        formData.append('document_image', param.document_image.selectedFile);

        try {
            const response = await privateFetch('submit_user_data/', {
                method: 'POST',
                body: formData
            }, true)

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

const actionsSlice = createSlice({
    name: 'todos',
    initialState: {
        currencies: [
            { value: 'eth', name: "Ethereum", index: 0 },
            { value: 'btc', name: "Bitcoin", index: 1 },
            { value: 'usdt', name: "USDT", index: 2 }
        ],
        sessions: null,
        wallet: '',
        risks: null,
        statistics: null,
        isAuth: false,
        fething: false,
        registered: false,
        kissFields: null,
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
        },

        transportKissFields: (state, action) => {
            state.kissFields = action.payload;
        },

        clearKissFields: (state) => {
            state.kissFields = null
        }
    },
    extraReducers: (builder) => {
        //set risks
        builder.addCase(setRisks.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setRisks.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            // state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(setRisks.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })

        //set Kiss
        builder.addCase(setKiss.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setKiss.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            // state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(setKiss.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.error.message || action.error.stack
        })

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


            if (action.payload) state.wallet = action.payload
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

export const {
    userLogout,
    clearUserData,
    transportKissFields,
    clearKissFields
} = actionsSlice.actions

export default actionsSlice.reducer;