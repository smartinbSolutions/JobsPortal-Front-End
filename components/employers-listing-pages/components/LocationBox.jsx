"use client";

const LocationBox = ({ location, setLocation }) => (
  <>
    <input
      type="text"
      placeholder="City or country"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    />
    <span className="icon flaticon-map-locator"></span>
  </>
);

export default LocationBox;
