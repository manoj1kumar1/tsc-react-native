import { configureStore } from '@reduxjs/toolkit';
import MasterReducers from './slices/updateProfileSlice';

export const store = configureStore({
    reducer: {
        profileUpdate: MasterReducers
    },
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
});