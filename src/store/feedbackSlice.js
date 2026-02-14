import { createSlice } from "@reduxjs/toolkit";
import { initialSuggestions, initialComments } from "../data/initialData";

const initialState = {
  suggestions: initialSuggestions,
  comments: initialComments,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addSuggestion: (state, action) => {
      const newSuggestion = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        upvotes: 0,
        comments: 0,
        category: action.payload.category || "Feature",
        upvoted: false,
        status: action.action.status || "Planned",
      };
      state.suggestions.push(newSuggestion);
    },
    updateSuggestion: (state, action) => {
      const index = state.suggestions.findIndex(
        (suggestion) => suggestion.id === action.payload.id,
      );
      if (index !== -1) {
        state.suggestions[index] = {
          ...state.suggestions[index],
          ...action.payload,
        };
      }
    },
    deleteSuggestion: (state, action) => {
      state.suggestions = state.suggestions.filter(
        (suggestion) => suggestion.id !== action.payload,
      );
      delete state.suggestions[action.payload];
    },
    toggleUpvote: (state, action) => {
      const item = state.suggestions.find(
        (suggestion) => suggestion.id === action.payload,
      );
      if (item) {
        item.upvoted = !item.upvoted;
        item.upvotes = item.upvoted
          ? item.upvotes + 1
          : Math.max(0, item.upvotes - 1);
      }
    },
  },
});

export default feedbackSlice.reducer;
