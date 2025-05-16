

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InterviewState {
  role: string;
  experience: string;
  domain: string;
  company:string;
  jobDetails:string;
  companyDetails:string;
  // Add any other fields as needed
}


const initialState: InterviewState  = {
  role:"",
  experience: "",
  domain: "",
  company:"",
  jobDetails:"",
  companyDetails:"",
};

const interviewSlice = createSlice({
  name: 'interview',
  initialState,
  reducers: {
    setInterview: (state, action: PayloadAction<InterviewState>) => {
      console.log(state);
      
      return action.payload;
    },
    clearInterview: () => {
      return {
  role:"",
  experience: "",
  domain: "",
  company:"",
  jobDetails:"",
  companyDetails:"",
};
    },
  },
});

export const { setInterview, clearInterview } = interviewSlice.actions;
export default interviewSlice.reducer;