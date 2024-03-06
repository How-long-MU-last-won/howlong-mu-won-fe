import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_API_URL;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTrophies: builder.query({
      query: () => 'trophies/',
    }),
    getManagers: builder.query({
      query: () => 'coaches/',
    }),
    getPlayers: builder.query({
      query: () => 'players/',
    }),
  }),
});

export const { useGetTrophiesQuery, useGetManagersQuery, useGetPlayersQuery } = apiSlice;