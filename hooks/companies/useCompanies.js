import { useGetAllCompaniesQuery } from "@/RTK/jobCompaniesApi";
import { useState } from "react";

const useCompanies = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [foundationDate, setFoundationDate] = useState({
    min: 1900,
    max: 2028,
  });
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");

  const { data, isLoading, error, refetch } = useGetAllCompaniesQuery({
    keyword,
    limit,
    page,
  });

  return {
    // data
    data: data?.data || [],
    totalPages: data?.totalPages || 1,
    isLoading,
    error,
    refetch,

    // filters
    keyword,
    setKeyword,
    location,
    setLocation,
    category,
    setCategory,
    foundationDate,
    setFoundationDate,
    limit,
    setLimit,
    page,
    setPage,
    sort,
    setSort,
  };
};

export default useCompanies;
