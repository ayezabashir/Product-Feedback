import { createSlice } from "@reduxjs/toolkit";
import { initialSuggestions, initialComments } from "../data/initialData";

const initialState = {
  suggestions: initialSuggestions,
  comments: initialComments,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
});

export default feedbackSlice.reducer