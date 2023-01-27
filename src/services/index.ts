import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../helpers/api';

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (data, thunkApi) => {
    try {
      const response = await api.get(`/products?page=1&rows=8&sortBy=id&orderBy=ASC`);
      return response.data
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);