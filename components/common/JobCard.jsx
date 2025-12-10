import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bookmark,
  BookmarkFill,
  Briefcase,
  CashStack,
  Clock,
  GeoAlt,
} from "react-bootstrap-icons";
import { formatNumber, FormatTime } from "@/hooks/global/helpers";

const JobCard = ({
  item,
  handleSave,
  saving,
  unsaving,
  showCompany = true,
}) => {
  return (
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
            <Link href={`/job-single-v1/${item?._id}`}>{item?.jobTitle}</Link>
          </h4>
          <h4
            className="ms-2"
            style={{
              fontSize: "16px",
              color: "rgb(85, 93, 255)",
              borderBottom: "1px solid rgb(85, 93, 255)",
            }}
          >
            {item?.type}
          </h4>
        </div>

        <ul className="job-info">
          {showCompany && (
            <li>
              <Briefcase className="icon" />
              {item?.company?.companyName}
            </li>
          )}

          <li>
            <GeoAlt className="icon" />
            {item?.location}
          </li>

          <li>
            <Clock className="icon" />
            {FormatTime(item?.createdAt)}
          </li>

          <li>
            <CashStack className="icon" />
            {formatNumber(item?.expectedSalary)}
          </li>
        </ul>

        <ul className="job-other-info">
          {item?.skills?.map((val, i) => (
            <li key={i} style={{ backgroundColor: "#b999ffff", color: "#FFF" }}>
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
  );
};

export default JobCard;
