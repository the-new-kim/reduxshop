import { IProduct } from "@/libs/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  homeProducts: IProduct[];
  search: string;
}

const initialState: IInitialState = {
  homeProducts: [],

  search: "",
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.homeProducts = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setProducts, setSearch } = products.actions;
export default products.reducer;
