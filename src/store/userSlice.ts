import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  token: string;
  // Add any other fields as needed
}


const initialState: UserState  = {
    name:"",
    email:"",
    token:""
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    clearUser: () => {
      return {
    name:"",
    email:"",
    token:""
}
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;