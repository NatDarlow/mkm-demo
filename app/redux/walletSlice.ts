import { CardType } from "../../types"
import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export type CardsStateType = {
  cards: Array<CardType>
}

const initialState: CardsStateType = {
  cards: [],
}

const cardsSlice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    setCards: (state: CardsStateType, action: PayloadAction<Array<CardType>>) => {
      state.cards = [...action.payload]
    },
  },
})

export const { setCards } = cardsSlice.actions
export default cardsSlice.reducer
