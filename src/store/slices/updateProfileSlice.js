import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
let hello = 0;
export const profileUpdate = createAsyncThunk('profileUpdateSlice/profileUpdate', async (payloads) => {
    try {
        console.log('Manoj', (++hello));
        const response = await fetch('https://dummy.restapiexample.com/api/v1/employees')
        .then((response) => response.json())
        .then((result) => result.data)
        .catch(error => console.log('error', error));
        return response;
    } catch (e) {
        return console.error(e.message);
    }
});

const profileUpdateSlice = createSlice({
    name: 'profileUpdate',
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {
        clearProfileResponse: (state, { payload }) => {
            return { ...state, data: [] };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(profileUpdate.pending, (state) => {
            state.isLoading = true;
            state.data = [];
        })
        builder.addCase(profileUpdate.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.data = payload || [];
        })
        builder.addCase(profileUpdate.rejected, (state) => {
            state.isLoading = false
            state.data = payload || [];
        })
    }
});

export const { clearProfileResponse } = profileUpdateSlice.actions;
export default profileUpdateSlice.reducer;