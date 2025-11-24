import { BASE_URL, wishlistEndPoint } from "@/api/GlobalData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const DB_Name = Cookies.get("DB_Name");
const cookiesData = Cookies.get("user");
const user = cookiesData ? JSON.parse(cookiesData) : null;
const jwt = Cookies.get("token");

export const savedApi = createApi({
  reducerPath: "savedApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      if (jwt) {
        headers.set("Authorization", `Bearer ${jwt}`);
      }
      return headers;
    },
  }),

  tagTypes: ["saved"],
  endpoints: (builder) => ({
    getAllSaved: builder.query({
      query: ({ keyword, limit, page }) => {
        const params = new URLSearchParams({});

        if (user) params.append("jobSeeker", user._id);
        if (limit) params.append("limit", limit);
        if (page) params.append("page", page);
        if (keyword) params.append("keyword", keyword);

        return `${wishlistEndPoint}?${params.toString()}`;
      },
      providesTags: ["saved"],
    }),
    saveJob: builder.mutation({
      query: (data) => ({
        url: `${wishlistEndPoint}?companyId=${DB_Name}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["saved"],
    }),
    unsaveJob: builder.mutation({
      query: (id) => ({
        url: `${wishlistEndPoint}/${id}?companyId=${DB_Name}`,
        method: "DELETE",
      }),
      invalidatesTags: ["saved"],
    }),
  }),
});

export const { useGetAllSavedQuery, useSaveJobMutation, useUnsaveJobMutation } =
  savedApi;
