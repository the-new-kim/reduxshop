import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const currencyArray = ["USD", "JPY", "EUR", "GBP"] as const;

export type TCurrency = typeof currencyArray[number];

interface ICurrencyState {
  value: TCurrency;
}

const initialState: ICurrencyState = { value: "USD" };

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<ICurrencyState["value"]>) {
      state.value = action.payload;
    },
    // increment(state) {
    //   state.value++;
    // },
    // decrement(state) {
    //   state.value--;
    // },
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload;
    // },
  },
});

export const {} = currencySlice.actions;
export default currencySlice.reducer;
