import Categories from "../components/Categories";
import LocationBox from "../components/LocationBox";
import FoundationDate from "../components/FoundationDate";
import SearchBox from "../components/SearchBox";

const FilterSidebar = (props) => {
  const {
    keyword,
    setKeyword,
    location,
    setLocation,
    category,
    setCategory,
    categories,
    foundationDate,
    setFoundationDate,
  } = props;

  return (
    <div className="inner-column pd-right">
      <div className="filters-outer">
        <div className="filter-block">
          <h4>Search by Keywords</h4>
          <SearchBox keyword={keyword} setKeyword={setKeyword} />
        </div>

        <div className="filter-block">
          <h4>Foundation Date</h4>
          <FoundationDate
            foundationDate={foundationDate}
            setFoundationDate={setFoundationDate}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
