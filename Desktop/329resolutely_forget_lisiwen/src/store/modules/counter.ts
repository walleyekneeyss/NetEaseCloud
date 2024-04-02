import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  // 创建slice片段
  name: 'counter',
  initialState: {
    count: 100,
    message: 'lisiwen'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload;
    }
  }
});

export const { changeMessageAction } = counterSlice.actions;
export default counterSlice.reducer;
