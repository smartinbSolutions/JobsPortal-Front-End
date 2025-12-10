"use client";
import Link from "next/link";
import Image from "next/image";
import { FormatTime } from "@/hooks/global/helpers";
import JobSkills from "@/components/job-single-pages/shared-components/JobSkills";

const RelatedJobs = ({ data, employer }) => {
  if (!data) return null;

  return (
    <>
      {data?.slice(0, 3).map((item, i) => (
        <div className="job-block" key={i}>
          <div className="inner-box">
            <div className="content">
              <span className="company-logo">
                <Image
                  width={50}
                  height={49}
                  src={employer?.logo}
                  alt="resource"
                />
              </span>
              <h4>
                <Link href={`/job-single-v1/${item?._id}`}>
                  {item?.jobTitle}
                </Link>
              </h4>

              <ul className="job-info">
                <li>
                  <span className="icon flaticon-briefcase"></span>
                  {employer?.companyName}
                </li>

                <li>
                  <span className="icon flaticon-map-locator"></span>
                  {item?.location}
                </li>

                <li>
                  <span className="icon flaticon-clock-3"></span>{" "}
                  {FormatTime(item?.createdAt, true)}
                </li>

                <li>
                  <span className="icon flaticon-money"></span>{" "}
                  {item?.expectedSalary}
                </li>
              </ul>
              <div className="widget-content">
                <ul className="job-other-info">
                  <JobSkills skills={item?.skills} />
                </ul>
              </div>

              <button className="bookmark-btn">
                <span className="flaticon-bookmark"></span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedJobs;
