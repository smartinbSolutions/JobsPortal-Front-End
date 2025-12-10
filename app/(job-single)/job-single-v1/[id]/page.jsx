"use client";
import "../../../../styles/custom.css";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import RelatedJobs from "@/components/job-single-pages/related-jobs/RelatedJobs";
import JobOverView from "@/components/job-single-pages/job-overview/JobOverView";
import JobSkills from "@/components/job-single-pages/shared-components/JobSkills";
import CompnayInfo from "@/components/job-single-pages/shared-components/CompanyInfo";
import SocialTwo from "@/components/job-single-pages/social/SocialTwo";
import JobDetailsDescriptions from "@/components/job-single-pages/shared-components/JobDetailsDescriptions";
import Image from "next/image";
import useGetJobs from "@/hooks/jobs/useGetJobs";
import { formatNumber, FormatTime } from "@/hooks/global/helpers";
import useSavedJobs from "@/hooks/jobs/useSavedJobs";
import { useEffect, useState } from "react";
import { Bookmark, BookmarkFill } from "react-bootstrap-icons";
import Link from "next/link";
import useJobActions from "@/hooks/jobs/useJobActions";
import { showToast } from "@/hooks/global/showToast";

const JobSingleDynamicV1 = () => {
  const [isSaved, setIsSaved] = useState(false);
  const { oneJob, id, refetchOneJob } = useGetJobs();
  const { savedJobs, handleSave, saving, unsaving } = useSavedJobs();
  const {
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
  } = useJobActions(refetchOneJob);

  useEffect(() => {
    checkIfSaved();
  }, [savedJobs]);
  const checkIfSaved = () => {
    if (savedJobs?.length > 0 && id) {
      const alreadySaved = savedJobs.some((item) => item.job?._id === id);
      setIsSaved(alreadySaved);
    }
  };

  return (
    <>
      <span className="header-span"></span>
      <LoginPopup />
      <DefaulHeader />
      <MobileMenu />

      <section className="job-detail-section">
        {/* Job header */}
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <Image
                      width={100}
                      height={98}
                      src={"/images/resource/company-logo/1-1.png"}
                      alt="logo"
                    />
                  </span>
                  <h4>{oneJob?.jobTitle}</h4>

                  <ul className="job-info">
                    <li>
                      <span className="icon flaticon-briefcase"></span>
                      {oneJob?.company?.companyName}
                    </li>
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {oneJob?.location}
                    </li>
                    <li>
                      <span className="icon flaticon-clock-3"></span>{" "}
                      {FormatTime(oneJob?.createdAt, true)}
                    </li>
                    <li>
                      <span className="icon flaticon-money"></span>{" "}
                      {formatNumber(oneJob?.expectedSalary)}
                    </li>
                  </ul>
                </div>

                {/* Apply & Save buttons */}
                <div className="btn-box">
                  {!oneJob?.isApplied ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (userData) setOpenApply(true);
                        else
                          showToast("error", "Please log in to apply for jobs");
                      }}
                      className="theme-btn btn-style-one"
                    >
                      Apply For Job
                    </button>
                  ) : (
                    <button className="success-btn">Already applied</button>
                  )}
                  <button
                    className="bookmark-btn"
                    onClick={() => handleSave({ ...oneJob, isSaved })}
                    disabled={saving || unsaving}
                  >
                    {isSaved ? (
                      <BookmarkFill color="#b999ffff" />
                    ) : (
                      <Bookmark color="#b999ffff" />
                    )}
                  </button>
                </div>

                {/* Apply modal */}
                {openApply && (
                  <div
                    className="modal-backdrop-custom"
                    onClick={() => setOpenApply(false)}
                  >
                    <div
                      className="modal-dialog-custom"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="apply-modal-content modal-content">
                        <div className="text-center">
                          <h3 className="title">Apply for this job</h3>

                          <button
                            type="button"
                            className="closed-modal"
                            onClick={() => setOpenApply(false)}
                          ></button>
                        </div>

                        <form className="default-form job-apply-form">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                              <textarea
                                className="darma"
                                name="message"
                                value={coverLetter}
                                onChange={(e) => setCoverLetter(e.target.value)}
                                placeholder="Cover letter (Optional)"
                              ></textarea>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                              <div className="input-group checkboxes square">
                                <input
                                  type="checkbox"
                                  name="remember-me"
                                  id="rememberMe"
                                  checked={accepted}
                                  onChange={(e) =>
                                    setAccepted(e.target.checked)
                                  }
                                />
                                <label
                                  htmlFor="rememberMe"
                                  className="remember"
                                >
                                  <span className="custom-checkbox"></span> I
                                  accept the{" "}
                                  <span data-bs-dismiss="modal">
                                    <Link href="/terms">
                                      Terms and Conditions and Privacy Policy
                                    </Link>
                                  </span>
                                </label>
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                              <button
                                className="theme-btn btn-style-one w-100"
                                type="button"
                                name="submit-form"
                                onClick={() => submit(oneJob?.company?._id)}
                              >
                                Apply Job
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <JobDetailsDescriptions oneJob={oneJob} />

                <div className="other-options">
                  <div className="social-share">
                    <h5>Share this job</h5>
                    <SocialTwo />
                  </div>
                </div>

                <div className="related-jobs">
                  <div className="title-box">
                    <h3>Related Jobs</h3>
                    <div className="text">
                      2020 jobs live - 293 added today.
                    </div>
                  </div>

                  <RelatedJobs />
                </div>
              </div>

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    <h4 className="widget-title">Job Overview</h4>
                    <JobOverView oneJob={oneJob} />
                    <h4 className="widget-title mt-5">Job Skills</h4>
                    <div className="widget-content">
                      <JobSkills skills={oneJob?.skills} />
                    </div>
                  </div>

                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      <div className="company-title">
                        <div className="company-logo">
                          <Image
                            width={54}
                            height={53}
                            src={"/images/resource/company-logo/1-1.png"}
                            alt="resource"
                          />
                        </div>
                        <h5 className="company-name">
                          {oneJob?.company?.companyName}
                        </h5>
                        <a
                          href={`/employers-single-v1/${oneJob?.company?._id}`}
                          className="profile-link"
                        >
                          View company profile
                        </a>
                      </div>

                      <CompnayInfo company={oneJob?.company} />
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterDefault footerStyle="alternate5" />
    </>
  );
};

export default JobSingleDynamicV1;
