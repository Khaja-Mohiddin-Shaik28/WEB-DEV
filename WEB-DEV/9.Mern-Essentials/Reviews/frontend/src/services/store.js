import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ReviewsApi } from './apiFetching'
import reviewsSlice from './reviewsSlice'
export const store = configureStore({
  reducer: {
    reviews : reviewsSlice,
    [ReviewsApi.reducerPath]: ReviewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ReviewsApi.middleware),
})


setupListeners(store.dispatch)