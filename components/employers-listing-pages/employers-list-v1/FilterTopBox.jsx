"use client";
import LoadingCard from "@/components/common/LoadingCard";
import Image from "next/image";
import Link from "next/link";

const FilterTopBox = (
  data,
  isLoading,
  keyword,
  setKeyword,
  location,
  setLocation,
  sort,
  setSort,
  limit,
  setLimit,
  page,
  setPage
) => {
  if (isLoading) return <LoadingCard />;

  const filteredCompanies = data?.data?.filter(
    (company) => company?.status === "accepted" && company?.isActive
  );

  const clearAll = () => {
    setKeyword("");
    setLocation("");
    setSort("");
    setLimit(10);
    setPage(1);
  };

  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
          <div className="text">
            <strong>{data?.data?.length || 0}</strong> companies found
          </div>
        </div>

        <div className="sort-by d-flex align-items-center">
          {(keyword || location || sort) && (
            <button
              onClick={clearAll}
              className="btn btn-danger text-nowrap me-2"
            >
              Clear All
            </button>
          )}

          <select
            value={sort}
            className="chosen-single form-select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort (default)</option>
            <option value="asc">Newest</option>
            <option value="des">Oldest</option>
          </select>

          <select
            value={limit}
            className="chosen-single form-select ms-3"
            onChange={(e) => setLimit(Number(e.target.value))}
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={40}>40 per page</option>
            <option value={100}>100 per page</option>
          </select>
        </div>
      </div>

      {/* COMPANY LIST */}
      {filteredCompanies?.length > 0 ? (
        filteredCompanies?.map((company) => {
          return (
            <div className="company-block-three" key={company?._id}>
              <div className="inner-box">
                <div className="content">
                  <div className="content-inner">
                    <span className="company-logo">
                      <Image
                        width={50}
                        height={50}
                        src={company?.logo || "/images/no-logo.png"}
                        alt="company brand"
                      />
                    </span>

                    <h4>
                      <Link href={`/employers-single-v1/${company?._id}`}>
                        {company?.companyName}
                      </Link>
                    </h4>

                    <ul className="job-info">
                      {company?.address?.city && (
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          {company?.address.city},{" "}
                          {company?.address.country || ""}
                        </li>
                      )}

                      {company?.industry && (
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          {company?.industry}
                        </li>
                      )}
                    </ul>
                  </div>

                  <ul className="job-other-info">
                    {company?.isActive && <li className="privacy">Active</li>}

                    <li className="time">
                      Open Jobs – {company?.jobAdvertisement?.length || 0}
                    </li>
                  </ul>
                </div>

                <button className="bookmark-btn">
                  <span className="flaticon-bookmark"></span>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>No records found</div>
      )}

      {/* Pagination Component if you have one */}
      {/* <ListingShowing /> */}
    </>
  );
};

export default FilterTopBox;
