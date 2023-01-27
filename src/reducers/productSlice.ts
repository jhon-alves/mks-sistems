import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { getProducts } from '../services';

interface InitialStateProps  {
  data: {
    count: number;
    products: Product[];
  };
  loading: boolean;
}

const initialState = {
  data: {
    count: 0,
    products: [],
  },
  loading: false,
} as InitialStateProps

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      })
  },
});

// export const {  } = productSlice.actions

export default productSlice.reducer