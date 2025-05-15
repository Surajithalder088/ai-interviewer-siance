import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import interviewReducer from './interviewSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    interview:interviewReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;