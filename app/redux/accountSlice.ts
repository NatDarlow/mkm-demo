import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { AccountSummaryType } from "../../types"

export type AccountStateType = {
  summary: AccountSummaryType | null
}

const initialState: AccountStateType = {
  summary: null,
}

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    setAccountSummary: (
      state: AccountStateType,
      action: PayloadAction<AccountSummaryType | null>,
    ) => {
      state.summary = action.payload
    },
  },
})

export const { setAccountSummary } = accountSlice.actions
export default accountSlice.reducer
