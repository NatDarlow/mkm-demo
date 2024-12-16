import { BranchBasicType } from "../../types"
import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export type BranchesStateType = {
  branches: Array<BranchBasicType>
}

const initialState: BranchesStateType = {
  branches: [],
}

const branchesSlice = createSlice({
  name: "branches",
  initialState: initialState,
  reducers: {
    setBranches: (state: BranchesStateType, action: PayloadAction<Array<BranchBasicType>>) => {
      state.branches = [...action.payload]
    },
  },
})

export const { setBranches } = branchesSlice.actions
export default branchesSlice.reducer
