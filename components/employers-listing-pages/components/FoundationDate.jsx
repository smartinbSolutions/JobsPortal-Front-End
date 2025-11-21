"use client";

import Slider from "rc-slider";

const FoundationDate = ({ foundationDate, setFoundationDate }) => {
  const handle = (value) => {
    setFoundationDate({ min: value[0], max: value[1] });
  };

  return (
    <div className="range-slider-one salary-range">
      <Slider
        range
        min={1900}
        max={2028}
        value={[foundationDate.min, foundationDate.max]}
        onChange={handle}
      />
      <div className="input-outer">
        <span className="d-inline-flex align-items-center">
          <span className="min">{foundationDate.min}</span>
          <span className="max ms-2">{foundationDate.max}</span>
        </span>
      </div>
    </div>
  );
};

export default FoundationDate;
