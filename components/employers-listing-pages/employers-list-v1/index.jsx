import FooterDefault from "../../../components/footer/common-footer";
import Breadcrumb from "../../common/Breadcrumb";
import LoginPopup from "../../common/form/login/LoginPopup";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import FilterTopBox from "./FilterTopBox";
import FilterSidebar from "./FilterSidebar";
import useCompanies from "@/hooks/companies/useCompanies";

const index = () => {
  const filters = useCompanies();
  return (
    <>
      <span className="header-span"></span>
      <LoginPopup />
      <DefaulHeader />
      <MobileMenu />
      <Breadcrumb title="Companies" meta="Companies" />
      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            {/* Sidebar */}
            <div className="filters-column col-lg-4">
              <FilterSidebar
                {...filters}
                categories={[
                  { id: 1, name: "IT", value: "it" },
                  { id: 2, name: "Finance", value: "finance" },
                ]}
              />
            </div>

            {/* Content */}
            <div className="content-column col-lg-8">
              <FilterTopBox
                keyword={filters.keyword}
                setKeyword={filters.setKeyword}
                location={filters.location}
                setLocation={filters.setLocation}
                sort={filters.sort}
                setSort={filters.setSort}
                limit={filters.limit}
                setLimit={filters.setLimit}
                page={filters.page}
                setPage={filters.setPage}
                data={filters.data}
                isLoading={filters.isLoading}
              />
            </div>
          </div>
        </div>
      </section>

      <FooterDefault footerStyle="alternate5" />
    </>
  );
};

export default index;
