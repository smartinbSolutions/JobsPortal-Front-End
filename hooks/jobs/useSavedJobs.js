import {
  useGetAllSavedQuery,
  useSaveJobMutation,
  useUnsaveJobMutation,
} from "@/RTK/savedApi";
import Cookies from "js-cookie";
import { useState } from "react";
import { showToast } from "../global/showToast";

const useSavedJobs = () => {
  const cookiesData = Cookies.get("user");
  const userData = cookiesData ? JSON.parse(cookiesData) : null;

  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const {
    data: savedJobs,
    isLoading: savedLoading,
    error: savedError,
    refetch: refetchSaved,
  } = useGetAllSavedQuery({
    keyword: query,
    limit,
    page,
  });

  const [save, { isLoading: saving, error: saveError }] = useSaveJobMutation();
  const [unsave, { isLoading: unsaving, error: unsaveError }] =
    useUnsaveJobMutation();

  const handleSave = async (item) => {
    if (!userData) {
      showToast("error", "Please log in to save the job");
      return;
    }

    try {
      if (item?.isSaved) {
        await unsave(item?._id).unwrap();
      } else {
        await save({
          jobSeeker: userData._id,
          job: item?._id,
        }).unwrap();
      }
      refetchSaved();
      showToast(
        "success",
        item?.isSaved ? "Job unsaved successfully" : "Job saved successfully"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    if (keyword) setQuery(keyword);
  };

  return {
    savedJobs: savedJobs?.data,
    savedLoading,
    savedError,
    refetchSaved,
    limit,
    setLimit,
    page,
    setPage,
    keyword,
    setKeyword,
    handleSearch,
    handleSave,
    saving,
    saveError,
    unsaving,
    unsaveError,
  };
};

export default useSavedJobs;
