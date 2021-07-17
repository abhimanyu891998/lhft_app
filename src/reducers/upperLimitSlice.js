import { createSlice } from '@reduxjs/toolkit'

export const upperLimitSlice = createSlice({
  name: 'upperLimit',
  initialState: {
    value: 100,
    isModalOpen: false,
  },
  reducers: {
    changeUpperLimit: (state, action) => {
      state.value = action.payload
    },

    toggleUpperLimitModal: (state) => {
        state.isModalOpen = !state.isModalOpen
    }  
  },
})

// Action creators are generated for each case reducer function
export const { changeUpperLimit, toggleUpperLimitModal } = upperLimitSlice.actions

export default upperLimitSlice.reducer