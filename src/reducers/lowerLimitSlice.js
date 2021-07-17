import { createSlice } from '@reduxjs/toolkit'

export const lowerLimitSlice = createSlice({
  name: 'lowerLimit',
  initialState: {
    value: 100,
    isModalOpen: false,
  },
  reducers: {
    changeLowerLimit: (state, action) => {
      state.value = action.payload
    },

    toggleLowerLimitModal: (state) => {
        state.isModalOpen = !state.isModalOpen
    }  
  },
})

// Action creators are generated for each case reducer function
export const { changeLowerLimit, toggleLowerLimitModal } = lowerLimitSlice.actions

export default lowerLimitSlice.reducer