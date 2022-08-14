// counterSlice.ts 文件

import { createSlice ,PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../index'
export interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

// 创建一个 Slice 
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    increment: (state) => {
      state.value += 1;
    },
    // 定义一个减的方法
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
// 导出加减的方法
export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value
// 默认导出
export default counterSlice.reducer;
