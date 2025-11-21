"use client";

import Link from "next/link";
import jobs from "../../../data/job-featured";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addDatePosted,
  addDestination,
  addKeyword,
  addLocation,
  addPerPage,
  addSalary,
  addSort,
  addTag,
  clearExperience,
  clearJobType,
} from "../../../features/filter/filterSlice";
import {
  clearDatePostToggle,
  clearExperienceToggle,
  clearJobTypeToggle,
} from "../../../features/job/jobSlice";
import Image from "next/image";
import { useGetAllJobsQuery } from "@/RTK/jobsApi";
import { useParams } from "next/navigation";
import { useState } from "react";
import LoadingCard from "@/components/common/LoadingCard";

const FilterJobsBox = () => {
  const { id: companyId } = useParams();

  // Local states for filters
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState(""); // single value or array
  const [datePosted, setDatePosted] = useState("");
  const [experience, setExperience] = useState("");
  const [salaryMin, setSalaryMin] = useState(0);
  const [salaryMax, setSalaryMax] = useState(20000);
  const [tag, setTag] = useState("");
  const [sort, setSort] = useState(""); // "asc" | "des"
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  // Fetch jobs from backend using all filters
  const { data, isLoading, error } = useGetAllJobsQuery({
    companyId,
    keyword,
    // location,
    // category,
    // jobType,
    // datePosted,
    // experience,
    // salaryMin,
    // salaryMax,
    // tag,
    // sort,
    limit,
    page,
  });

  const jobs = data?.data || [];

  // Clear all filters
  const clearAll = () => {
    setKeyword("");
    setLocation("");
    setCategory("");
    setJobType("");
    setDatePosted("");
    setExperience("");
    setSalaryMin(0);
    setSalaryMax(20000);
    setTag("");
    setSort("");
    setLimit(10);
    setPage(1);
  };

  if (isLoading) return <LoadingCard />;
  if (error) return <div>Error loading jobs</div>;

  return (
    <>
      {/* TOP BAR */}
      <div className="ls-switcher">
        <div className="show-result">
          <div className="show-1023">
            <button
              type="button"
              className="theme-btn toggle-filters "
              data-bs-toggle="offcanvas"
              data-bs-target="#filter-sidebar"
            >
              <span className="icon icon-filter"></span> Filter
            </button>
          </div>

          <div className="text">
            Show <strong>{data?.results || 0}</strong> jobs
          </div>
        </div>

        <div className="sort-by d-flex align-items-center">
          {(keyword ||
            location ||
            category ||
            jobType ||
            datePosted ||
            experience ||
            salaryMin !== 0 ||
            salaryMax !== 20000 ||
            tag ||
            sort) && (
            <button
              onClick={clearAll}
              className="btn btn-danger text-nowrap me-2"
              style={{ minHeight: "45px", marginBottom: "15px" }}
            >
              Clear All
            </button>
          )}

          {/* Sort */}
          <select
            value={sort}
            className="chosen-single form-select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort by (default)</option>
            <option value="asc">Newest</option>
            <option value="des">Oldest</option>
          </select>

          {/* Per page */}
          <select
            onChange={(e) => setLimit(Number(e.target.value))}
            className="chosen-single form-select ms-3"
            value={limit}
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={30}>30 per page</option>
            <option value={50}>50 per page</option>
          </select>
        </div>
      </div>

      {/* JOB LIST */}
      {jobs?.length > 0 ? (
        jobs.map((item) => (
          <div className="job-block" key={item._id}>
            <div className="inner-box">
              <div className="content">
                <span className="company-logo">
                  <Image
                    width={50}
                    height={49}
                    src={item.logo || "/images/no-logo.png"}
                    alt="company logo"
                  />
                </span>

                <h4>
                  <Link href={`/job-single-v1/${item._id}`}>
                    {item.jobTitle}
                  </Link>
                </h4>

                <ul className="job-info">
                  <li>
                    <span className="icon flaticon-briefcase"></span>{" "}
                    {item.companyName}
                  </li>
                  <li>
                    <span className="icon flaticon-map-locator"></span>{" "}
                    {item.location}
                  </li>
                  <li>
                    <span className="icon flaticon-clock-3"></span> {item.time}
                  </li>
                  <li>
                    <span className="icon flaticon-money"></span> {item.salary}
                  </li>
                </ul>

                <ul className="job-other-info">
                  {item.jobType?.map((val, i) => (
                    <li key={i} className={`${val.styleClass}`}>
                      {val.type}
                    </li>
                  ))}
                </ul>

                <button className="bookmark-btn">
                  <span className="flaticon-bookmark"></span>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No jobs found</div>
      )}

      {/* Pagination */}
      <div className="ls-show-more">
        <p>
          Page {page} of {data?.totalPages || 1}
        </p>
        <button
          className="show-more"
          onClick={() =>
            setPage((prev) => Math.min(prev + 1, data?.totalPages))
          }
          disabled={page >= data?.totalPages}
        >
          Show More
        </button>
      </div>
    </>
  );
};

export default FilterJobsBox;
