import { configureStore } from '@reduxjs/toolkit';
import { UserSlice } from '../Pages/User/Slice/UserSlice';
import { userAPI } from './User/UserAPI';


export const store = configureStore({
  reducer: {
    UserSlice: UserSlice.reducer,
    [userAPI.reducerPath] : userAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(userAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
