import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        user: { type: "test", id: -1 },
    },
    reducers: {
        saveDetails: (state, action) => {
            state.user = action.payload;
            // let test = { type: "test2", id: -100 };
        }
    },
})

export const { saveDetails } = accountSlice.actions;

export const selectUser = (state: any) => state.account.user;

export default accountSlice.reducer;