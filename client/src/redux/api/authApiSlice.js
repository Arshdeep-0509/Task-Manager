import { apiSlice } from "../slices/apiSlice";
const AUTH_URL = "/user";
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation(),
  }),
});
