import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    storeAllReviews: (state, action) => {
      state.reviews = action.payload;
    },
    sortReviews : (state, action) => {
      if(action.payload == "views"){
        state.reviews =  [...state.reviews].sort((a, b) => b.views - a.views);
      }
      if(action.payload == "likes"){
        state.reviews =  [...state.reviews].sort((a, b) => b.reactions.likes - a.reactions.likes);
      }
    }
  },
});

export const { storeAllReviews, sortReviews } = reviewsSlice.actions;

export default reviewsSlice.reducer;
