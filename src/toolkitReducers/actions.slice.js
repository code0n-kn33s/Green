import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setToken, privateFetch, getToken, clearToken } from '../helpers'
import moment from 'moment'

export const getCurrencies = createAsyncThunk(
    'async/getCurrencies',
    async function (param, options) {
        const response = await privateFetch('get_crypto_prices/')

        const data = await response.json()
        if (!response.ok) {
            return options.rejectWithValue(data);
        }

        return data
    }
)

export const getGlobalProfit = createAsyncThunk(
    'async/getGlobalProfit',
    async function (param, options) {
        const response = await fetch(process.env.REACT_APP_API_URL + 'get_global_profit/')

        const data = await response.json();

        if (!response.ok) {
            return options.rejectWithValue(data);
        }

        return data
    }
)

// export const getCurrencies = createAsyncThunk(
//     'async/getCurrencies',
//     async function (param, options) {
//         const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,USDT&convert=USD', {
//             headers: {
//                 'X-CMC_PRO_API_KEY': "1a3e27f2-f2d5-48b0-811a-0f826d662aed",
//                 'Accept': 'application/json',
//             },
//         })

//         const data = await response.json()
//         if (!response.ok) {
//             return options.rejectWithValue(data);
//         }

//         return data
//     }
// )

export const getUserSessions = createAsyncThunk(
    'async/getUserSessions',
    async function (param, options) {
        const response = await privateFetch('get_user_sessions/')

        const data = await response.json()
        if (!response.ok) {
            return options.rejectWithValue(data);

        }



        return data
    }
)
export const getUserWallet = createAsyncThunk(
    'async/getUserWallet',
    async function (param, options) {
        const response = await privateFetch('get_wallet/?type=' + param.toUpperCase())
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

    })

export const getRisks = createAsyncThunk(
    'async/getRisks',
    async function (param, options) {
        const response = await privateFetch('get_user_risks/')
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }

        return data
    }
)

export const getGlobalStatistics = createAsyncThunk(
    'async/getGlobalStatistics',
    async function (param, options) {
        const response = await privateFetch('get_global_statistics/')
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

    }
)
export const getUserRisks = createAsyncThunk(
    'async/getUserRisks',
    async function (param, options) {

        const response = await privateFetch('get_user_risks/')
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

    }
)

export const setUserRisks = createAsyncThunk(
    'async/setUserRisks',
    async function (param, options) {
        const response = await privateFetch('set_risk/')
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

    }
)

export const setTransactionsHistory = createAsyncThunk(
    'async/setTransactionsHistory',
    async function (param, options) {
        const response = await privateFetch('transaction_history/')
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

    }
)
export const setBetHistory = createAsyncThunk(
    'async/setBetHistory',
    async function (param, options) {
        const response = await privateFetch('bet_history/')
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);
        }


        return { data, oldState: options.getState() }

    }
)

export const setSum = createAsyncThunk(
    'async/setSum',
    async function (param, options) {
        const response = await privateFetch('set_sum/', {
            method: 'POST', body: JSON.stringify({
                sum: param.sum,
                type: param.typeSum,
            })
        })
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

    }
)
export const depositSum = createAsyncThunk(
    'async/depositSum',
    async function (param, options) {
        const response = await privateFetch('deposit_sum/', {
            method: 'POST', body: JSON.stringify({
                sum: param.sum,
                type: param.typeSum,
            })
        })
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

    }
)
export const setRisks = createAsyncThunk(
    'async/setRisks',
    async function (param, options) {
        const response = await privateFetch('set_risk/', {
            method: 'POST',
            body: JSON.stringify({
                current_risk: param.current_risk,
            })
        })
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

    }
)

export const setWithdrawal = createAsyncThunk(
    'async/setWithdrawal',
    async function (param, options) {
        const response = await privateFetch('withdrawal_sum/', {
            method: 'POST',
            body: JSON.stringify({
                withdrawal_sum: param.withdrawal_sum,
                currency: param.currency,
                address: param.address,
            })
        })
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

    }
)

export const setBinary = createAsyncThunk(
    'async/setBinary',
    async function (param, options) {
        const response = await privateFetch('make_bet/', {
            method: 'POST',
            body: JSON.stringify({
                bet_type: param.upDownValue === 'up' ? 'Higher' : 'Lower',
                amount: param.investment,
                currency: param.selectedPair,
                expiration_time: param.formTime,
            })
        })
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }

        return data
    }
)

export const setTransfer = createAsyncThunk(
    'async/setTransfer',
    async function (param, options) {
        const response = await privateFetch('balance_transaction/', {
            method: 'POST',
            body: JSON.stringify({
                amount: param.withdrawal_sum,
                from_ticker: param.from_ticker,
                to_ticker: param.to_ticker,
                from_balance: param.from,
                to_balance: param.to,
            })
        })
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

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
        formData.append('second_name', param.second_name); formData.append('telegram', param.telegram);
        formData.append('phone', param.phone);

        // Добавляем изображение в поле document_image
        formData.append('document_image', param.document_image.selectedFile);

        const response = await privateFetch('submit_user_data/', {
            method: 'POST',
            body: formData
        }, true)
        const data = await response.json()

        if (!response.ok) {
            return options.rejectWithValue(data);

        }


        return data

    }
)

const actionsSlice = createSlice({
    name: 'state',
    initialState: {
        currencies: [
            { value: 'usdt', name: "USDT", index: 0 },
            { value: 'btc', name: "Bitcoin", index: 1 },
            { value: 'eth', name: "Ethereum", index: 2 },
        ],
        sessions: null,
        wallet: '',
        globalProfit: null,
        currenciesFetch: null,
        risks: null,
        betHistory: null,
        pendingBets: [],
        transactionsHistory: null,
        statistics: null,
        tooltip: false,
        tooltipText: '',
        fething: false,
        registered: false, kissFields: null,
        error: ''
    },
    reducers: {
        transportKissFields: (state, action) => {
            state.kissFields = action.payload;
        },

        clearKissFields: (state) => {
            state.kissFields = null
        },
        openTooltip: (state, action) => {
            state.tooltip = true
        },
        closeTooltip: (state) => {
            state.tooltip = false
        },
        textTooltip: (state, action) => {
            state.tooltipText = action.payload
        },
        textTooltipClear: (state, action) => {
            state.tooltipText = ''
        }
    },
    extraReducers: (builder) => {
        //get getGlobalProfit
        builder.addCase(getGlobalProfit.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(getGlobalProfit.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            state.globalProfit = action.payload
            state.error = ''
        })
        builder.addCase(getGlobalProfit.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
        })

        //get currencies
        builder.addCase(getCurrencies.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(getCurrencies.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            const { payload } = action;

            const joinCurrencies = {
                usdt: {
                    name: "USDT",
                    rate: payload.USDT
                },
                btc: {
                    name: "BTC",
                    rate: payload.BTC
                },
                eth: {
                    name: "ETH",
                    rate: payload.ETH
                },
            }

            state.currenciesFetch = joinCurrencies

            state.error = ''
        })
        builder.addCase(getCurrencies.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
        })
        //get user risks
        builder.addCase(getUserRisks.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(getUserRisks.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            // state.statistics = action.payload
            state.risks = action.payload
            state.error = ''
        })
        builder.addCase(getUserRisks.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
        })
        //set risks
        builder.addCase(setRisks.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setRisks.fulfilled, (state, action) => {
            state.fething = "fullfilled"
            state.tooltip = true

            // state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(setRisks.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
        })
        //setBetHistory
        builder.addCase(setBetHistory.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setBetHistory.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            const { bet_history } = action.payload.data
            state.betHistory = bet_history

            // let resolvedPendings = []
            let pendings = bet_history.filter((bet) => bet.status === "Pending")

            // не работает
            // pendings.forEach(pendingBet => {
            //     console.log('## first :>> ', pendingBet);
            //     if (pendingBet.status !== "Pending") {
            //         console.log('## sectond :>> ', pendingBet);
            //         resolvedPendings.push(pendingBet)
            //         console.log('## third :>> ', resolvedPendings);
            //     }
            // })

            state.pendingBets = pendings;

            state.error = ''
        })
        builder.addCase(setBetHistory.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
        })
        //setTransactionsHistory
        builder.addCase(setTransactionsHistory.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setTransactionsHistory.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            state.transactionsHistory = action.payload
            state.error = ''
        })
        builder.addCase(setTransactionsHistory.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
        })

        //set Kiss
        builder.addCase(setKiss.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setKiss.fulfilled, (state, action) => {
            state.fething = "fullfilled"
            // state.tooltip = true

            // state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(setKiss.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
        })

        //set Withdrawal
        builder.addCase(setWithdrawal.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setWithdrawal.fulfilled, (state, action) => {
            state.fething = "fullfilled"
            state.tooltip = true

            // state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(setWithdrawal.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
        })

        //set make bet setBinary
        builder.addCase(setBinary.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setBinary.fulfilled, (state, action) => {
            state.fething = "fullfilled"
            state.tooltipRedirect = false
            state.tooltipText = "Ставка принята. Прогресс можете отслеживать во вкладке Баланс - История Сеансов"

            // state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(setBinary.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
        })

        //set Transfer
        builder.addCase(setTransfer.pending, (state, action) => {
            state.fething = "loading"
        })

        builder.addCase(setTransfer.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            if (action.payload?.error) {
                console.log('error :>> ', action.payload);
                state.error = action.payload?.error
            } else {
                // state.tooltip = true
                // state.tooltipRedirect = false
                // state.tooltipText = "Заявка на перевод средств принята"

                state.error = ''
            }
        })

        builder.addCase(setTransfer.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
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
            state.error = action.payload
        })
        //deposit Sum
        builder.addCase(depositSum.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(depositSum.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            // state.statistics = action.payload
            state.error = ''
        })
        builder.addCase(depositSum.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
        })

        //set User risks
        builder.addCase(setUserRisks.pending, (state, action) => {
            state.fething = "loading"
        })
        builder.addCase(setUserRisks.fulfilled, (state, action) => {
            state.fething = "fullfilled"

            // state.statistics = action.payload
            state.tooltip = true
            state.error = ''
        })
        builder.addCase(setUserRisks.rejected, (state, action) => {
            state.fething = "rejected"
            state.error = action.payload
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
            state.error = action.payload
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
            state.error = action.payload
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
            state.error = action.payload
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
            state.error = action.payload
        })


    }
})

export const {
    transportKissFields,
    clearKissFields,
    openTooltip,
    closeTooltip,
    textTooltip,
    textTooltipClear,
} = actionsSlice.actions

export default actionsSlice.reducer;