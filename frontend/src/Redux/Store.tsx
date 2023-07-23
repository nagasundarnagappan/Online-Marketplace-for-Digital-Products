import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './AccountSlice';

export default configureStore({
    reducer: {
        account: accountReducer,
    },
})
