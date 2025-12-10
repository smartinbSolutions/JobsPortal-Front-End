import { useGetAllJobsQuery, useGetOneJobQuery } from "@/RTK/jobsApi";
import { useParams } from "next/navigation";
import { useState } from "react";

const useGetJobs = () => {
  const { id } = useParams();

  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [companyId, setCompanyId] = useState("");

  const {
    data: jobs,
    isLoading,
    error,
    refetch: refetchJobs,
  } = useGetAllJobsQuery({
    query,
    limit,
    page,
    companyId,
  });

  const {
    data: oneJob,
    isLoading: oneJobLoading,
    error: oneJobError,
    refetch: refetchOneJob,
  } = useGetOneJobQuery(id, { skip: !id });

  const handleSearch = () => {
    if (keyword) setQuery(keyword);
  };

  return {
    //all jobs
    jobs: jobs?.data,
    isLoading,
    error,
    //one job
    oneJob: oneJob?.data,
    oneJobLoading,
    oneJobError,
    //functions
    handleSearch,
    refetchJobs,
    refetchOneJob,
    //others
    keyword,
    setKeyword,
    query,
    setQuery,
    limit,
    setLimit,
    page,
    setPage,
    setCompanyId,
    id,
  };
};

export default useGetJobs;
