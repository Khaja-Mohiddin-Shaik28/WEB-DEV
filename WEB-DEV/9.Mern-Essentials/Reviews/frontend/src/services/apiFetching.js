import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ReviewsApi = createApi({
  reducerPath: 'ReviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getAllReviews: builder.query({
        query: () => ({
          url : "api/reviews"
        }),
        }),
    }),
  })


export const { useGetAllReviewsQuery } = ReviewsApi;