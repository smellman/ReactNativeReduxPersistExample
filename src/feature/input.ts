import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InputState {
  num: number;
  str: string;
}

const initialState: InputState = {
  num: 100,
  str: 'test',
};

const inputStateSlice = createSlice({
  name: 'input_state',
  initialState,
  reducers: {
    setNum: (state, action: PayloadAction<number>) => {
      state.num = action.payload;
    },
    setStr: (state, action: PayloadAction<string>) => {
      state.str = action.payload;
    },
  },
});

export const {setNum, setStr} = inputStateSlice.actions;

export default inputStateSlice.reducer;
