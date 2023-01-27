import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import productReducer from '../reducers/productSlice';

export const store = configureStore({
  reducer: { product: productReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    }).concat(logger)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector