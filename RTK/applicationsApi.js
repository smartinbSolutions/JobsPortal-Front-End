import { BASE_URL, applicationEndpoint } from "@/api/GlobalData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const DB_Name = Cookies.get("DB_Name");
const jwt = Cookies.get("token");

export const jobApplicationsApi = createApi({
  reducerPath: "jobApplicationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      if (jwt) {
        headers.set("Authorization", `Bearer ${jwt}`);
      }
      return headers;
    },
  }),

  tagTypes: ["applications"],
  endpoints: (builder) => ({
    getAllApplications: builder.query({
      query: ({ query, limit, page, userId }) => {
        const params = new URLSearchParams({
          companyId: DB_Name,
          keyword: query,
          limit: String(limit),
          page: String(page),
        });

        if (userId) params.append("jobSeekerId", userId);

        return `${applicationEndpoint}?${params.toString()}`;
      },
      providesTags: ["applications"],
    }),
    getOneApplication: builder.query({
      query: (id) => `${applicationEndpoint}/${id}?companyId=${DB_Name}`,
      providesTags: (result, error, id) => [{ type: "applications", id }],
    }),
    createApplication: builder.mutation({
      query: (data) => ({
        url: `${applicationEndpoint}?companyId=${DB_Name}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["applications"],
    }),
    updateApplication: builder.mutation({
      query: ({ id, data }) => ({
        url: `${applicationEndpoint}/${id}?companyId=${DB_Name}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "applications", id },
      ],
    }),
    deleteApplication: builder.mutation({
      query: (id) => ({
        url: `${applicationEndpoint}/${id}?companyId=${DB_Name}`,
        method: "DELETE",
      }),
      invalidatesTags: ["applications"],
    }),
  }),
});

export const {
  useGetAllApplicationsQuery,
  useGetOneApplicationQuery,
  useCreateApplicationMutation,
  useUpdateApplicationMutation,
  useDeleteApplicationMutation,
} = jobApplicationsApi;
