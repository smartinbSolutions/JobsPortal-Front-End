import Cookies from "js-cookie";
import { useState } from "react";
import { showToast } from "../global/showToast";
import { useCreateApplicationMutation } from "@/RTK/applicationsApi";
import { useParams } from "next/navigation";

const useJobActions = (refetchOneJob) => {
  const { id } = useParams();
  const [accepted, setAccepted] = useState(false);
  const [openApply, setOpenApply] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const cookies = Cookies.get("user");
  const userData = cookies ? JSON.parse(cookies) : null;

  const [apply, { isLoading, error }] = useCreateApplicationMutation();

  const submit = async () => {
    if (!userData) {
      showToast("error", "Please log in to apply for jobs");
      return;
    }
    if (!accepted) {
      showToast(
        "warn",
        "Please accept the Terms and Conditions and Privacy Policy"
      );
      return;
    }
    try {
      await apply({
        jobSeekerId: userData?._id,
        jobId: id,
      }).unwrap();
      refetchOneJob();
      setOpenApply(false);
    } catch (error) {
      showToast("error", "Error occurred while sending your request");
      console.log(error);
    }
  };

  return {
    accepted,
    setAccepted,
    apply,
    isLoading,
    error,
    submit,
    openApply,
    setOpenApply,
    userData,
    coverLetter,
    setCoverLetter,
  };
};

export default useJobActions;
