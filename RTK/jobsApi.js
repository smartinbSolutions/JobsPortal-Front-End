import { BASE_URL, jobsEndpoint } from "@/api/GlobalData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const DB_Name = Cookies.get("DB_Name");
const jwt = Cookies.get("Token");
const cookies = Cookies.get("user");
const user = cookies ? JSON.parse(cookies) : null;

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      if (jwt) {
        headers.set("Authorization", `Bearer ${jwt}`);
      }
      return headers;
    },
  }),

  tagTypes: ["job"],
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: ({ keyword, limit, page, companyId }) => {
        const params = new URLSearchParams({});

        if (companyId) params.append("companyId", companyId);
        if (limit) params.append("limit", limit);
        if (page) params.append("page", page);
        if (keyword) params.append("keyword", keyword);

        return `${jobsEndpoint}?${params.toString()}`;
      },
      providesTags: ["job"],
    }),
    getOneJob: builder.query({
      query: (id) =>
        `${jobsEndpoint}/${id}?companyId=${DB_Name}${
          user && `&userId=${user?._id}`
        }`,
      providesTags: (result, error, id) => [{ type: "job", id }],
    }),
    createJob: builder.mutation({
      query: (data) => ({
        url: `${jobsEndpoint}?companyId=${DB_Name}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["job"],
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `${jobsEndpoint}/${id}?companyId=${DB_Name}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "job", id }],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `${jobsEndpoint}/${id}?companyId=${DB_Name}`,
        method: "DELETE",
      }),
      invalidatesTags: ["job"],
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetOneJobQuery,
  useCreateJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobsApi;
