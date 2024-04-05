import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RequiredResponseArray } from "./interface";

const status = ["Pending", "Active"];

const randomStatus = (): number => {
  return Math.floor(Math.random() * (1 - 0 + 1)) + 0;
};

export const usersApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => "users",
      transformResponse: (
        response: RequiredResponseArray
      ): RequiredResponseArray => {
        const responseArr = response?.map((result) => ({
          initial: `${result.name.split(" ")[0].charAt(0)}${result.name
            .split(" ")[1]
            ?.charAt(0)}`,
          id: result.id,
          name: result.name,
          username: result.username,
          status: status[randomStatus()],
        })) as RequiredResponseArray;
        return responseArr;
      },
    }),
  }),
});

export const { useFetchUsersQuery } = usersApi;
