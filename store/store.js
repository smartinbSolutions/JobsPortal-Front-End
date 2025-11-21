import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../features/job/jobSlice";
import toggleSlice from "../features/toggle/toggleSlice";
import filterSlice from "../features/filter/filterSlice";
import employerSlice from "../features/employer/employerSlice";
import employerFilterSlice from "../features/filter/employerFilterSlice";
import candidateSlice from "../features/candidate/candidateSlice";
import candidateFilterSlice from "../features/filter/candidateFilterSlice";
import shopSlice from "../features/shop/shopSlice";
import { authApi } from "@/RTK/authApi";
import { jobsApi } from "@/RTK/jobsApi";
import { jobApplicationsApi } from "@/RTK/applicationsApi";
import { savedApi } from "@/RTK/savedApi";
import { jobCompaniesApi } from "@/RTK/jobCompaniesApi";

// export const store = configureStore({
//   reducer: {
//     job: jobSlice,
//     toggle: toggleSlice,
//     filter: filterSlice,
//     employer: employerSlice,
//     employerFilter: employerFilterSlice,
//     candidate: candidateSlice,
//     candidateFilter: candidateFilterSlice,
//     shop: shopSlice,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
// });

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [jobApplicationsApi.reducerPath]: jobApplicationsApi.reducer,
    [savedApi.reducerPath]: savedApi.reducer,
    [jobCompaniesApi.reducerPath]: jobCompaniesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(jobsApi.middleware)
      .concat(jobApplicationsApi.middleware)
      .concat(jobCompaniesApi.middleware)
      .concat(savedApi.middleware),
});
