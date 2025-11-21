import { BASE_URL, jobCompaniesEndPoint } from "@/api/GlobalData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobCompaniesApi = createApi({
  reducerPath: "jobCompaniesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["JobCompanyApi"],
  endpoints: (builder) => ({
    companyRegister: builder.mutation({
      query: (data) => ({
        url: jobCompaniesEndPoint,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["JobCompanyApi"],
    }),
    getAllCompanies: builder.query({
      query: ({ keyword, limit = 10, page = 1 }) => {
        const params = new URLSearchParams({});

        if (keyword) params.append("keyword", keyword);
        params.append("limit", limit);
        params.append("page", page);

        return `${jobCompaniesEndPoint}?${params.toString()}`;
      },
      providesTags: ["JobCompanyApi"],
    }),
    getCompany: builder.query({
      query: (id) => `${jobCompaniesEndPoint}/${id}`,
      providesTags: (result, error, id) => [{ type: "JobCompanyApi", id }],
    }),
  }),
});

export const {
  useCompanyRegisterMutation,
  useGetAllCompaniesQuery,
  useGetCompanyQuery,
} = jobCompaniesApi;
