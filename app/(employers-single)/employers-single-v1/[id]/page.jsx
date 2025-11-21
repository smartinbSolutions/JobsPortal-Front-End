"use client";

import LoginPopup from "@/components/common/form/login/LoginPopup";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import JobDetailsDescriptions from "@/components/employer-single-pages/shared-components/JobDetailsDescriptions";
import RelatedJobs from "@/components/employer-single-pages/related-jobs/RelatedJobs";
import Image from "next/image";
import { useGetCompanyQuery } from "@/RTK/jobCompaniesApi";
import LoadingCard from "@/components/common/LoadingCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { showToast } from "@/hooks/global/showToast";

const EmployersSingleV1 = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetCompanyQuery(id);

  const [employer, setEmployer] = useState();

  useEffect(() => {
    if (data) setEmployer(data?.data);
  }, [id, data]);

  if (isLoading) return <LoadingCard />;

  return (
    <>
      <span className="header-span"></span>
      <LoginPopup />
      <DefaulHeader />
      <MobileMenu />

      <section className="job-detail-section">
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <Image
                      width={100}
                      height={100}
                      src={employer?.logo}
                      alt="logo"
                    />
                  </span>
                  <h4>{employer?.companyName}</h4>

                  <ul className="job-info">
                    {employer?.address?.city && (
                      <li>
                        <span className="icon flaticon-map-locator"></span>
                        {employer?.address?.city}, {employer?.address?.country}
                      </li>
                    )}

                    {employer?.phone && (
                      <li>
                        <span className="icon flaticon-telephone-1"></span>
                        {employer?.phone}
                      </li>
                    )}

                    <li>
                      <span className="icon flaticon-mail"></span>
                      {employer?.email}
                    </li>
                  </ul>

                  <ul className="job-other-info">
                    <li className="time">
                      Open Jobs – {employer?.jobAdvertisement?.length}
                    </li>
                  </ul>
                </div>
                <div className="btn-box">
                  <a
                    href={`/company-jobs/${employer?._id}`}
                    className="theme-btn btn-style-one"
                    disabled={employer?.jobAdvertisement?.length === 0}
                  >
                    Browse Jobs
                  </a>
                </div>
                {/* <div className="btn-box">
                  <button
                    className="theme-btn btn-style-one"
                    data-bs-toggle="modal"
                    data-bs-target="#privateMessage"
                  >
                    Private Message
                  </button>
                  <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                  </button>
                </div>

                <div
                  className="modal fade"
                  id="privateMessage"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="apply-modal-content modal-content">
                      <div className="text-center">
                        <h3 className="title">
                          Send message to {employer?.name}
                        </h3>
                        <button
                          type="button"
                          className="closed-modal"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <PrivateMessageBox />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <JobDetailsDescriptions description={employer?.about} />

                {employer?.jobAdvertisement?.length > 0 ? (
                  <div className="related-jobs">
                    <div className="title-box">
                      <h3>Newest Jobs From {employer.companyName}</h3>
                      <div className="text">
                        {employer?.jobAdvertisement?.length} job(s) live
                      </div>
                    </div>

                    <RelatedJobs />
                  </div>
                ) : (
                  <div className="title-box">
                    <h3>No available jobs. For now..</h3>
                    <div className="text">
                      Come back later, maybe there will be some.
                    </div>
                  </div>
                )}
              </div>

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      <ul className="company-info mt-0">
                        <li>
                          Primary industry: <span>{employer?.industry}</span>
                        </li>
                        {employer?.size && (
                          <li>
                            Company size: <span>{employer?.size}</span>
                          </li>
                        )}
                        {employer?.foundedAt && (
                          <li>
                            Founded in: <span>{employer?.foundedAt}</span>
                          </li>
                        )}
                        {employer?.phone && (
                          <li>
                            Phone: <span>{employer?.phone}</span>
                          </li>
                        )}
                        <li>
                          Email: <span>{employer?.email}</span>
                        </li>
                        {employer?.address?.city && (
                          <li>
                            Location:{" "}
                            <span>
                              {employer?.address?.city},{" "}
                              {employer?.address?.country}
                            </span>
                          </li>
                        )}
                        {employer?.website && (
                          <li>
                            Website: <span>{employer?.website}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
      <FooterDefault footerStyle="alternate5" />
    </>
  );
};

export default EmployersSingleV1;
