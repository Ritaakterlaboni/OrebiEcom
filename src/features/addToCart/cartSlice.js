import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'counter',
  initialState: { value:0 },
  reducers: {
     addItem: (state) => {
    state.value += 1;  // শুধু value বাড়াবে
  },
  },
})


export const { addItem } = cartSlice.actions

export default cartSlice.reducer