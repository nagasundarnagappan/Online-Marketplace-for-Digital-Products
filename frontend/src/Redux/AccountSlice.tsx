import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: "account",
    initialState: {
        user: { type: "null", id: -1, accessToken: "" },
        product: -1,
    },
    reducers: {
        saveDetails: (state, action) => {
            state.user = action.payload;
        },
        deleteDetails: (state) => {
            state.user = { type: "null", id: -1 };
        },
        saveProduct: (state, action) => {
            state.product = action.payload;
        }
    },
})

export const { saveDetails, deleteDetails, saveProduct } = accountSlice.actions;

export const selectUser = (state: any) => state.account.user;

export const selectProduct = (state: any) => state.account.product;

export default accountSlice.reducer;