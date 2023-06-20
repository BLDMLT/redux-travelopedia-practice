import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// RTK query
export const randomDestinationApi = createApi({
  "reducerPath": "apiRandomDestination",
  baseQuery: fetchBaseQuery({baseUrl: 'https://random-data-api.com/api/v2/'}),
  tagTypes: ["Destinations"],
  endpoints: (builder) => ({
    //QUERY -> GET
    // MUTATION -> POST/PUT/DELETE
    getRandomDestination: builder.query({
      // query: () => "destination",
      query: () => ({
        url: `addresses`,
        method: 'GET',
        params: {
        },
      })
    })
  })
})

export const { 
  useGetRandomDestinationQuery 
} = randomDestinationApi