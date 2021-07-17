import { createSlice } from '@reduxjs/toolkit'

export const frequencySlice = createSlice({
  name: 'frequency',
  initialState: {
    value: 3000,
    isModalOpen: false,
  },
  reducers: {
    changeFrequency: (state, action) => {
      state.value = action.payload
    },

    toggleFrequencyModal: (state) => {
        state.isModalOpen = !state.isModalOpen
    }  
  },
})

// Action creators are generated for each case reducer function
export const { changeFrequency, toggleFrequencyModal } = frequencySlice.actions

export default frequencySlice.reducer