import { persistStore, persistReducer } from "redux-persist"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { mmkvStorage } from "../utils/storage"

import accountSlice from "./accountSlice"
import authReducer from "./authSlice"
import branchesReducer from "./branchesSlice"
import creditsReducer from "./creditsSlice"
import invoicesReducer from "./invoicesSlice"
import cardsReducer from "./walletSlice"
import ordersReducer from "./ordersSlice"
import settingsReducer from "./settingsSlice"

const persistConfig = {
  key: "root",
  storage: mmkvStorage,
}

const reducers = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  settings: persistReducer(persistConfig, settingsReducer),
  account: accountSlice,
  branches: branchesReducer,
  credits: creditsReducer,
  invoices: invoicesReducer,
  orders: ordersReducer,
  cards: cardsReducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
