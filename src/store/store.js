import { configureStore } from "@reduxjs/toolkit";
import feedbackreducer from "./feedbackSlice";
export const store = configureStore({
  reducer: {
    feedback: feedbackreducer,
  },
});
