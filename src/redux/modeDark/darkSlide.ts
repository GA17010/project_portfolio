import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  value: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  value: false,
}

export const darkSlide = createSlice({
  name: 'dark',
  initialState,
  reducers: {
    changeDarkmode: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeDarkmode } = darkSlide.actions

export default darkSlide.reducer