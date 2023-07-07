import Duties from "./Duties";

const JobInfo = ({ jobs, currentJob }) => {
  const { title, dates, company, duties } = jobs[currentJob];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
