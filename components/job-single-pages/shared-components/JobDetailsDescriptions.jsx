import dynamic from "next/dynamic";

const DescriptionClient = dynamic(() => import("./DescriptionClient"), {
  ssr: false,
});

const JobDetailsDescriptions = ({ oneJob }) => {
  return (
    <div className="job-detail">
      <h4>Job Description</h4>
      <DescriptionClient html={oneJob?.description || ""} />
      <h4>Key Responsibilities</h4>
      <ul className="list-style-three">
        {oneJob?.responsibilities?.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <h4>Skill & Experience</h4>
      <ul className="list-style-three">
        {oneJob?.qualifications?.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default JobDetailsDescriptions;
