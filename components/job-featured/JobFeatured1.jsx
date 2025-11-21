"use client";
import Link from "next/link";
import Image from "next/image";
import useGetJobs from "@/hooks/jobs/useGetJobs";
import { formatNumber, FormatTime } from "@/hooks/global/helpers";
import LoadingCard from "../common/LoadingCard";
import useJobActions from "@/hooks/jobs/useJobActions";
import useSavedJobs from "@/hooks/jobs/useSavedJobs";
import {
  Bookmark,
  BookmarkFill,
  Briefcase,
  CashStack,
  Clock,
  GeoAlt,
} from "react-bootstrap-icons";

const JobFeatured1 = () => {
  const {
    //all jobs
    jobs,
    isLoading,
    error,
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
  } = useGetJobs();

  const { refetching, refetchError } = useJobActions();

  const {
    savedJobs,
    savedLoading,
    savedError,
    refetchSaved,
    handleSave,
    saving,
    saveError,
    unsaving,
    unsaveError,
  } = useSavedJobs();

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
            key={item._id}
          >
            <div className="inner-box">
              <div className="content">
                <span className="company-logo">
                  <Image
                    width={50}
                    height={49}
                    src={"/images/resource/company-logo/1-1.png"}
                    alt="item brand"
                  />
                </span>
                <div className="d-flex align-center">
                  <h4>
                    <Link href={`/job-single-v1/${item._id}`}>
                      {item.jobTitle}
                    </Link>
                  </h4>
                  <h4
                    className="ms-2"
                    style={{
                      fontSize: "16px",
                      color: "rgb(85, 93, 255)",
                      borderBottom: "1px solid rgb(85, 93, 255)",
                    }}
                  >
                    {item.type}
                  </h4>
                </div>

                <ul className="job-info">
                  <li>
                    <Briefcase className="icon" />
                    {item.company.companyName}
                  </li>

                  <li>
                    <GeoAlt className="icon" />
                    {item.location}
                  </li>

                  <li>
                    <Clock className="icon" />
                    {FormatTime(item.createdAt)}
                  </li>

                  <li>
                    <CashStack className="icon" />
                    {formatNumber(item.expectedSalary)}
                  </li>
                </ul>

                <ul className="job-other-info">
                  {item?.skills?.map((val, i) => (
                    <li
                      key={i}
                      style={{ backgroundColor: "#b999ffff", color: "#FFF" }}
                    >
                      {val}
                    </li>
                  ))}
                </ul>

                <button
                  className="bookmark-btn"
                  onClick={() => handleSave(item)}
                  disabled={saving || unsaving}
                >
                  {item?.isSaved ? (
                    <BookmarkFill color="#b999ffff" />
                  ) : (
                    <Bookmark color="#b999ffff" />
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JobFeatured1;
