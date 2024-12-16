import { OrderType } from "../../types"
import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export type OrdersStateType = {
  orders: Array<OrderType>
}

const initialState: OrdersStateType = {
  orders: [],
}

const ordersSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    setOrders: (state: OrdersStateType, action: PayloadAction<Array<OrderType>>) => {
      state.orders = [...action.payload]
    },
  },
})

export const { setOrders } = ordersSlice.actions
export default ordersSlice.reducer
