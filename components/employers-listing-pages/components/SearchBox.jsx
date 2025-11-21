"use client";

const SearchBox = ({ keyword, setKeyword }) => (
  <>
    <input
      type="text"
      placeholder="Search..."
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
    <span className="icon flaticon-search-3"></span>
  </>
);

export default SearchBox;
