"use client";

const Categories = ({ category, setCategory, categories }) => (
  <>
    <select
      className="form-select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Choose a category</option>
      {categories?.map((c) => (
        <option value={c.value} key={c.id}>
          {c.name}
        </option>
      ))}
    </select>
    <span className="icon flaticon-briefcase"></span>
  </>
);

export default Categories;
