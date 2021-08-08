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
    setInputState: (state, action: PayloadAction<InputState>) => {
      state.num = action.payload.num;
      state.str = action.payload.str;
    },
  },
});

export const {setInputState} = inputStateSlice.actions;

export default inputStateSlice.reducer;
