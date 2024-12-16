import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { BranchType, UserType } from "../../types"

export type AuthStateType = {
  isAuthenticated: boolean
  apiSecret: string | null
  token: string | null
  customerId: string | null
  sessionId: string | null
  user: UserType | null
  branch: BranchType | null
}

const initialState: AuthStateType = {
  isAuthenticated: false,
  apiSecret: null,
  token: null,
  customerId: null,
  sessionId: null,
  user: null,
  branch: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (
      state: AuthStateType,
      action: PayloadAction<{
        apiSecret: string
        token: string
        customerId: string
        sessionId: string
        user: UserType
        branch: BranchType | null
      }>,
    ) => {
      state.isAuthenticated = true
      state.apiSecret = action.payload.apiSecret
      state.token = action.payload.token
      state.customerId = action.payload.customerId
      state.sessionId = action.payload.sessionId
      state.user = action.payload.user
      state.branch = action.payload.branch
    },
    logout: (state: AuthStateType, action: PayloadAction<null>) => {
      state.isAuthenticated = false
      state.apiSecret = null
      state.token = null
      state.customerId = null
      state.sessionId = null
      state.user = null
      state.branch = null
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
