import Breadcrumb from "@/components/common/Breadcrumb";
import FooterDefault from "../../../../components/footer/common-footer";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import FilterJobsBox from "@/components/job-listing-pages/job-list-v1/FilterJobsBox";
import FilterSidebar from "@/components/job-listing-pages/job-list-v1/FilterSidebar";

const index = () => {
  return (
    <>
      <span className="header-span"></span>
      <LoginPopup />
      <DefaulHeader />
      <MobileMenu />
      <Breadcrumb title="Find Jobs" meta="Jobs" />

      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="filter-sidebar"
              aria-labelledby="offcanvasLabel"
            >
              <div className="filters-column hide-left">
                <FilterSidebar />
              </div>
            </div>

            <div className="filters-column hidden-1023 col-lg-4 col-md-12 col-sm-12">
              <FilterSidebar />
            </div>

            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="ls-outer">
                <FilterJobsBox />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterDefault footerStyle="alternate5" />
    </>
  );
};

export default index;
