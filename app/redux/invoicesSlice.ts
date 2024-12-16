import { Document } from "../../types"
import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export type InvoicesStateType = {
  invoices: Array<Document>
  overdue: number
}

const initialState: InvoicesStateType = {
  invoices: [],
  overdue: 0,
}

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: initialState,
  reducers: {
    setInvoices: (state: InvoicesStateType, action: PayloadAction<Array<Document>>): void => {
      state.invoices = [...action.payload]
    },
    setOverdue: (state: InvoicesStateType, action: PayloadAction<number>): void => {
      state.overdue = action.payload
    },
  },
})

export const { setInvoices, setOverdue } = invoicesSlice.actions
export default invoicesSlice.reducer
