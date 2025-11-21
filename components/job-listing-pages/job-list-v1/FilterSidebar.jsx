"use client";

import { useState } from "react";
import CallToActions from "../components/CallToActions";
import SearchBox from "@/components/employers-listing-pages/components/SearchBox";

const FilterSidebar = () => {
  const [keyword, setKeyword] = useState();

  return (
    <div className="inner-column">
      <div className="filters-outer">
        <button
          type="button"
          className="btn-close text-reset close-filters show-1023"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>

        <div className="filter-block">
          <h4>Search by Keywords</h4>
          <div className="form-group">
            <SearchBox keyword={keyword} setKeyword={setKeyword} />
          </div>
        </div>
        {/* <div className="switchbox-outer">
          <h4>Job type</h4>
          <JobType />
        </div>

        <div className="checkbox-outer">
          <h4>Date Posted</h4>
          <DatePosted />
        </div>

        <div className="checkbox-outer">
          <h4>Experience Level</h4>
          <ExperienceLevel />
        </div>

        <div className="filter-block">
          <h4>Salary</h4>

          <SalaryRangeSlider />
        </div>

        <div className="filter-block">
          <h4>Tags</h4>
          <Tag />
        </div> */}
      </div>

      <CallToActions />
    </div>
  );
};

export default FilterSidebar;
