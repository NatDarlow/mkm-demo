import { Document } from "../../types"
import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export type CreditsStateType = {
  credits: Array<Document>
}

const initialState: CreditsStateType = {
  credits: [],
}

const creditsSlice = createSlice({
  name: "credits",
  initialState: initialState,
  reducers: {
    setCredits: (state: CreditsStateType, action: PayloadAction<Array<Document>>) => {
      state.credits = [...action.payload]
    },
  },
})

export const { setCredits } = creditsSlice.actions
export default creditsSlice.reducer
