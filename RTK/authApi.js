import {
  BASE_URL,
  loginEndpoint,
  passResetEndpoint,
  resetPasswordEndPoint,
  signupEndpoint,
  verifyEndpoint,
  verifyPassResetCodeEndPoint,
} from "@/api/GlobalData";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: loginEndpoint,
        method: "POST",
        body: data, // {email, password}
      }),
      invalidatesTags: ["Auth"],
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: signupEndpoint,
        method: "POST",
        body: data, // {email, password, name, lastName, role}
      }),
      invalidatesTags: ["Auth"],
    }),
    verifyEmail: builder.mutation({
      query: (data) => ({
        url: verifyEndpoint,
        method: "POST",
        body: data, // {email, verificationCode}
      }),
      invalidatesTags: ["Auth"],
    }),
    requestResetCode: builder.mutation({
      query: (data) => ({
        url: passResetEndpoint,
        method: "POST",
        body: data, // {email}
      }),
      invalidatesTags: ["Auth"],
    }),
    verifyEmailPasswordReset: builder.mutation({
      query: (data) => ({
        url: verifyPassResetCodeEndPoint,
        method: "POST",
        body: data, // {email, resetCode}
      }),
      invalidatesTags: ["Auth"],
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: resetPasswordEndPoint,
        method: "POST",
        body: data, // {email, newPassword}
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useVerifyEmailMutation,
  useRequestResetCodeMutation,
  useVerifyEmailPasswordResetMutation,
  useResetPasswordMutation,
} = authApi;
