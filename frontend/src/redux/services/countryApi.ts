import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Country = {
  id: number;
  name: string;
  habitants: number;
  habPercentageWithTotal: number;
};

export const countryApi = createApi({
  reducerPath: "countryApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3050/api",
  }),
  endpoints: (builder) => ({
    getCountrySearch: builder.query({
      query: ({ query }) => `countries?search=${query}`,
    }),
  }),
});

export const { useGetCountrySearchQuery } = countryApi;
