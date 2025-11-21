import { formatNumber, FormatTime } from "@/hooks/global/helpers";

const JobOverView = ({ oneJob }) => {
  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Date Posted:</h5>
          <span>{FormatTime(oneJob?.createdAt, true)}</span>
        </li>
        <li>
          <i className="icon icon-expiry"></i>
          <h5>Expiration date:</h5>
          <span>{FormatTime(oneJob?.endDate)}</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5>Location:</h5>
          <span>{oneJob?.location}</span>
        </li>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>Job Title:</h5>
          <span>{oneJob?.jobTitle}</span>
        </li>
        <li>
          <i className="icon icon-clock"></i>
          <h5>Job Type:</h5>
          <span>{oneJob?.type}</span>
        </li>
        <li>
          <i className="icon icon-salary"></i>
          <h5>Salary:</h5>
          <span>{formatNumber(oneJob?.expectedSalary)}</span>
        </li>
      </ul>
    </div>
  );
};

export default JobOverView;
