const CompanyInfo = ({ company }) => {
  return (
    <ul className="company-info">
      <li>
        Primary industry: <span>{company?.industry}</span>
      </li>
      <li>
        Company size: <span>{company?.size}</span>
      </li>
      <li>
        Phone:{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => window.open(`tel:${company?.phone}`)}
        >
          {company?.phone}
        </span>
      </li>
      <li>
        Email:{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => window.open(`mailto:${company?.email}`)}
        >
          {company?.email}
        </span>
      </li>
      <li>
        Contact name: <span>{company?.contactPersonName}</span>
      </li>
      <li>
        Location:{" "}
        <span>
          {company?.address?.city}, {company?.address?.country}
        </span>
      </li>
      <li>
        Website:{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => window.open(company?.website, "_blank")}
        >
          {company?.website}
        </span>
      </li>
    </ul>
  );
};

export default CompanyInfo;
