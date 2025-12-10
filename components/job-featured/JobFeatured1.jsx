"use client";
import useGetJobs from "@/hooks/jobs/useGetJobs";
import LoadingCard from "../common/LoadingCard";
import useJobActions from "@/hooks/jobs/useJobActions";
import useSavedJobs from "@/hooks/jobs/useSavedJobs";
import JobCard from "../common/JobCard";

const JobFeatured1 = () => {
  const { jobs, isLoading } = useGetJobs();
  const { refetching } = useJobActions();
  const { savedJobs, handleSave, saving, unsaving } = useSavedJobs();

  const savedIds = new Set(savedJobs?.map((job) => job?.job._id));
  const jobsWithSaved = jobs?.map((job) => ({
    ...job,
    isSaved: savedIds.has(job._id),
  }));

  if (isLoading || refetching) return <LoadingCard />;

  return (
    <>
      {jobsWithSaved?.slice(0, 6).map((item) => {
        return (
          <div
            className="job-block col-lg-6 col-md-12 col-sm-12"
            key={item?._id}
          >
            <JobCard
              item={item}
              handleSave={handleSave}
              saving={saving}
              unsaving={unsaving}
            />
          </div>
        );
      })}
    </>
  );
};

export default JobFeatured1;
