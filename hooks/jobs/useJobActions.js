import { useGetAllJobsQuery } from "@/RTK/jobsApi";
import { useSaveJobMutation } from "@/RTK/savedApi";
import Cookies from "js-cookie";
import { useState } from "react";
import { showToast } from "../global/showToast";

const useJobActions = () => {
  const userData = JSON.parse(Cookies.get("user"));

  const {
    refetch,
    isLoading: refetching,
    error: refetchError,
  } = useGetAllJobsQuery();

  return {
    refetching,
    refetchError,
  };
};

export default useJobActions;
